const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: String,
  location: String, // Delhi Neighborhoods
  cost: Number,      // In Rupees (Lower is better)
  successRate: Number, // Percentage (Higher is better)
  safetyScore: Number, // 1-10 (Higher is better)
  waitTime: Number,    // Days (Lower is better)
});

module.exports = mongoose.model('Hospital', hospitalSchema);