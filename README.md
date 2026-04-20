# Hospital Comparison Service

A comprehensive hospital comparison platform that helps users make informed healthcare decisions using the TOPSIS (Technique for Order Preference by Similarity to Ideal Solution) algorithm.

## Features

- **Multi-criteria Decision Making**: Compare hospitals based on cost, success rate, safety score, and wait time
- **Dynamic Weighting**: Adjust decision weights to prioritize factors that matter most to you
- **Interactive Visualizations**: View detailed radar charts for hospital performance analysis
- **Real-time Rankings**: Instantly updated hospital rankings based on your preferences
- **Responsive Design**: Modern UI built with React, TailwindCSS, and Framer Motion

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast development build tool
- **TailwindCSS** - Utility-first CSS framework
- **Recharts** - Data visualization library
- **Framer Motion** - Animation library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Project Structure

```
hospital comparison service/
{
  "backend/": {
    "server.js": "Express server with API endpoints",
    "package.json": "Backend dependencies",
    ".env": "Environment variables"
  },
  "frontend/": {
    "src/": {
      "components/": "React components",
      "utils/": "Utility functions including TOPSIS algorithm"
    },
    "package.json": "Frontend dependencies",
    "vite.config.js": "Vite configuration"
  }
}
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "hospital comparison service"
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   ```bash
   # In the backend directory
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will start on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will start on `http://localhost:5173`

3. **Or use the root script** (if created)
   ```bash
   npm run dev
   ```

### Building for Production

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start production servers**
   ```bash
   # Backend
   cd backend
   npm start
   
   # Frontend (serve build files)
   cd frontend
   npm run preview
   ```

## API Endpoints

### GET `/api/hospitals`
Returns a list of all hospitals with their metrics.

**Response:**
```json
[
  {
    "id": 1,
    "name": "AIIMS Delhi",
    "location": "Ansari Nagar",
    "cost": 5000,
    "successRate": 92,
    "safetyScore": 9,
    "waitTime": 45
  }
]
```

### POST `/api/hospitals`
Adds a new hospital to the database.

**Request Body:**
```json
{
  "name": "Hospital Name",
  "location": "Location",
  "cost": 100000,
  "successRate": 95,
  "safetyScore": 8,
  "waitTime": 10
}
```

## TOPSIS Algorithm

The application uses the TOPSIS algorithm to rank hospitals based on multiple criteria:

1. **Normalization**: Standardize the decision matrix
2. **Weighting**: Apply user-defined weights to criteria
3. **Ideal Solutions**: Determine best and worst possible values
4. **Distance Calculation**: Compute distances from ideal solutions
5. **Ranking**: Calculate relative closeness to ideal solution

### Criteria Types
- **Cost Criteria** (lower is better): `cost`, `waitTime`
- **Benefit Criteria** (higher is better): `successRate`, `safetyScore`

## Configuration

### Environment Variables

**Backend (.env):**
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Customization

- **Add new hospitals**: Modify the mock data in `backend/server.js` or use the POST endpoint
- **Adjust criteria**: Update the TOPSIS algorithm in `frontend/src/utils/topsis.js`
- **Change weights**: Use the control panel in the UI

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Future Enhancements

- [ ] Real database integration (MongoDB/PostgreSQL)
- [ ] User authentication and profiles
- [ ] Hospital reviews and ratings
- [ ] Geographic location features
- [ ] Mobile app development
- [ ] Advanced filtering options
- [ ] Export functionality (PDF, Excel)
- [ ] Hospital appointment booking

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure the frontend URL is correctly set in the backend `.env` file
2. **Port Conflicts**: Change the PORT in `.env` if 5000 is already in use
3. **Module Not Found**: Run `npm install` in both frontend and backend directories
4. **Build Errors**: Clear node_modules and reinstall dependencies

### Getting Help

- Check the console for error messages
- Verify all dependencies are installed
- Ensure environment variables are set correctly
- Check that both servers are running
