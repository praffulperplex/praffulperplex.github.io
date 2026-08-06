import { projects } from '../data/content'
import { useInView } from '../hooks/useInView'

export function Projects() {
  const { ref, inView } = useInView()

  return (
    <section
      className={`section projects ${inView ? 'is-visible' : ''}`}
      id="projects"
      ref={ref}
      aria-labelledby="projects-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Projects</p>
        <h2 id="projects-title" className="section__title">
          Selected work
        </h2>
        <ul className="projects__list">
          {projects.map((project) => (
            <li key={project.name} className="project">
              <div className="project__header">
                <h3>{project.name}</h3>
                <ul className="project__tags" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <p className="project__desc">{project.description}</p>
              <ul className="project__highlights">
                {project.highlights.map((h) => (
                  <li key={h.slice(0, 40)}>{h}</li>
                ))}
              </ul>
              {project.links?.length ? (
                <div className="project__links">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
