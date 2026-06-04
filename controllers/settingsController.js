const Setting = require('../models/Setting');

// @desc    Get all settings
// @route   GET /api/settings
const getSettings = async (req, res) => {
    try {
        const settings = await Setting.find();
        // Convert array to object for easier consumption on frontend
        const settingsObj = {};
        settings.forEach(s => settingsObj[s.key] = s.value);
        res.json({ success: true, data: settingsObj });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// @desc    Update a specific setting
// @route   POST /api/settings/:key
const updateSetting = async (req, res) => {
    try {
        const { key } = req.params;
        const { value } = req.body;

        let setting = await Setting.findOne({ key });
        if (setting) {
            setting.value = value;
            setting.updatedAt = Date.now();
            await setting.save();
        } else {
            setting = await Setting.create({ key, value });
        }

        res.json({ success: true, data: setting });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// @desc    Batch update settings
// @route   POST /api/settings/batch
const updateSettingsBatch = async (req, res) => {
    try {
        const { settings } = req.body; // Expecting { key1: val1, key2: val2 }

        for (const [key, value] of Object.entries(settings)) {
            await Setting.findOneAndUpdate(
                { key },
                { value, updatedAt: Date.now() },
                { upsert: true }
            );
        }

        res.json({ success: true, message: 'Settings updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = { getSettings, updateSetting, updateSettingsBatch };
