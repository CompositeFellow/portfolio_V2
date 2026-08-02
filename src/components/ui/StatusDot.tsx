export type DotStatus = 'online' | 'progress' | 'planned'

export function StatusDot({ status }: { status: DotStatus }) {
  const c = { online: 'bg-green-400', progress: 'bg-amber-400 animate-pulse', planned: 'bg-slate-600' }
  return <span className={`inline-block w-2 h-2 rounded-full shrink-0 ${c[status]}`} />
}
