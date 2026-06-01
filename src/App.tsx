import { Shell } from './components/layout/Shell'
import { Preloader } from './components/ui/Preloader'
import { SmoothScroll } from './providers/SmoothScroll'
import { About } from './sections/About'
import { Hero } from './sections/Hero'

function App() {
  return (
    <SmoothScroll>
      <Preloader />
      <Shell>
        <main>
          <Hero />
          <About />
        </main>
      </Shell>
    </SmoothScroll>
  )
}

export default App
