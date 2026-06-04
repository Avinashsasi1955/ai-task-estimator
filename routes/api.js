const express = require('express');
const router = express.Router();

const { loginUser, getMe, logoutUser } = require('../controllers/authController');
const { getSprintMetrics, getTeams, getTasks, getRiskTasks, getDashboardSummary } = require('../controllers/dashboardController');
const { upload, uploadCSV } = require('../controllers/uploadController');
const { predictEffort, trainModel } = require('../controllers/predictionController');
const { getSettings, updateSetting, updateSettingsBatch } = require('../controllers/settingsController');
const { verifyLeadAndChange } = require('../controllers/teamController');
// --- Auth middleware (simple) ---
const jwt = require('jsonwebtoken');
const protect = (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) return res.status(401).json({ success: false, message: 'Not authorized' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: 'Token invalid or expired' });
    }
};

// --- Auth Routes ---
router.post('/auth/login', loginUser);
router.get('/auth/logout', logoutUser);
router.get('/auth/me', protect, getMe);

// --- Dashboard Routes ---
router.get('/dashboard/summary', protect, getDashboardSummary);
router.get('/dashboard/sprint-metrics', protect, getSprintMetrics);
router.get('/dashboard/teams', protect, getTeams);
router.get('/dashboard/tasks', protect, getTasks);
router.get('/dashboard/risk-tasks', protect, getRiskTasks);

// --- Upload Routes ---
router.post('/upload/csv', protect, upload.single('csvFile'), uploadCSV);

// --- Prediction Routes ---
router.post('/predict/effort', protect, predictEffort);
router.post('/predict/train', protect, trainModel);

// --- Settings Routes ---
router.get('/settings', protect, getSettings);
router.post('/settings/batch', protect, updateSettingsBatch);
router.post('/settings/:key', protect, updateSetting);

// --- Team Routes ---
router.post('/teams/change-lead', protect, verifyLeadAndChange);

module.exports = router;
