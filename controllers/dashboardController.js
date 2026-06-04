const Task = require('../models/Task');
const Team = require('../models/Team');
const SprintMetric = require('../models/SprintMetric');

// @desc    Get all sprint metrics for chart
// @route   GET /api/dashboard/sprint-metrics
const getSprintMetrics = async (req, res) => {
    try {
        const metrics = await SprintMetric.find().sort({ createdAt: 1 });
        res.json({ success: true, data: metrics });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// @desc    Get all teams
// @route   GET /api/dashboard/teams
const getTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.json({ success: true, data: teams });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// @desc    Get recent tasks (for dashboard table)
// @route   GET /api/dashboard/tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.json({ success: true, data: tasks });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// @desc    Get high/medium risk tasks
// @route   GET /api/dashboard/risk-tasks
const getRiskTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ risk: { $in: ['High', 'Medium'] } }).sort({ riskScore: -1 });
        res.json({ success: true, data: tasks });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// @desc    Get dashboard summary (KPIs)
// @route   GET /api/dashboard/summary
const getDashboardSummary = async (req, res) => {
    try {
        const totalTasks = await Task.countDocuments();
        const atRiskTasks = await Task.countDocuments({ risk: { $in: ['High', 'Medium'] } });
        const teamCount = await Team.countDocuments();

        // Latest sprint metric (for AI accuracy)
        const metrics = await SprintMetric.find().sort({ createdAt: -1 }).limit(2);
        let aiAccuracy = 92;
        let accuracyTrend = 12;
        if (metrics.length >= 1) {
            aiAccuracy = Math.max(0, Math.round(100 - Math.abs(metrics[0].aiError)));
        }
        if (metrics.length >= 2) {
            const prev = Math.max(0, Math.round(100 - Math.abs(metrics[1].aiError)));
            accuracyTrend = Math.round(aiAccuracy - prev);
        }

        res.json({
            success: true,
            data: {
                activeSprints: 3,
                tasksAtRisk: atRiskTasks,
                aiAccuracy,
                accuracyTrend,
                teamsAvailable: teamCount
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = { getSprintMetrics, getTeams, getTasks, getRiskTasks, getDashboardSummary };
