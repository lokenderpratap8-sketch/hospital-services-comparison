const Slider = ({ label, value, onChange }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-cyan-100">{label}</span>
      <span className="text-xs text-cyan-400">{(value * 100).toFixed(0)}%</span>
    </div>
    <input 
      type="range" min="0" max="1" step="0.01" value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
    />
  </div>
);

export default function ControlPanel({ weights, setWeights }) {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-3xl shadow-2xl h-fit">
      <h2 className="text-xl font-semibold mb-6 border-b border-white/10 pb-2">Priority Weights</h2>
      <Slider label="Cost (Affordability)" value={weights.cost} onChange={(v) => setWeights({...weights, cost: v})} />
      <Slider label="Success Rate" value={weights.successRate} onChange={(v) => setWeights({...weights, successRate: v})} />
      <Slider label="Safety Score" value={weights.safety} onChange={(v) => setWeights({...weights, safety: v})} />
      <Slider label="Wait Time" value={weights.waitTime} onChange={(v) => setWeights({...weights, waitTime: v})} />
      <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-4">Algorithm: TOPSIS Multi-Criteria Ranking</p>
    </div>
  );
}