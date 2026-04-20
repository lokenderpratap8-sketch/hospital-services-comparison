const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Mock data for hospitals
const MOCK_HOSPITALS = [
  { id: 1, name: "AIIMS Delhi", location: "Ansari Nagar", cost: 5000, successRate: 92, safetyScore: 9, waitTime: 45 },
  { id: 2, name: "Max Super Specialty", location: "Saket", cost: 150000, successRate: 95, safetyScore: 8, waitTime: 5 },
  { id: 3, name: "Fortis Escorts", location: "Okhla", cost: 120000, successRate: 88, safetyScore: 9, waitTime: 10 },
  { id: 4, name: "Apollo Hospital", location: "Sarita Vihar", cost: 180000, successRate: 96, safetyScore: 9, waitTime: 7 },
];

// Validation helper function
const validateHospital = (data) => {
  const errors = [];
  
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Hospital name is required and must be a non-empty string');
  }
  
  if (!data.location || typeof data.location !== 'string' || data.location.trim().length === 0) {
    errors.push('Location is required and must be a non-empty string');
  }
  
  if (typeof data.cost !== 'number' || data.cost < 0) {
    errors.push('Cost must be a positive number');
  }
  
  if (typeof data.successRate !== 'number' || data.successRate < 0 || data.successRate > 100) {
    errors.push('Success rate must be a number between 0 and 100');
  }
  
  if (typeof data.safetyScore !== 'number' || data.safetyScore < 0 || data.safetyScore > 10) {
    errors.push('Safety score must be a number between 0 and 10');
  }
  
  if (typeof data.waitTime !== 'number' || data.waitTime < 0) {
    errors.push('Wait time must be a positive number');
  }
  
  return errors;
};

// API Routes
app.get('/api/hospitals', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: MOCK_HOSPITALS,
      count: MOCK_HOSPITALS.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch hospitals',
      message: error.message
    });
  }
});

app.post('/api/hospitals', (req, res) => {
  try {
    const validationErrors = validateHospital(req.body);
    
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validationErrors
      });
    }
    
    const newHospital = { 
      id: MOCK_HOSPITALS.length + 1, 
      ...req.body 
    };
    
    MOCK_HOSPITALS.push(newHospital);
    
    res.status(201).json({
      success: true,
      data: newHospital,
      message: 'Hospital added successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to add hospital',
      message: error.message
    });
  }
});

app.get('/', (req, res) => {
  res.json({
    message: "Hospital Comparison API is running...",
    version: "1.0.0",
    endpoints: {
      hospitals: "/api/hospitals",
      addHospital: "POST /api/hospitals"
    }
  });
});

// Error handling middleware (must be after all routes)
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler (must be after all routes)
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.originalUrl} not found`
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});