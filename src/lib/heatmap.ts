import type { LearningArtifact } from '@/data/learningArtifacts'

export interface DayCell {
  date: string // 'YYYY-MM-DD'
  inRange: boolean // false for padding days outside the selected year or beyond today
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

export function dateKey(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/** Sunday on/before Jan 1 through Saturday on/after Dec 31 of `year`, so the grid always renders full week-columns. */
export function getYearDays(year: number): Date[] {
  const jan1 = new Date(year, 0, 1)
  const dec31 = new Date(year, 11, 31)

  const start = new Date(jan1)
  start.setDate(start.getDate() - start.getDay())

  const end = new Date(dec31)
  end.setDate(end.getDate() + (6 - end.getDay()))

  const days: Date[] = []
  const cursor = new Date(start)
  while (cursor <= end) {
    days.push(new Date(cursor))
    cursor.setDate(cursor.getDate() + 1)
  }
  return days
}

export function groupByDate(artifacts: LearningArtifact[]): Map<string, LearningArtifact[]> {
  const map = new Map<string, LearningArtifact[]>()
  for (const a of artifacts) {
    const list = map.get(a.date)
    if (list) list.push(a)
    else map.set(a.date, [a])
  }
  return map
}

/** Bucketing tuned for a personal-scale dataset, not open-source-scale commit counts. */
export function intensityLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count <= 0) return 0
  if (count === 1) return 1
  if (count === 2) return 2
  if (count <= 4) return 3
  return 4
}

export function buildWeeks(days: Date[], byDate: Map<string, LearningArtifact[]>, year: number, today: Date): DayCell[][] {
  const todayKey = dateKey(startOfDay(today))
  const cells: DayCell[] = days.map((d) => {
    const key = dateKey(d)
    const inRange = d.getFullYear() === year && key <= todayKey
    const count = inRange ? (byDate.get(key)?.length ?? 0) : 0
    return { date: key, inRange, count, level: intensityLevel(count) }
  })

  const weeks: DayCell[][] = []
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7))
  }
  return weeks
}

export function formatLong(key: string): string {
  const [y, m, d] = key.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
