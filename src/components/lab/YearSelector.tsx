interface YearSelectorProps {
  years: number[]
  active: number
  onChange: (year: number) => void
}

export function YearSelector({ years, active, onChange }: YearSelectorProps) {
  return (
    <div className="flex flex-col gap-1 shrink-0">
      {years.map((year) => (
        <button
          key={year}
          type="button"
          onClick={() => onChange(year)}
          className={`font-mono text-xs px-2.5 py-1.5 border transition-colors ${
            active === year
              ? 'border-[#38BDF8]/60 text-[#38BDF8] bg-[#38BDF8]/10'
              : 'border-transparent text-slate-600 hover:text-[#38BDF8] hover:border-[#38BDF8]/20'
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  )
}
