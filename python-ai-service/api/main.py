from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import logging

from models.schemas import TaskInput, PredictionResponse, TrainingRequest
from ml_services.predictor import predict_effort
from ml_services.trainer import train_effort_model
from ml_services.similar_tasks import similarity_engine

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="AI Task Estimator - ML Service", version="1.0.0")

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "AI Service is Up & Running"}

@app.post("/api/predict/effort", response_model=PredictionResponse)
def get_prediction(task: TaskInput):
    logger.info(f"Received prediction request for task: {task.taskName}")
    try:
        task_data = task.model_dump()
        
        # 1. Prediction using RandomForest
        pred_result = predict_effort(task_data)
        
        # 2. Advanced Prediction with XAI and Risk Scoring
        # Note: the engine needs to be pre-fitted via a data-load or train step.
        ai_analysis = similarity_engine.predict_with_xai(task_data, n_neighbors=3)
        
        return {
            "success": True,
            "prediction": {
                "estimatedHours": ai_analysis.get("predicted_hours", pred_result.get("estimatedHours")),
                "confidencePercent": ai_analysis.get("confidence_percent", 90),
                "riskLevel": ai_analysis.get("risk_level", "Medium"),
                "riskScore": ai_analysis.get("risk_score", 50),
                "delayProbability": ai_analysis.get("delay_probability", 0.5),
                "xaiReasoning": ai_analysis.get("xai_reasoning", [])
            },
            "similar_tasks": ai_analysis.get("similar_tasks", [])
        }
    except Exception as e:
        logger.error(f"Error making prediction: {e}")
        raise HTTPException(status_code=500, detail="Error generating prediction")

@app.post("/api/train")
def train_model(req: TrainingRequest):
    logger.info(f"Received training request with {len(req.historical_data)} records.")
    try:
        # Convert to DataFrame
        data = [t.model_dump() for t in req.historical_data]
        df = pd.DataFrame(data)
        
        # Verify required columns for trainer
        # HistoricalTask has: task_id, complexity, sp, exp, team_name, actual_hours
        
        # 1. Train Random Forest Assessor
        train_metrics = train_effort_model(df)
        
        # 2. Refresh the Similarity KNN Engine
        # map generic names for consistency if needed
        sim_df = df.copy()
        sim_df['name'] = "Historical Task " + sim_df['task_id']
        sim_df['team'] = sim_df['team_name']
        similarity_engine.fit(sim_df.to_dict('records'))
        
        return {
            "success": True,
            "message": "Models retrained successfully",
            "metrics": train_metrics
        }
    except Exception as e:
        logger.error(f"Error training model: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
