# AI-Based Task Estimation System

An AI-powered task estimation platform that helps Agile software teams predict task effort and completion time using Machine Learning. The system combines a modern web dashboard, REST APIs, MongoDB storage, and a Python-based AI microservice to generate data-driven task estimations from historical sprint data.

## Features

* AI-powered task effort prediction
* K-Nearest Neighbors (KNN) estimation engine
* Sprint analytics dashboard
* Team performance monitoring
* Risk assessment and task tracking
* JWT-based authentication
* MongoDB data management
* FastAPI AI microservice

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Chart.js

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### AI Service

* Python
* FastAPI
* Pandas
* Scikit-learn
* KNN Algorithm

## System Architecture

```text
Frontend (HTML/CSS/JS)
        │
        ▼
Node.js + Express API
        │
 ┌──────┴──────┐
 ▼             ▼
MongoDB     FastAPI AI Service
                │
                ▼
       Machine Learning Engine
```

## Project Structure

```text
ai-task-estimator/
│
├── index.html
├── styles.css
├── app.js
├── server.js
├── seed.js
├── package.json
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
│
└── python-ai-service/
    ├── api/
    ├── core/
    ├── data/
    ├── ml_services/
    ├── main.py
    └── requirements.txt
```

## Machine Learning Workflow

1. Collect historical sprint data
2. Process task attributes
3. Normalize features
4. Find similar tasks using KNN
5. Predict effort and completion time
6. Return AI-based estimation results

## Installation

```bash
git clone https://github.com/your-username/ai-task-estimator.git
npm install
```

Start Backend:

```bash
npm start
```

Start AI Service:

```bash
uvicorn main:app --reload
```

## Documentation

Detailed project information is available in:

* PROJECT_OVERVIEW.md

## Author

**Avinash**

AI-Based Task Estimation System using Machine Learning, FastAPI, Node.js, Express.js, and MongoDB.
