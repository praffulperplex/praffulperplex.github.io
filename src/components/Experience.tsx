import { experience } from '../data/content'
import { useInView } from '../hooks/useInView'

export function Experience() {
  const { ref, inView } = useInView()

  return (
    <section
      className={`section experience ${inView ? 'is-visible' : ''}`}
      id="experience"
      ref={ref}
      aria-labelledby="experience-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Experience</p>
        <h2 id="experience-title" className="section__title">
          Where I&apos;ve shipped
        </h2>
        <ol className="experience__list">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="experience__item">
              <div className="experience__meta">
                <h3>
                  {job.title}
                  <span className="experience__at"> @ {job.company}</span>
                </h3>
                <p className="experience__period">{job.period}</p>
              </div>
              <ul className="experience__bullets">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 48)}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
