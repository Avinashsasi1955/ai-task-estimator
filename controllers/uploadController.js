const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const Task = require('../models/Task');

// Multer setup — store in /tmp/uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '..', 'tmp_uploads');
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'text/csv' || file.originalname.endsWith('.csv')) {
        cb(null, true);
    } else {
        cb(new Error('Only CSV files are allowed!'), false);
    }
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 10 * 1024 * 1024 } });

// @desc    Upload and parse CSV
// @route   POST /api/upload/csv
const uploadCSV = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const results = [];
    const errors = [];

    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (row) => {
            // Data Cleaning & Normalization
            const cleanRow = {};
            Object.keys(row).forEach(key => {
                if (row[key]) cleanRow[key.trim()] = row[key].trim();
            });

            if (!cleanRow.name && !cleanRow.Name && !cleanRow.task) return; // Skip empty rows

            try {
                const task = {
                    taskId: cleanRow.taskId || cleanRow.id || cleanRow.ID || `T-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                    name: cleanRow.name || cleanRow.Name || cleanRow.task || cleanRow.Task || 'Unnamed Task',
                    sprintName: cleanRow.sprintName || cleanRow.sprint || 'Sprint 24',
                    complexity: ['Low', 'Medium', 'High'].includes(cleanRow.complexity) ? cleanRow.complexity : 'Medium',
                    sp: parseInt(cleanRow.sp || cleanRow.storyPoints || 0, 10),
                    est: parseFloat(cleanRow.est || cleanRow.estimated || 0),
                    act: parseFloat(cleanRow.act || cleanRow.actual || 0),
                    delay: (cleanRow.delay && cleanRow.delay.toLowerCase() === 'yes') ? 'Yes' : 'No',
                    team: cleanRow.team || cleanRow.Team || 'Unknown',
                    exp: ['Junior', 'Intermediate', 'Senior', 'Expert'].includes(cleanRow.exp) ? cleanRow.exp : 'Intermediate',
                    bugs: parseInt(cleanRow.bugs || 0, 10),
                    status: cleanRow.status || 'In Progress',
                    risk: ['Low', 'Medium', 'High'].includes(cleanRow.risk) ? cleanRow.risk : 'Low',
                    riskScore: parseInt(cleanRow.riskScore || 0, 10)
                };
                results.push(task);
            } catch (e) {
                errors.push({ row, error: e.message });
            }
        })
        .on('end', async () => {
            // Clean up the temp file
            fs.unlink(req.file.path, () => {});

            if (results.length === 0) {
                return res.status(400).json({ success: false, message: 'No valid rows found in CSV', errors });
            }

            try {
                // Remove existing tasks for the same sprint if sprintName matches
                const sprintName = results[0].sprintName;
                // Upsert tasks by taskId
                const ops = results.map(task => ({
                    updateOne: {
                        filter: { taskId: task.taskId },
                        update: { $set: task },
                        upsert: true
                    }
                }));
                await Task.bulkWrite(ops);

                res.json({
                    success: true,
                    message: `${results.length} tasks imported successfully`,
                    count: results.length,
                    errors: errors.length,
                    data: results
                });
            } catch (err) {
                console.error('DB insert error:', err);
                res.status(500).json({ success: false, message: 'Failed to save tasks to database' });
            }
        })
        .on('error', (err) => {
            res.status(500).json({ success: false, message: `CSV parse error: ${err.message}` });
        });
};

module.exports = { upload, uploadCSV };
