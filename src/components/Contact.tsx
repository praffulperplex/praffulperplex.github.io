import { profile } from '../data/content'
import { useInView } from '../hooks/useInView'

export function Contact() {
  const { ref, inView } = useInView()

  return (
    <section
      className={`section contact ${inView ? 'is-visible' : ''}`}
      id="contact"
      ref={ref}
      aria-labelledby="contact-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Contact</p>
        <h2 id="contact-title" className="section__title">
          Let&apos;s build something solid
        </h2>
        <p className="contact__lead">
          Open to senior fullstack / backend roles — especially cloud-native and
          healthcare platforms.
        </p>
        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a
            className="btn btn--ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn--ghost"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
