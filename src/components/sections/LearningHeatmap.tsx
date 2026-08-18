import { useMemo, useState } from 'react'
import { HeatmapGrid } from '@/components/lab/HeatmapGrid'
import { SelectedDayArtifacts } from '@/components/lab/SelectedDayArtifacts'
import { YearSelector } from '@/components/lab/YearSelector'
import { CategoryFilterBar } from '@/components/ui/CategoryFilterBar'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { LearningGoals } from '@/components/sections/LearningGoals'
import { ALL_LEVELS, ARTIFACTS, CATEGORIES, type CategoryId, LAB_YEARS } from '@/data/learningArtifacts'
import { buildWeeks, getYearDays, groupByDate } from '@/lib/heatmap'

export function LearningHeatmap() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all')
  const [selectedYear, setSelectedYear] = useState<number>(LAB_YEARS[0])
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const today = useMemo(() => new Date(), [])
  const days = useMemo(() => getYearDays(selectedYear), [selectedYear])

  const filtered = useMemo(
    () => (activeCategory === 'all' ? ARTIFACTS : ARTIFACTS.filter((a) => a.category === activeCategory)),
    [activeCategory],
  )
  const byDate = useMemo(() => groupByDate(filtered), [filtered])
  const weeks = useMemo(() => buildWeeks(days, byDate, selectedYear, today), [days, byDate, selectedYear, today])

  const categoryMap = useMemo(() => new Map(CATEGORIES.map((c) => [c.id, c])), [])
  const levelClasses = activeCategory === 'all' ? ALL_LEVELS : (categoryMap.get(activeCategory)?.levels ?? ALL_LEVELS)
  const selectedArtifacts = selectedDate ? (byDate.get(selectedDate) ?? []) : []

  const handleSelectDay = (date: string) => {
    setSelectedDate((prev) => (prev === date ? null : date))
  }

  const handleSelectYear = (year: number) => {
    setSelectedYear(year)
    setSelectedDate(null)
  }

  return (
    <section id="lab" className="pb-28">
      <SectionLabel n="01" label="Learning Lab" />
      <h2 className="font-mono text-3xl font-bold text-white mt-5 mb-2">What I'm Learning</h2>
      <p className="text-slate-600 font-mono text-sm mb-10">
        A daily log of code, notes, flashcards, and hands-on labs — filter by area, select a day for details.
      </p>

      <LearningGoals />

      <div className="mb-3">
        <CategoryFilterBar categories={CATEGORIES} active={activeCategory} onChange={setActiveCategory} />
      </div>

      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-sm text-white tracking-wide">{selectedYear}</span>
        <span className="font-mono text-[9px] text-slate-700 tracking-widest">CLICK A DAY</span>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 min-w-0">
          <HeatmapGrid weeks={weeks} levelClasses={levelClasses} onSelectDay={handleSelectDay} selectedDate={selectedDate} />
        </div>
        <YearSelector years={LAB_YEARS} active={selectedYear} onChange={handleSelectYear} />
      </div>

      <SelectedDayArtifacts date={selectedDate} artifacts={selectedArtifacts} />
    </section>
  )
}
