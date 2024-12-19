
# Ride Booking application

## Overview

The Uber Clone is a web and mobile application designed to emulate the core features of a ride-hailing platform like Uber. It allows users to book rides, drivers to accept requests, and administrators to manage the system.

## Features

### User Features:

Register and log in with email or social accounts.

Real-time ride booking and tracking.

### Driver Features:


Driver registration and approval process.

Accept or decline ride requests.

Real-time navigation using map integration.

### Admin Features:

Manage users and drivers.

View analytics and ride data.

Monitor system performance.

## Technologies Used

## Frontend

React.js for the web interface.

Tailwind CSS for styling.

## Backend

Node.js with Express.js.

MongoDB for database management.

Socket.IO for real-time communication.

JWT for authentication.

### Other Integration

Google Maps API for navigation and geolocation.

## Installation

## Prerequisites

Node.js and npm installed.

MongoDB running locally.

API keys for Google Maps.

## Clone the Repository

git clone https://github.com/saquib123khan/Full-Stack-Ride-Booking-Application

```bash
   cd UBER-APP
```

## Backend Setup

1. Navigate to the backend directory:

```bash
   cd backend
```
2. Install dependencies:

```bash
   npm intall
```


## Environment Variables

3. To run this project, you will need to add the following 


environment variables to your .env file

PORT=4000

MONGODB_URI=*****

JWT_SECRET=your_jwt_secret

GOOGLE_MAPS_API=AIzaSyABEygq14Ltw3bywFTGiwLCR_vjx4hNgl4

## backend Setup

4. Start the backend server:

```bash
   cd backend
```

```bash
  npm run dev
```
## Frontend Setup

1. Navigate to the frontend directory:

```bash
   cd frontend
```

2. Install dependencies:

```bash
   npm install
```

3. Configure environment variables by creating a .env file:

VITE_BACKEND_URL=http://localhost:5000

4. Start the frontend server:

```bash
   npm run dev
```

## Usage
Navigate to the frontend URL in your browser (usually http://localhost:5173).

Register as a user or driver and log in.

Explore features like booking rides, accepting rides, and more.

##  Folder Structure

UBER-APP/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   ├── README.md
│   └── .env.example
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── db/
│   ├── socket.js
│   ├── server.js
│   ├── README.md
│   └── .env.example
├── .gitignore
└── README.md