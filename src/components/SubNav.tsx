import { useEffect, useRef, useState } from 'react'

export function SubNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '')
  const visible = useRef(new Set<string>())

  useEffect(() => {
    visible.current = new Set()
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) visible.current.add(entry.target.id)
          else visible.current.delete(entry.target.id)
        })
        // When multiple sections are in view at once (e.g. a side-by-side
        // grid), prefer whichever comes first in nav order for stability.
        const current = items.find(item => visible.current.has(item.id))
        if (current) setActive(current.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    items.forEach(item => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [items])

  return (
    <div className="sticky top-14 z-40 bg-[#0F1318]/95 border-b border-[#38BDF8]/10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-10 flex items-center gap-6 overflow-x-auto">
        {items.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`font-mono text-[10px] tracking-widest uppercase whitespace-nowrap transition-colors ${
              active === item.id ? 'text-[#38BDF8]' : 'text-slate-600 hover:text-slate-400'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}
