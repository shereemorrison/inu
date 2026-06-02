import { Shell } from './components/layout/Shell'
import { Preloader } from './components/ui/Preloader'
import { AppReadyProvider } from './context/AppReady'
import { SmoothScroll } from './providers/SmoothScroll'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Nutrition } from './sections/Nutrition'
import { Statement } from './sections/Statement'

function App() {
  return (
    <SmoothScroll>
      <AppReadyProvider>
        <Preloader />
        <Shell>
          <main>
            <Hero />
            <About />
            <Nutrition />
            <Statement />
            <Experience />
          </main>
        </Shell>
      </AppReadyProvider>
    </SmoothScroll>
  )
}

export default App
