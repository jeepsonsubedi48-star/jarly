const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  billingPeriod: {
    startDate: Date,
    endDate: Date,
  },
  unitsConsumed: Number,
  unitPrice: Number,
  totalAmount: Number,
  discount: {
    type: Number,
    default: 0,
  },
  finalAmount: Number,
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'overdue'],
    default: 'pending',
  },
  paymentDate: Date,
  dueDate: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Bill', billSchema);
