# OctoFit Tracker - Modern Multi-Tier Application

A full-stack fitness tracking application built with React 19 (Vite), Express.js, TypeScript, and MongoDB.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite (Port: 5173)
├── backend/           # Express + TypeScript (Port: 8000)
└── README.md
```

## Technology Stack

### Frontend
- **React 19** with Vite
- Port: `5173`

### Backend
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Mongoose** - MongoDB ODM
- Port: `8000`

### Database
- **MongoDB** - NoSQL Database
- Port: `27017`

## Prerequisites

- Node.js 18+ and npm
- MongoDB running locally or Docker

## Installation & Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at: `http://localhost:5173`

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend will be available at: `http://localhost:8000`

The backend expects MongoDB to be running on `mongodb://localhost:27017/octofit`

## Build & Production

### Frontend Build
```bash
cd frontend
npm run build
npm run preview
```

### Backend Build
```bash
cd backend
npm run build
npm start
```

## Port Configuration

| Service | Port |
|---------|------|
| Frontend (Vite Dev Server) | 5173 |
| Backend (Express API) | 8000 |
| MongoDB | 27017 |

## Environment Variables

Backend `.env` (create if needed):
```
MONGODB_URI=mongodb://localhost:27017/octofit
PORT=8000
NODE_ENV=development
```

## Development Notes

- Frontend uses Vite for fast HMR (Hot Module Replacement)
- Backend uses `ts-node` for development with auto-reload
- Both applications support TypeScript for type safety
- MongoDB connection configured for local development
