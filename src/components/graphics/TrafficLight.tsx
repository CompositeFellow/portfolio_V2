export function TrafficLight({ phase }: { phase: number }) {
  const lights = [
    { color: 'bg-red-500', shadow: '0 0 10px #EF4444', active: phase === 0 },
    { color: 'bg-amber-400', shadow: '0 0 10px #F59E0B', active: phase === 1 },
    { color: 'bg-green-400', shadow: '0 0 10px #22C55E', active: phase === 2 },
  ]
  return (
    <div className="flex flex-col items-center gap-1.5 bg-[#0D1117] border border-slate-700/50 p-2.5 rounded-sm">
      {lights.map((l, i) => (
        <div key={i} className={`w-5 h-5 rounded-full transition-all duration-700 ${l.active ? l.color : 'bg-slate-800'}`}
          style={{ boxShadow: l.active ? l.shadow : 'none' }} />
      ))}
    </div>
  )
}
