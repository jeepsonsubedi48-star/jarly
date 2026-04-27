# Jarly Backend API

Water Management System Backend built with Node.js, Express, MongoDB, and Socket.io

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example` and update with your configuration:
```bash
cp .env.example .env
```

3. Start the server:
```bash
# Development with auto-reload
npm run dev

# Production
npm start
```

## API Endpoints

### Health Check
- `GET /api/health` - Check API status

### Authentication (Coming Soon)
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`

### Water Usage (Coming Soon)
- `GET /api/usage`
- `POST /api/usage`
- `GET /api/usage/analytics`

### Billing (Coming Soon)
- `GET /api/bills`
- `POST /api/bills/payment`

### Notifications (Coming Soon)
- `GET /api/notifications`

## Real-time Updates with Socket.io

The server uses Socket.io for real-time communication:
- Water usage updates
- Billing notifications
- System alerts
- Maintenance notices

## Project Structure

```
backend/
├── models/           # Mongoose schemas
├── routes/           # API route definitions
├── controllers/      # Business logic
├── middleware/       # Custom middleware
├── config/           # Configuration files
├── server.js         # Main server entry point
├── package.json
└── .env.example
```

## Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV` - Environment (development/production)
- `CLIENT_URL` - Frontend URL for CORS
