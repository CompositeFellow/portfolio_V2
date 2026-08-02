import { type DayCell, formatLong } from '@/lib/heatmap'

const WEEKDAY_LABELS = [
  { day: 'Sun', label: '' },
  { day: 'Mon', label: 'Mon' },
  { day: 'Tue', label: '' },
  { day: 'Wed', label: 'Wed' },
  { day: 'Thu', label: '' },
  { day: 'Fri', label: 'Fri' },
  { day: 'Sat', label: '' },
]
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

interface HeatmapGridProps {
  weeks: DayCell[][]
  levelClasses: [string, string, string, string, string]
  onSelectDay: (date: string) => void
  selectedDate: string | null
}

export function HeatmapGrid({ weeks, levelClasses, onSelectDay, selectedDate }: HeatmapGridProps) {
  return (
    <div>
      <div className="flex gap-1.5">
        <div className="flex flex-col gap-1.5 pt-5 shrink-0 mr-1">
          {WEEKDAY_LABELS.map((w) => (
            <div key={w.day} className="h-[17px] w-6 flex items-center font-mono text-[9px] text-slate-600">
              {w.label}
            </div>
          ))}
        </div>

        <div className="overflow-x-auto">
          <div className="flex flex-col gap-1.5 w-max">
            <div className="flex gap-1.5 mb-1">
              {weeks.map((week) => {
                const monthStartCell = week.find((c) => c.date.slice(8, 10) === '01')
                const label = monthStartCell ? MONTH_NAMES[Number(monthStartCell.date.slice(5, 7)) - 1] : null
                return (
                  <div key={week[0].date} className="w-[17px] h-[17px] shrink-0 relative">
                    {label && <span className="absolute left-0 top-0 font-mono text-[9px] text-slate-600 whitespace-nowrap">{label}</span>}
                  </div>
                )
              })}
            </div>

            <div className="flex gap-1.5">
              {weeks.map((week) => (
                <div key={week[0].date} className="flex flex-col gap-1.5">
                  {week.map((cell) =>
                    cell.inRange ? (
                      <button
                        key={cell.date}
                        type="button"
                        onClick={() => onSelectDay(cell.date)}
                        title={`${cell.count} artifact${cell.count === 1 ? '' : 's'} on ${formatLong(cell.date)}`}
                        className={`w-[17px] h-[17px] rounded-[3px] transition-all ${levelClasses[cell.level]} ${
                          selectedDate === cell.date
                            ? 'ring-2 ring-[#38BDF8] ring-offset-1 ring-offset-[#111418]'
                            : 'hover:ring-1 hover:ring-[#38BDF8]/50'
                        }`}
                      />
                    ) : (
                      <div key={cell.date} className="w-[17px] h-[17px] opacity-0" />
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 mt-4 ml-7 font-mono text-[9px] text-slate-600">
        <span>Less</span>
        {levelClasses.map((cls) => (
          <span key={cls} className={`w-[17px] h-[17px] rounded-[3px] ${cls}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}
