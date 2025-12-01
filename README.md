# QuickWad API

Backend API for QuickWad e-commerce store.

## Features

- RESTful API endpoints
- MongoDB database integration
- Product management
- CORS enabled

## Setup

```bash
npm install
npm start
```

## Environment Variables

- `PORT`: Server port (default: 10000)
- `MONGODB_URI`: MongoDB connection string
- `NODE_ENV`: Environment (production/development)

## API Endpoints

- `GET /` - API information
- `GET /api/health` - Health check
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

## Deploy

This API is automatically deployed to Render.
