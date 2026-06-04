const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    role: { type: String, enum: ['Developer', 'Lead', 'QA', 'Manager'], required: true },
    team: { type: String, required: true }, // e.g., 'Alpha', 'Beta'
    experienceYears: { type: Number, required: true },
    skills: [{ type: String }],
    projectsCompleted: { type: Number, default: 0 },
    successfulProjects: { type: Number, default: 0 },
    failedDelayedProjects: { type: Number, default: 0 },
    successRate: { type: Number, default: 100 },
    avgCompletionTime: { type: Number }, // hours
    bugRate: { type: Number, default: 0 },
    performanceRating: { type: Number, default: 5 }, // 1 to 5
    sprintContributions: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);
