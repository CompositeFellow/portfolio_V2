import { SectionLabel } from '@/components/ui/SectionLabel'
import { StatusDot, type DotStatus } from '@/components/ui/StatusDot'

export function Certifications() {
  const certs = [
    { name: 'CCNA', org: 'Cisco', year: '2024', status: 'online' as DotStatus, label: 'Completed', lc: 'text-green-400' },
    { name: 'PLC Programming Fundamentals', org: 'Rockwell Automation', year: '2024', status: 'online' as DotStatus, label: 'Completed', lc: 'text-green-400' },
    { name: 'OSHA 10', org: 'General Industry', year: '2023', status: 'online' as DotStatus, label: 'Completed', lc: 'text-green-400' },
    { name: 'Ignition Core', org: 'Inductive Automation', year: '2025', status: 'progress' as DotStatus, label: 'In Progress', lc: 'text-amber-400' },
    { name: 'Ignition Gold', org: 'Inductive Automation', year: '2025 Q4', status: 'planned' as DotStatus, label: 'Planned', lc: 'text-slate-500' },
  ]

  return (
    <section id="certs" className="py-28 px-6 max-w-6xl mx-auto scroll-mt-24">
      <SectionLabel n="05" label="Certifications" />
      <h2 className="font-mono text-3xl font-bold text-white mt-5 mb-14">Credentials</h2>
      <div className="space-y-3">
        {certs.map((c, i) => (
          <div key={i} className="flex items-center justify-between border border-[#38BDF8]/10 bg-[#1A1F26]/40 px-7 py-4 hover:border-[#38BDF8]/22 transition-colors">
            <div className="flex items-center gap-5">
              <StatusDot status={c.status} />
              <div>
                <div className="font-mono text-[15px] font-semibold text-white">{c.name}</div>
                <div className="font-mono text-[11px] text-slate-600">{c.org}</div>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="hidden sm:block font-mono text-[11px] text-slate-700">{c.year}</div>
              <div className={`font-mono text-[11px] ${c.lc}`}>{c.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
