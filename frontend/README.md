# Jarly Frontend

React-based frontend for Jarly Water Management System

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Features

- Dashboard with system status
- Real-time notifications via Socket.io
- Water usage tracking
- Billing management
- User authentication
- Responsive design

## Project Structure

```
src/
├── components/       # Reusable React components
├── pages/            # Page components
├── services/         # API and Socket.io services
├── App.js            # Main App component
└── index.js          # React entry point
```

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests

## Environment Variables

Create a `.env` file:
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000
```

## Technologies

- React 18
- React Router
- Axios for HTTP requests
- Socket.io Client for real-time updates
