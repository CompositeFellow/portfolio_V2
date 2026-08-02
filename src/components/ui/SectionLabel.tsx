export function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="font-mono text-[10px] text-[#38BDF8]/40 tracking-widest">// {n} //</span>
      <span className="font-mono text-[10px] tracking-[0.25em] text-[#38BDF8] uppercase">{label}</span>
      <div className="flex-1 h-px bg-[#38BDF8]/10" />
    </div>
  )
}
