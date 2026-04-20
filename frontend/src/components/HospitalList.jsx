import React from 'react';
import { motion } from 'framer-motion';

const HospitalList = ({ hospitals, selectedHospital, onSelectHospital }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available Hospitals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hospitals.map((hospital) => (
          <motion.div
            key={hospital.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedHospital?.id === hospital.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => onSelectHospital(hospital)}
          >
            <h3 className="font-semibold text-gray-800">{hospital.name}</h3>
            <p className="text-sm text-gray-600">{hospital.location}</p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <div>Cost: ₹{hospital.cost.toLocaleString()}</div>
              <div>Success: {hospital.successRate}%</div>
              <div>Safety: {hospital.safetyScore}/10</div>
              <div>Wait: {hospital.waitTime} min</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HospitalList;