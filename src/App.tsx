import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from '@/components/Nav'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Home } from '@/pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#111418] text-[#E2E8F0] min-h-screen font-sans">
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
