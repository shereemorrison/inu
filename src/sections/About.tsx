import { StorySection } from '../components/sections/StorySection'

export function About() {
  return (
    <StorySection id="about" label="About" title="Moments" titleLine2="out of time">
      <p>
        INU was born from a relentless pursuit of surpassing limits — giving canine brands unique
        ways to make their stories stand out like never before.
      </p>
      <p>
        We craft premium nutrition and joyful experiences for dogs — and the humans who spoil
        them rotten.
      </p>
      <a href="#nutrition" className="story-link">
        Explore the vision
        <span aria-hidden>→</span>
      </a>
    </StorySection>
  )
}
