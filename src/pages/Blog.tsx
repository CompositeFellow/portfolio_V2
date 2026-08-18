import { Blog as BlogSection } from '@/components/sections/Blog'
import { useSubNav } from '@/components/layout/SubNavContext'

const sections = [
  { id: 'plcs', label: 'PLCs' },
  { id: 'scada', label: 'SCADA' },
  { id: 'networking', label: 'Networking' },
  { id: 'instrumentation', label: 'Instrumentation' },
]

export function Blog() {
  useSubNav(sections)

  return <BlogSection />
}
