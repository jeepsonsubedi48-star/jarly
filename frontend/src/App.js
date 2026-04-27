import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { apiService } from './services/api';
import { socketService } from './services/socket';
import Home from './pages/Home';
import Order from './pages/Order';
import './index.css';

function App() {
  useEffect(() => {
    // Check API health
    apiService.getHealth().then(data => {
      console.log('✓ API Status:', data.message);
    }).catch(err => {
      console.error('✗ API connection failed:', err);
    });

    // Initialize Socket.io connection
    socketService.connect();

    return () => {
      socketService.disconnect();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
