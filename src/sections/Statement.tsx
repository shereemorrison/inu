const stats = [
  {
    value: '12+',
    label: 'Brand partners',
    desc: 'Nutrition, lifestyle, and digital launches',
  },
  {
    value: '48',
    label: 'Formulas shipped',
    desc: 'From pilot batches to nationwide rollouts',
  },
  {
    value: '∞',
    label: 'Tail wags',
    desc: 'The metric we actually optimize for',
  },
] as const

export function Statement() {
  return (
    <>
      <section className="story-statement gutter-x" aria-labelledby="manifesto-quote">
        <div className="story-statement__inner mx-auto">
          <p id="manifesto-quote" className="story-statement__quote">
            We don&apos;t feed nostalgia. We engineer tomorrow&apos;s bond.
          </p>
          <cite className="story-statement__cite">INU manifesto</cite>
        </div>
      </section>

      <section className="story-stats gutter-x" aria-label="Highlights">
        <div className="story-stats__grid">
          {stats.map(({ value, label, desc }) => (
            <div key={label}>
              <p className="story-stat__value">{value}</p>
              <p className="story-stat__label">{label}</p>
              <p className="story-stat__desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
