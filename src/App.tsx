import { Shell } from './components/layout/Shell'
import { Preloader } from './components/ui/Preloader'
import { AppReadyProvider } from './context/AppReady'
import { SmoothScroll } from './providers/SmoothScroll'
import { About } from './sections/About'
import { Hero } from './sections/Hero'

function App() {
  return (
    <SmoothScroll>
      <AppReadyProvider>
      <Preloader />
      <Shell>
        <main>
          <Hero />
          <About />
        </main>
      </Shell>
      </AppReadyProvider>
    </SmoothScroll>
  )
}

export default App
