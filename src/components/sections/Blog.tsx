import { SectionLabel } from '@/components/ui/SectionLabel'
import { Chip, type ChipColor } from '@/components/ui/Chip'

export function Blog() {
  const posts = [
    { date: '2025-01-15', title: 'Why PLC Scan Time Matters', tag: 'PLCs', c: 'amber' as ChipColor },
    { date: '2024-12-28', title: 'My First Ignition Project', tag: 'SCADA', c: 'blue' as ChipColor },
    { date: '2024-12-10', title: 'Modbus RTU vs TCP: What Actually Differs', tag: 'Networking', c: 'green' as ChipColor },
    { date: '2024-11-22', title: 'How Ethernet/IP Actually Works', tag: 'Networking', c: 'green' as ChipColor },
    { date: '2024-11-05', title: 'PLC Timers: TON, TOF, and RTO Explained', tag: 'PLCs', c: 'amber' as ChipColor },
    { date: '2024-10-18', title: 'Reading a P&ID for the First Time', tag: 'Instrumentation', c: 'purple' as ChipColor },
  ]

  const groups = [
    { id: 'plcs', label: 'PLCs', tag: 'PLCs' },
    { id: 'scada', label: 'SCADA', tag: 'SCADA' },
    { id: 'networking', label: 'Networking', tag: 'Networking' },
    { id: 'instrumentation', label: 'Instrumentation', tag: 'Instrumentation' },
  ]

  return (
    <section id="blog" className="pb-28">
      <SectionLabel n="07" label="Learning Notes" />
      <h2 className="font-mono text-3xl font-bold text-white mt-5 mb-2">Writing</h2>
      <p className="text-slate-600 font-mono text-sm mb-14">Short notes on what I'm learning. No fluff.</p>

      {groups.map(group => {
        const groupPosts = posts.filter(p => p.tag === group.tag)
        if (groupPosts.length === 0) return null
        return (
          <div key={group.id} id={group.id} className="mb-14 last:mb-0 scroll-mt-24">
            <div className="font-mono text-[11px] text-slate-600 tracking-widest uppercase mb-5">{group.label}</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupPosts.map((p, i) => (
                <a key={i} href="#" className="group border border-[#38BDF8]/10 bg-[#1A1F26]/40 p-5 hover:border-[#38BDF8]/28 hover:bg-[#1A1F26]/65 transition-all block">
                  <div className="flex items-center justify-between mb-3.5">
                    <Chip label={p.tag} color={p.c} />
                    <span className="font-mono text-[9px] text-slate-700">{p.date}</span>
                  </div>
                  <h3 className="font-mono text-sm text-slate-400 group-hover:text-white transition-colors leading-snug">{p.title}</h3>
                  <div className="font-mono text-[10px] text-[#38BDF8]/35 mt-3.5 group-hover:text-[#38BDF8]/65 transition-colors">Read →</div>
                </a>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
