import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Featured } from '@/components/sections/Featured'
import { Certifications } from '@/components/sections/Certifications'
import { CareerGoals } from '@/components/sections/CareerGoals'
import { Contact } from '@/components/sections/Contact'
import { useSubNav } from '@/components/layout/SubNavContext'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'featured', label: 'Featured' },
  { id: 'certs', label: 'Certs' },
  { id: 'goals', label: 'Goals' },
  { id: 'contact', label: 'Contact' },
]

export function Home() {
  useSubNav(sections)

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Featured />
      <Certifications />
      <CareerGoals />
      <Contact />
    </>
  )
}
