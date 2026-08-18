import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type SubNavItem = { id: string; label: string }

const ItemsContext = createContext<SubNavItem[] | null>(null)
const SetItemsContext = createContext<((items: SubNavItem[] | null) => void) | null>(null)

export function SubNavProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<SubNavItem[] | null>(null)
  return (
    <SetItemsContext.Provider value={setItems}>
      <ItemsContext.Provider value={items}>{children}</ItemsContext.Provider>
    </SetItemsContext.Provider>
  )
}

export function useSubNavItems() {
  return useContext(ItemsContext)
}

// Lets a page declare its sub-nav sections. Layout renders the sub-nav bar
// only while a page has registered items, so pages without sections get none.
export function useSubNav(items: SubNavItem[] | null) {
  const setItems = useContext(SetItemsContext)
  useEffect(() => {
    setItems?.(items ?? null)
    return () => setItems?.(null)
  }, [items, setItems])
}
