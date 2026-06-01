import { createContext, useContext, type ReactNode } from 'react'
import { usePreloader } from '../hooks/usePreloader'

type AppReadyContextValue = {
  /** Preloader is swiping away — mount hero/start intro underneath */
  reveal: boolean
}

const AppReadyContext = createContext<AppReadyContextValue>({ reveal: false })

export function AppReadyProvider({ children }: { children: ReactNode }) {
  const { phase } = usePreloader()
  const reveal = phase === 'exiting' || phase === 'complete'

  return (
    <AppReadyContext.Provider value={{ reveal }}>{children}</AppReadyContext.Provider>
  )
}

export function useAppReady() {
  return useContext(AppReadyContext)
}
