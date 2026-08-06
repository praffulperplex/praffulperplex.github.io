import { achievements, education } from '../data/content'
import { useInView } from '../hooks/useInView'

export function Achievements() {
  const { ref, inView } = useInView()

  return (
    <section
      className={`section achievements ${inView ? 'is-visible' : ''}`}
      id="achievements"
      ref={ref}
      aria-labelledby="achievements-title"
    >
      <div className="section__inner section__inner--split">
        <div>
          <p className="section__eyebrow">Recognition</p>
          <h2 id="achievements-title" className="section__title">
            Achievements
          </h2>
          <ul className="achievements__list">
            {achievements.map((item) => (
              <li key={item.slice(0, 40)}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="section__eyebrow">Education</p>
          <h2 className="section__title section__title--sm">{education.degree}</h2>
          <p className="achievements__school">{education.school}</p>
          <p className="achievements__period">{education.period}</p>
        </div>
      </div>
    </section>
  )
}
