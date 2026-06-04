const Team = require('../models/Team');
const bcrypt = require('bcryptjs');

exports.verifyLeadAndChange = async (req, res) => {
    try {
        const { teamId, newLead, authCode } = req.body;
        
        if (!teamId || !newLead || !authCode) {
            return res.status(400).json({ success: false, message: 'Please provide teamId, newLead, and authCode' });
        }

        const team = await Team.findOne({ teamId: teamId });
        if (!team) {
            return res.status(404).json({ success: false, message: 'Team not found' });
        }

        // Check if leadAuthCode exists
        if (!team.leadAuthCode) {
            // For mock data or teams without auth code set yet
            return res.status(400).json({ success: false, message: 'Team Lead authentication not configured for this team' });
        }

        const isMatch = await bcrypt.compare(authCode, team.leadAuthCode);
        
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid Team Lead Authorization Code' });
        }

        // Update lead
        team.lead = newLead;
        await team.save();

        res.status(200).json({ success: true, message: 'Leadership transferred successfully', data: team });

    } catch (err) {
        console.error('Error changing team lead:', err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
