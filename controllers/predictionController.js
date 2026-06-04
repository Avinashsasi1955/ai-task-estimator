const Task = require('../models/Task');
const Team = require('../models/Team');
const Setting = require('../models/Setting');

// Complexity multipliers (hours per story point)
const COMPLEXITY_FACTORS = { Low: 3, Medium: 5, High: 8 };
const EXP_MODIFIERS = { Junior: 1.5, Intermediate: 1.15, Senior: 1.0, Expert: 0.85 };
const AI_NOISE_RANGE = 0.08; // ±8% random variance

// @desc    Predict effort for a single task
// @route   POST /api/predict/effort
const predictEffort = async (req, res) => {
    const { taskName, complexity, sp, exp, teamName } = req.body;

    if (!complexity || !sp || !exp) {
        return res.status(400).json({ success: false, message: 'complexity, sp, and exp are required' });
    }

    try {
        // --- Core estimation formula ---
        let currentFactors = { ...COMPLEXITY_FACTORS };
        const savedSetting = await Setting.findOne({ key: 'ai_model_weights' });
        if (savedSetting && savedSetting.value) {
            currentFactors = { ...currentFactors, ...savedSetting.value };
        }

        const baseFactor = currentFactors[complexity] || 5;
        const expMod = EXP_MODIFIERS[exp] || 1.0;
        const noise = 1 + (Math.random() * AI_NOISE_RANGE * 2 - AI_NOISE_RANGE);
        const estimatedHours = Math.round(baseFactor * sp * expMod * noise);

        // --- Confidence score ---
        // Higher complexity + junior = lower confidence
        let confidence = 85;
        if (complexity === 'High') confidence -= 10;
        if (exp === 'Junior') confidence -= 8;
        if (exp === 'Expert') confidence += 5;
        confidence = Math.min(99, Math.max(55, confidence));

        // --- Risk calculation ---
        let riskScore = 0;
        if (complexity === 'High') riskScore += 40;
        else if (complexity === 'Medium') riskScore += 20;
        if (exp === 'Junior') riskScore += 35;
        else if (exp === 'Intermediate') riskScore += 15;
        riskScore += Math.floor(Math.random() * 15); // Some randomness

        let riskLevel = 'LOW';
        if (riskScore >= 60) riskLevel = 'HIGH';
        else if (riskScore >= 30) riskLevel = 'MEDIUM';

        const delayProbability = Math.min(95, riskScore + 10);

        // --- Team recommendation ---
        let recommendedTeam = { name: 'Team Alpha', matchPercent: 85 };
        if (teamName && teamName !== 'All') {
            // Find the selected team from DB
            const team = await Team.findOne({ name: { $regex: teamName, $options: 'i' } });
            if (team) {
                const matchPercent = Math.round(80 + (team.accuracy - 80) * 0.5);
                recommendedTeam = { name: team.name, matchPercent };
            }
        } else {
            // Find best team from DB for this complexity
            const teams = await Team.find().sort({ accuracy: -1 }).limit(1);
            if (teams.length > 0) {
                recommendedTeam = {
                    name: teams[0].name,
                    matchPercent: Math.round(80 + (teams[0].accuracy - 80) * 0.5)
                };
            }
        }

        // --- Find similar historical tasks ---
        const similarTasks = await Task.find({
            complexity,
            sp: { $gte: sp - 2, $lte: sp + 2 }
        }).limit(3);

        res.json({
            success: true,
            prediction: {
                taskName: taskName || 'Unnamed Task',
                estimatedHours,
                confidence,
                riskLevel,
                riskScore,
                delayProbability,
                recommendedTeam,
                similarTasks: similarTasks.map(t => ({
                    id: t.taskId,
                    name: t.name,
                    actualHours: t.act,
                    team: t.team,
                    variance: t.est > 0 ? Math.round(((t.act - t.est) / t.est) * 100) : 0
                }))
            }
        });

    } catch (err) {
        console.error('Prediction error:', err);
        res.status(500).json({ success: false, message: 'Server error during prediction' });
    }
};

// @desc    Train model based on historical data
// @route   POST /api/train
const trainModel = async (req, res) => {
    try {
        const tasks = await Task.find({ act: { $gt: 0 } });
        if (tasks.length === 0) {
            return res.status(400).json({ success: false, message: 'No historical data found for training' });
        }

        const stats = { Low: [], Medium: [], High: [] };
        tasks.forEach(t => {
            if (stats[t.complexity]) {
                stats[t.complexity].push(t.act / t.sp);
            }
        });

        const averages = {};
        for (const [lvl, vals] of Object.entries(stats)) {
            if (vals.length > 0) {
                averages[lvl] = vals.reduce((a, b) => a + b, 0) / vals.length;
            } else {
                averages[lvl] = COMPLEXITY_FACTORS[lvl]; // Default fallback
            }
        }

        await Setting.findOneAndUpdate(
            { key: 'ai_model_weights' },
            { value: averages, updatedAt: Date.now() },
            { upsert: true }
        );

        res.json({
            success: true,
            message: 'Model trained successfully',
            weights: averages,
            sampleSize: tasks.length
        });
    } catch (err) {
        console.error('Training error:', err);
        res.status(500).json({ success: false, message: 'Server error during training' });
    }
};

module.exports = { predictEffort, trainModel };
