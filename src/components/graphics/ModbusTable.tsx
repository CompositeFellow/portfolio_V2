export function ModbusTable() {
  const rows = [
    { type: 'HR', addr: '40001', val: 'FF3A' },
    { type: 'HR', addr: '40002', val: '0064' },
    { type: 'HR', addr: '40003', val: 'A1B2' },
    { type: 'CO', addr: '00001', val: '0x01' },
    { type: 'DI', addr: '10001', val: '0x00' },
  ]
  return (
    <div className="bg-[#0D1117] border border-slate-700/50 p-2.5 font-mono">
      <div className="text-[8px] text-[#F59E0B]/55 mb-2">192.168.1.10:502</div>
      {rows.map((r, i) => (
        <div key={i} className="flex gap-3 text-[9px] py-0.5 border-b border-slate-800/50 last:border-0">
          <span className="text-slate-600 w-6">{r.type}</span>
          <span className="text-[#38BDF8]/60 w-12">{r.addr}</span>
          <span className="text-green-400">0x{r.val.replace('0x', '')}</span>
        </div>
      ))}
    </div>
  )
}
