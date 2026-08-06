import { about } from '../data/content'
import { useInView } from '../hooks/useInView'

export function About() {
  const { ref, inView } = useInView()

  return (
    <section
      className={`section about ${inView ? 'is-visible' : ''}`}
      id="about"
      ref={ref}
      aria-labelledby="about-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">About</p>
        <h2 id="about-title" className="section__title">
          Building reliable systems at scale
        </h2>
        <div className="about__copy">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
