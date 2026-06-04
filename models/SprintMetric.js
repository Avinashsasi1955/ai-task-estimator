const mongoose = require('mongoose');

const SprintMetricSchema = new mongoose.Schema({
    sprint: { type: String, required: true },
    manual: { type: Number, required: true },   // Manual estimated hours
    ai: { type: Number, required: true },        // AI predicted hours
    actual: { type: Number, required: true },    // Actual hours spent
    manualError: { type: Number, default: 0 },  // Manual estimation error %
    aiError: { type: Number, default: 0 }        // AI estimation error %
}, { timestamps: true });

module.exports = mongoose.model('SprintMetric', SprintMetricSchema);
