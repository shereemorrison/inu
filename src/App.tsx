import { Shell } from './components/layout/Shell'
import { About } from './sections/About'
import { Hero } from './sections/Hero'

function App() {
  return (
    <Shell>
      <main>
        <Hero />
        <About />
      </main>
    </Shell>
  )
}

export default App
