import React from 'react';
import { motion } from 'framer-motion';

const WeightControls = ({ weights, onWeightChange }) => {
  const criteria = [
    { key: 'cost', label: 'Cost', description: 'Lower cost is better' },
    { key: 'successRate', label: 'Success Rate', description: 'Higher success rate is better' },
    { key: 'safetyScore', label: 'Safety Score', description: 'Higher safety score is better' },
    { key: 'waitTime', label: 'Wait Time', description: 'Lower wait time is better' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Decision Weights</h2>
      <p className="text-gray-600 mb-4">
        Adjust the importance of each criterion in your decision making
      </p>
      <div className="space-y-4">
        {criteria.map((criterion) => (
          <div key={criterion.key} className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="font-medium text-gray-700">
                {criterion.label}
              </label>
              <span className="text-sm text-gray-500">
                {(weights[criterion.key] * 100).toFixed(0)}%
              </span>
            </div>
            <p className="text-xs text-gray-500">{criterion.description}</p>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={weights[criterion.key]}
              onChange={(e) => onWeightChange(criterion.key, parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Total weight: {(Object.values(weights).reduce((sum, w) => sum + w, 0) * 100).toFixed(0)}%
        </p>
      </div>
    </motion.div>
  );
};

export default WeightControls;