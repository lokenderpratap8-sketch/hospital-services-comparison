<<<<<<< HEAD
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
=======
# Hospital Services Comparison System (TOPSIS)
A high-performance decision support platform that ranks healthcare providers using multi-criteria analysis. This project features a modern Glassmorphism UI and a custom TOPSIS algorithm implementation to provide objective, data-driven hospital recommendations.

### ✨ Key Features

Weighted Decision Engine: Adjust real-time sliders to prioritize Cost, Success Rate, Safety, and Wait Time.

TOPSIS Ranking Logic: Implements the Technique for Order of Preference by Similarity to Ideal Solution to mathematically determine the "Top Choice".

Glassmorphism Dashboard: A sleek, frosted-glass aesthetic built with Tailwind CSS, featuring backdrop blurs and neon cyan highlights.

Interactive Radar Charts: Visual performance breakdown for each hospital using Recharts.

Dynamic Re-sorting: The ranking table automatically updates and re-ranks hospitals as slider weights change.

### 🛠️ Tech Stack

Frontend: React.js, Tailwind CSS, Framer Motion, Recharts.

Backend: Node.js, Express.js.

Database: MongoDB (Mongoose for data modeling).

Deployment: Vercel (Frontend), Render/Railway (Backend).

📊 The Algorithm: Why TOPSIS?

TOPSIS is a multi-criteria decision-making method that selects an alternative that is geometrically closest to the Positive Ideal Solution (PIS) and farthest from the Negative Ideal Solution (NIS).

Normalization: Scores are scaled to a 0–1 range.

Weighting: User-defined priorities are applied to each metric.

Distance Calculation: Measures how far each hospital is from the "Perfect" and "Worst" theoretical benchmarks.

Final Ranking: Produces a relative closeness score for unbiased selection.

# Getting Started

## Prerequisites:

Node.js (v18+)

MongoDB Atlas account

### Installation:

#### 1. Clone the Repo:

Bash

git clone https://github.com/your-username/hospital-comparison-topsis.git
cd hospital-comparison-topsis

#### 2. Setup Backend:

##### Bash:

cd server

npm install #Create a .env file and add MONGO_URI

npm start
#### 3. Setup Frontend:

##### Bash:

cd client

npm install

npm start

# Project Structure

hospital-comparison-topsis/

├── client/           # React frontend (Glassmorphism UI)

│└── src/utils/       # TOPSIS algorithm implementation

├── server/           # Node.js & Express backend

│└── models/          # Hospital data schemas

└── README.md         # Project documentation
# Author
## [Lokender Pratap]

### BTech information technology Student.

### linkedin: 
[https://www.linkedin.com/in/lokender-pratap-5374a8364/] 
>>>>>>> 0e9f55ef8508f8ea272851f142179563efad22bd
