import React, { useState, useEffect } from 'react';
import ControlPanel from './components/ControlPanel';
import RankingTable from './components/RankingTable';
import RadarDetails from './components/RadarDetails';
import { calculateTopsis } from './utils/topsis';

const MOCK_DATA = [
  { id: 1, name: "AIIMS Delhi", location: "Ansari Nagar", cost: 5000, successRate: 92, safetyScore: 9, waitTime: 45 },
  { id: 2, name: "Max Super Specialty", location: "Saket", cost: 150000, successRate: 95, safetyScore: 8, waitTime: 5 },
  { id: 3, name: "Fortis Escorts", location: "Okhla", cost: 120000, successRate: 88, safetyScore: 9, waitTime: 10 },
  { id: 4, name: "Apollo Hospital", location: "Sarita Vihar", cost: 180000, successRate: 96, safetyScore: 9, waitTime: 7 },
];

export default function App() {
  const [weights, setWeights] = useState({ cost: 0.25, successRate: 0.25, safety: 0.25, waitTime: 0.25 });
  const [rankedData, setRankedData] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    setRankedData(calculateTopsis(MOCK_DATA, weights));
  }, [weights]);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden p-8 text-white font-sans">
      {/* Mesh Gradient Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />

      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
        Delhi Healthcare Decision Engine
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ControlPanel weights={weights} setWeights={setWeights} />
        <div className="lg:col-span-2">
          <RankingTable data={rankedData} onSelect={setSelectedHospital} />
        </div>
      </div>

      {selectedHospital && (
        <RadarDetails hospital={selectedHospital} onClose={() => setSelectedHospital(null)} />
      )}
    </div>
  );
}