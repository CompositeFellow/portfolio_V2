import type { Category, CategoryId } from '@/data/learningArtifacts'

interface CategoryFilterBarProps {
  categories: Category[]
  active: CategoryId | 'all'
  onChange: (id: CategoryId | 'all') => void
}

export function CategoryFilterBar({ categories, active, onChange }: CategoryFilterBarProps) {
  const options: { id: CategoryId | 'all'; label: string }[] = [
    { id: 'all', label: 'All' },
    ...categories.map((c) => ({ id: c.id, label: c.label })),
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isActive = opt.id === active
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={`font-mono text-[11px] tracking-widest uppercase px-3.5 py-1.5 border transition-colors ${
              isActive
                ? 'border-[#38BDF8]/60 text-[#38BDF8] bg-[#38BDF8]/10'
                : 'border-[#38BDF8]/10 text-slate-500 hover:text-[#38BDF8] hover:border-[#38BDF8]/28'
            }`}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
