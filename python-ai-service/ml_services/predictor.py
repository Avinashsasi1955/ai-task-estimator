import os
import joblib
import pandas as pd
import numpy as np

MODEL_PATH = os.path.join(os.path.dirname(__file__), '../saved_models/effort_model.joblib')

def load_model():
    if os.path.exists(MODEL_PATH):
        return joblib.load(MODEL_PATH)
    return None

def predict_effort(task_data: dict) -> dict:
    """
    Predicts effort using the saved Random Forest model, providing point estimates 
    and 95% confidence intervals based on tree variance.
    """
    model = load_model()
    if not model:
        # Fallback heuristic if no model trained yet
        base = task_data['sp'] * 4
        if task_data['complexity'] == 'High': base *= 1.5
        elif task_data['complexity'] == 'Low': base *= 0.8
        est = round(base)
        return {
            "task_name": task_data['taskName'],
            "estimated_hours": est,
            "confidence_percent": 80,
            "confidence_interval": [est - 5, est + 5],
            "interpretation": f"Heuristic prediction based on {task_data['sp']} story points and {task_data['complexity']} complexity. No trained ML model found."
        }

    input_df = pd.DataFrame([task_data])
    
    # Point prediction
    est_hours = model.predict(input_df)[0]
    
    # Calculate confidence interval using tree variance
    regressor = model.named_steps['regressor']
    preprocessor = model.named_steps['preprocessor']
    X_transformed = preprocessor.transform(input_df)
    
    tree_preds = [tree.predict(X_transformed)[0] for tree in regressor.estimators_]
    std_dev = np.std(tree_preds)
    
    # 95% Confidence Interval (± 1.96 * std_dev)
    ci_lower = max(0, est_hours - 1.96 * std_dev)
    ci_upper = est_hours + 1.96 * std_dev
    
    # Compute confidence percentage (0-100)
    # Higher std_dev relative to est_hours means lower confidence
    variability = std_dev / (est_hours if est_hours > 0 else 1)
    confidence_score = max(0, min(100, 100 - (variability * 100)))
    
    interpretation = (
        f"The Random Forest model analyzed '{task_data['complexity']}' complexity "
        f"and experience level '{task_data['exp']}'. Variance across decision trees indicates "
        f"a +/- {round(ci_upper - est_hours)} hours swing."
    )
    
    return {
        "task_name": task_data['taskName'],
        "estimated_hours": round(est_hours),
        "confidence_percent": round(confidence_score),
        "confidence_interval": [round(ci_lower), round(ci_upper)],
        "interpretation": interpretation
    }
