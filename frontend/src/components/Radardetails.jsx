import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default function RadarDetails({ hospital, onClose }) {
  const chartData = [
    { subject: 'Cost', A: 100 - (hospital.cost / 2000) }, // Inverted for chart
    { subject: 'Success', A: hospital.successRate },
    { subject: 'Safety', A: hospital.safetyScore * 10 },
    { subject: 'Speed', A: 100 - hospital.waitTime },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-slate-900 border border-white/20 p-8 rounded-3xl w-full max-w-md shadow-2xl"
      >
        <h3 className="text-2xl font-bold mb-2">{hospital.name}</h3>
        <p className="text-slate-400 mb-6">{hospital.location}, Delhi</p>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <Radar
                name={hospital.name}
                dataKey="A"
                stroke="#22d3ee"
                fill="#22d3ee"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        <button 
          onClick={onClose}
          className="w-full mt-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all font-bold"
        >
          Close Analysis
        </button>
      </motion.div>
    </div>
  );
}