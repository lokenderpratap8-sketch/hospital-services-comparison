import React from 'react';
import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const RadarChartComponent = ({ hospital }) => {
  // Normalize data for radar chart
  const data = [
    {
      criterion: 'Cost',
      value: Math.max(0, 100 - (hospital.cost / 200000) * 100), // Inverse cost (lower cost = higher value)
      fullMark: 100
    },
    {
      criterion: 'Success Rate',
      value: hospital.successRate,
      fullMark: 100
    },
    {
      criterion: 'Safety Score',
      value: (hospital.safetyScore / 10) * 100,
      fullMark: 100
    },
    {
      criterion: 'Wait Time',
      value: Math.max(0, 100 - (hospital.waitTime / 60) * 100), // Inverse wait time
      fullMark: 100
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {hospital.name} Performance
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="criterion" />
            <PolarRadiusAxis angle={90} domain={[0, 100]} />
            <Radar
              name={hospital.name}
              dataKey="value"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Cost:</span>
          <span className="font-medium">₹{hospital.cost.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Success Rate:</span>
          <span className="font-medium">{hospital.successRate}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Safety Score:</span>
          <span className="font-medium">{hospital.safetyScore}/10</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Wait Time:</span>
          <span className="font-medium">{hospital.waitTime} min</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RadarChartComponent;