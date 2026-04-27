import React, { useEffect, useState } from 'react';
import { apiService } from './services/api';
import { socketService } from './services/socket';
import './App.css';

function App() {
  const [apiStatus, setApiStatus] = useState('checking...');
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Check API health
    apiService.getHealth().then(data => {
      setApiStatus(data.message);
    }).catch(err => {
      setApiStatus('API connection failed');
    });

    // Initialize Socket.io connection
    socketService.connect();

    // Listen for notifications
    socketService.on('notification-broadcast', (data) => {
      setNotifications(prev => [data, ...prev]);
      console.log('Notification received:', data);
    });

    return () => {
      socketService.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>🌊 Jarly</h1>
        <p>Water Management System - Biratnagar, Eastern Nepal</p>
      </header>

      <main className="main">
        <section className="status-section">
          <h2>System Status</h2>
          <div className="status-box">
            <p><strong>API Status:</strong> {apiStatus}</p>
          </div>
        </section>

        <section className="notifications-section">
          <h2>Recent Notifications ({notifications.length})</h2>
          <div className="notifications-list">
            {notifications.length === 0 ? (
              <p className="empty">No notifications yet</p>
            ) : (
              notifications.map((notif, index) => (
                <div key={index} className="notification-item">
                  <p>{JSON.stringify(notif)}</p>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="info-section">
          <h2>Welcome to Jarly</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>💧 Water Distribution</h3>
              <p>Manage water supply and distribution across Biratnagar</p>
            </div>
            <div className="info-card">
              <h3>📊 Usage Analytics</h3>
              <p>Track and analyze water consumption patterns</p>
            </div>
            <div className="info-card">
              <h3>🔔 Real-time Updates</h3>
              <p>Get instant notifications via Socket.io</p>
            </div>
            <div className="info-card">
              <h3>💰 Billing System</h3>
              <p>Manage customer bills and payments</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Jarly Water Management System. All rights reserved.</p>
        <p>📍 Biratnagar, Eastern Nepal 🇳🇵</p>
      </footer>
    </div>
  );
}

export default App;
