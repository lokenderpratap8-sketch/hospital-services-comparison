import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HospitalList from './components/HospitalList';
import WeightControls from './components/WeightControls';
import RankingTable from './components/RankingTable';
import RadarChart from './components/RadarChart';
import { calculateTOPSIS } from './utils/topsis';

function App() {
  const [hospitals, setHospitals] = useState([]);
  const [weights, setWeights] = useState({
    cost: 0.25,
    successRate: 0.25,
    safetyScore: 0.25,
    waitTime: 0.25
  });
  const [rankings, setRankings] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHospitals();
  }, []);

  useEffect(() => {
    if (hospitals.length > 0) {
      const topsisResults = calculateTOPSIS(hospitals, weights);
      setRankings(topsisResults);
    }
  }, [hospitals, weights]);

  const fetchHospitals = async () => {
    try {
      const response = await fetch('/api/hospitals');
      const data = await response.json();
      if (data.success) {
        setHospitals(data.data);
      }
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleWeightChange = (criterion, value) => {
    const newWeights = { ...weights, [criterion]: value };
    // Normalize weights to sum to 1
    const total = Object.values(newWeights).reduce((sum, w) => sum + w, 0);
    const normalizedWeights = {};
    Object.keys(newWeights).forEach(key => {
      normalizedWeights[key] = newWeights[key] / total;
    });
    setWeights(normalizedWeights);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Hospital Comparison Service
          </h1>
          <p className="text-gray-600">
            Make informed healthcare decisions with multi-criteria analysis
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <HospitalList
              hospitals={hospitals}
              selectedHospital={selectedHospital}
              onSelectHospital={setSelectedHospital}
            />
            <WeightControls weights={weights} onWeightChange={handleWeightChange} />
            <RankingTable rankings={rankings} />
          </div>

          <div className="space-y-6">
            {selectedHospital && (
              <RadarChart hospital={selectedHospital} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;