require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// --- Connect Database ---
connectDB();

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- API Routes ---
app.use('/api', require('./routes/api'));

// --- Serve Frontend Static Files ---
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all: send index.html for any non-API route (SPA style)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
