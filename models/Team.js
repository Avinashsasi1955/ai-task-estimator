const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    teamId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    lead: { type: String, required: true },
    velocity: { type: Number, default: 0 },
    accuracy: { type: Number, default: 0 },
    onTimeRate: { type: Number, default: 0 },
    avatar: { type: String, default: '👥' },
    leadAuthCode: { type: String, required: false }
}, { timestamps: true });

module.exports = mongoose.model('Team', TeamSchema);
