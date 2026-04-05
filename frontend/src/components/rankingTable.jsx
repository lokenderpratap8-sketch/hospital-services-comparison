import { motion, AnimatePresence } from 'framer-motion';

export default function RankingTable({ data, onSelect }) {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
      <table className="w-full text-left border-collapse">
        <thead className="bg-white/5 text-cyan-400 text-sm uppercase">
          <tr>
            <th className="p-4">Rank</th>
            <th className="p-4">Hospital</th>
            <th className="p-4">Location</th>
            <th className="p-4">Score</th>
            <th className="p-4 text-right">Avg. Cost</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {data.map((h, index) => (
              <motion.tr
                layout
                key={h.id}
                onClick={() => onSelect(h)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`cursor-pointer transition-colors hover:bg-white/5 border-b border-white/5 ${
                  index === 0 ? "relative ring-2 ring-cyan-500 ring-inset shadow-[0_0_20px_rgba(6,182,212,0.3)] animate-pulse-subtle" : ""
                }`}
              >
                <td className="p-4 font-bold">
                  {index === 0 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-[10px] px-2 py-0.5 rounded-full font-black uppercase">Top Choice</span>}
                  #{index + 1}
                </td>
                <td className="p-4 font-semibold">{h.name}</td>
                <td className="p-4 text-slate-400">{h.location}</td>
                <td className="p-4 text-cyan-400">{h.topsisScore}</td>
                <td className="p-4 text-right">₹{h.cost.toLocaleString('en-IN')}</td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
}