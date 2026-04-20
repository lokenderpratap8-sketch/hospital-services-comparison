#!/bin/bash

echo "Starting Hospital Comparison Service Development Environment..."
echo

echo "Installing dependencies..."
npm install

echo
echo "Starting backend server..."
cd backend && npm run dev &
BACKEND_PID=$!

echo
echo "Waiting for backend to start..."
sleep 3

echo
echo "Starting frontend development server..."
cd ../frontend && npm run dev &
FRONTEND_PID=$!

echo
echo "Development servers are starting..."
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:5173"
echo
echo "Press Ctrl+C to stop all servers"

# Wait for Ctrl+C
trap "kill $BACKEND_PID $FRONTEND_PID" INT
wait
