import { SectionLabel } from '@/components/ui/SectionLabel'

export function CareerGoals() {
  const roles = ['Controls Engineering', 'Automation Engineering', 'Field Commissioning', 'Industrial Software']
  const industries = [
    { name: 'Mining', note: 'Underground & surface' },
    { name: 'Oil & Gas', note: 'Upstream & midstream' },
    { name: 'Manufacturing', note: 'Discrete & process' },
    { name: 'Water Treatment', note: 'Municipal & industrial' },
    { name: 'Power Generation', note: 'Renewable & conventional' },
  ]

  return (
    <section id="goals" className="py-28 px-6 bg-[#0F1318] scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionLabel n="08" label="Career Goals" />
        <h2 className="font-mono text-3xl font-bold text-white mt-5 mb-14">Looking For</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-[#38BDF8]/15 bg-[#1A1F26]/50 p-7">
            <div className="font-mono text-[10px] text-[#38BDF8]/40 tracking-widest mb-7">// TARGET ROLES</div>
            <div className="space-y-4 mb-9">
              {roles.map((r, i) => (
                <div key={i} className="flex items-center gap-4 font-mono text-base text-slate-300 hover:text-white transition-colors group cursor-default">
                  <span className="text-[#38BDF8] group-hover:translate-x-1.5 transition-transform">→</span>
                  {r}
                </div>
              ))}
            </div>
            <div className="border-t border-[#38BDF8]/10 pt-7">
              <div className="font-mono text-[10px] text-[#38BDF8]/40 tracking-widest mb-5">// PREFERENCES</div>
              <div className="space-y-3">
                {[
                  ['✈', 'Travel-heavy roles welcome'],
                  ['🔧', 'Site commissioning & startup'],
                  ['🌐', 'Global placements considered'],
                  ['⚡', 'Brownfield & greenfield both'],
                ].map(([icon, text], i) => (
                  <div key={i} className="flex items-center gap-3 font-mono text-sm text-slate-400">
                    <span>{icon}</span>{text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-[#F59E0B]/15 bg-[#1A1F26]/50 p-7">
            <div className="font-mono text-[10px] text-[#F59E0B]/40 tracking-widest mb-7">// TARGET INDUSTRIES</div>
            <div className="space-y-5">
              {industries.map((ind, i) => (
                <div key={i} className="flex items-center gap-5 group cursor-default">
                  <div className="w-1.5 h-8 bg-[#F59E0B]/20 group-hover:bg-[#F59E0B]/50 transition-colors shrink-0" />
                  <div>
                    <div className="font-mono text-base text-white">{ind.name}</div>
                    <div className="font-mono text-[11px] text-slate-600">{ind.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
