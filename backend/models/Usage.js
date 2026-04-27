const mongoose = require('mongoose');

const usageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  meterReading: {
    type: Number,
    required: true,
  },
  consumedUnits: Number,
  recordedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'disconnected'],
    default: 'active',
  },
});

module.exports = mongoose.model('Usage', usageSchema);
