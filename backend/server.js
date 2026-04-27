const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jarly', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✓ MongoDB connected successfully');
})
.catch(err => {
  console.error('✗ MongoDB connection error:', err);
  process.exit(1);
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log('✓ New client connected:', socket.id);

  // Listen for real-time updates
  socket.on('usage-update', (data) => {
    console.log('Usage update received:', data);
    io.emit('usage-broadcast', data);
  });

  socket.on('notification', (data) => {
    console.log('Notification:', data);
    io.emit('notification-broadcast', data);
  });

  socket.on('disconnect', () => {
    console.log('✗ Client disconnected:', socket.id);
  });
});

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Jarly Water Management System API is running',
    timestamp: new Date().toISOString()
  });
});

// Placeholder routes (will be implemented)
app.use('/api/auth', (req, res) => {
  res.json({ message: 'Auth endpoints coming soon' });
});

app.use('/api/usage', (req, res) => {
  res.json({ message: 'Water usage endpoints coming soon' });
});

app.use('/api/bills', (req, res) => {
  res.json({ message: 'Billing endpoints coming soon' });
});

app.use('/api/notifications', (req, res) => {
  res.json({ message: 'Notification endpoints coming soon' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      status: err.status || 500
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🌊 Jarly Backend Server running on port ${PORT}`);
  console.log(`📍 Location: Biratnagar, Eastern Nepal`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = { app, io, server };
