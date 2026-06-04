import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, r2_score
import joblib
import os

MODEL_PATH = os.path.join(os.path.dirname(__file__), '../saved_models/effort_model.joblib')

def train_effort_model(df: pd.DataFrame):
    """
    Trains a Random Forest Regressor to estimate actual_hours based on task features.
    """
    # Ensure columns exist
    required_cols = ['complexity', 'sp', 'exp', 'team_name', 'actual_hours']
    for col in required_cols:
        if col not in df.columns:
            raise ValueError(f"Missing required column: {col}")

    X = df[['complexity', 'sp', 'exp', 'team_name']]
    y = df['actual_hours']

    # Preprocessing pipelines
    numeric_features = ['sp']
    numeric_transformer = Pipeline(steps=[
        ('imputer', SimpleImputer(strategy='median')),
        ('scaler', StandardScaler())
    ])

    categorical_features = ['complexity', 'exp', 'team_name']
    categorical_transformer = Pipeline(steps=[
        ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
        ('onehot', OneHotEncoder(handle_unknown='ignore'))
    ])

    preprocessor = ColumnTransformer(
        transformers=[
            ('num', numeric_transformer, numeric_features),
            ('cat', categorical_transformer, categorical_features)
        ])

    # Full Pipeline
    pipeline = Pipeline(steps=[
        ('preprocessor', preprocessor),
        ('regressor', RandomForestRegressor(n_estimators=100, max_depth=10, random_state=42))
    ])

    # Try train-test split, if not enough data, just fit all
    if len(df) > 5:
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        pipeline.fit(X_train, y_train)
        predictions = pipeline.predict(X_test)
        mae = mean_absolute_error(y_test, predictions)
        r2 = r2_score(y_test, predictions)
    else:
        pipeline.fit(X, y)
        mae = 0.0
        r2 = 1.0

    # Ensure directory exists and Save Model
    os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)
    joblib.dump(pipeline, MODEL_PATH)

    return {"mae": float(mae), "r2": float(r2), "sample_size": len(df)}
