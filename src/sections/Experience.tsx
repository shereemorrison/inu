import { StorySection } from '../components/sections/StorySection'

export function Experience() {
  return (
    <StorySection
      id="experience"
      label="Experience"
      title="Beyond"
      titleLine2="the bowl"
      titleAccent="primary"
    >
      <p>
        INU builds immersive worlds for canine brands — WebGL, motion, and narrative scroll that
        turn product pages into destinations.
      </p>
      <p>
        The same obsession we bring to nutrition shows up in digital: precise, playful, and
        unmistakably forward.
      </p>
      <a href="#contact" className="story-link">
        Start a project
        <span aria-hidden>→</span>
      </a>
    </StorySection>
  )
}
