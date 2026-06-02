import { StorySection } from '../components/sections/StorySection'

export function Nutrition() {
  return (
    <StorySection
      id="nutrition"
      label="Nutrition"
      title="Fuel without"
      titleLine2="compromise"
      reverse
    >
      <p>
        Every formula starts with clinical-grade proteins and traceable sourcing — designed for
        brands that refuse to trade transparency for shelf appeal.
      </p>
      <p>
        From kibble architecture to supplement stacks, we help partners ship products that feel as
        premium as the stories they tell.
      </p>
      <a href="#experience" className="story-link">
        See the experience layer
        <span aria-hidden>→</span>
      </a>
    </StorySection>
  )
}
