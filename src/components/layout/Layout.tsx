import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { SubNav } from './SubNav'
import { LeftGutter } from './LeftGutter'
import { MainContent } from './MainContent'
import { RightGutter } from './RightGutter'
import { SubNavProvider, useSubNavItems } from './SubNavContext'

function LayoutShell() {
  const subNavItems = useSubNavItems()

  return (
    <div className="bg-[#111418] text-[#E2E8F0] min-h-screen font-sans">
      <Navbar />
      {/* pt-14 clears the fixed Navbar so the sub-nav (when present) sits
          directly beneath it instead of being pushed down by page content. */}
      <div className="pt-14">
        {subNavItems && subNavItems.length > 0 && <SubNav items={subNavItems} />}
        <div className="grid grid-cols-[minmax(1.5rem,1fr)_minmax(0,72rem)_minmax(1.5rem,1fr)]">
          <LeftGutter />
          <MainContent>
            <Outlet />
          </MainContent>
          <RightGutter />
        </div>
      </div>
    </div>
  )
}

export function Layout() {
  return (
    <SubNavProvider>
      <LayoutShell />
    </SubNavProvider>
  )
}
