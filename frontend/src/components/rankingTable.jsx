import React from 'react';
import { motion } from 'framer-motion';

const RankingTable = ({ rankings }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hospital Rankings</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-4 font-semibold text-gray-700">Rank</th>
              <th className="text-left py-2 px-4 font-semibold text-gray-700">Hospital</th>
              <th className="text-left py-2 px-4 font-semibold text-gray-700">Score</th>
              <th className="text-left py-2 px-4 font-semibold text-gray-700">Location</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((ranking, index) => (
              <motion.tr
                key={ranking.hospital.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                    index === 0 ? 'bg-green-100 text-green-800' :
                    index === 1 ? 'bg-blue-100 text-blue-800' :
                    index === 2 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {index + 1}
                  </span>
                </td>
                <td className="py-3 px-4 font-medium text-gray-800">
                  {ranking.hospital.name}
                </td>
                <td className="py-3 px-4">
                  <span className="font-mono text-sm">
                    {ranking.score.toFixed(4)}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {ranking.hospital.location}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default RankingTable;