const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    taskId: { type: String, required: true },
    name: { type: String, required: true },
    sprintName: { type: String, default: 'Sprint 24' },
    complexity: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
    sp: { type: Number, required: true },       // Story Points
    est: { type: Number },                       // Estimated Hours
    act: { type: Number },                       // Actual Hours
    delay: { type: String, enum: ['Yes', 'No'], default: 'No' },
    team: { type: String },
    exp: { type: String, enum: ['Junior', 'Intermediate', 'Senior', 'Expert'] },
    bugs: { type: Number, default: 0 },
    status: { type: String, default: 'In Progress' },
    risk: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
    riskScore: { type: Number, default: 0 },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
