export function MiniTrend() {
  const pts = [40, 52, 47, 68, 62, 78, 71, 84, 76, 90, 81, 88]
  const W = 130, H = 44
  const min = Math.min(...pts), max = Math.max(...pts)
  const d = pts.map((p, i) => {
    const x = (i / (pts.length - 1)) * W
    const y = H - ((p - min) / (max - min)) * H
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
  const lastX = W, lastY = H - ((pts[pts.length - 1] - min) / (max - min)) * H

  return (
    <div className="bg-[#0D1117] border border-slate-700/50 p-2.5">
      <div className="font-mono text-[8px] text-[#38BDF8]/45 mb-1.5">TEMP_PROC_01</div>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${d} V${H} H0 Z`} fill="url(#trendFill)" />
        <path d={d} fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={lastX} cy={lastY} r="2.5" fill="#38BDF8" />
      </svg>
      <div className="font-mono text-[9px] text-green-400 mt-1">88.4°C</div>
    </div>
  )
}
