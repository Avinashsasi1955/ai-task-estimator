from pydantic import BaseModel
from typing import List, Optional

class TaskInput(BaseModel):
    taskName: str
    complexity: str
    sp: int
    exp: str
    team_name: str

class TaskPrediction(BaseModel):
    task_name: str
    estimated_hours: int
    confidence_percent: int
    confidence_interval: List[int]
    interpretation: str
    
class SimilarTask(BaseModel):
    id: str
    name: str
    actual_hours: int
    team: str
    variance: int

class PredictionResponse(BaseModel):
    success: bool
    prediction: TaskPrediction
    similar_tasks: Optional[List[SimilarTask]] = None
    
# Formats for model training inputs
class HistoricalTask(BaseModel):
    task_id: str
    complexity: str
    sp: int
    exp: str
    team_name: str
    actual_hours: int

class TrainingRequest(BaseModel):
    historical_data: List[HistoricalTask]
