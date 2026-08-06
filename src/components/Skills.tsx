import { skillGroups } from '../data/content'
import { useInView } from '../hooks/useInView'

export function Skills() {
  const { ref, inView } = useInView()

  return (
    <section
      className={`section skills ${inView ? 'is-visible' : ''}`}
      id="skills"
      ref={ref}
      aria-labelledby="skills-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Skills</p>
        <h2 id="skills-title" className="section__title">
          Technical toolkit
        </h2>
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skills__group">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
