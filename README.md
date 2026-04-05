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
