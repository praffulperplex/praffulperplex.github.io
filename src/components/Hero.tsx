import { profile } from '../data/content'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__location reveal reveal--delay-1">{profile.location}</p>
        <h1 id="hero-name" className="hero__name reveal reveal--delay-2">
          {profile.name}
        </h1>
        <p className="hero__role reveal reveal--delay-3">{profile.role}</p>
        <p className="hero__summary reveal reveal--delay-4">{profile.summary}</p>
        <div className="hero__actions reveal reveal--delay-5">
          <a className="btn btn--primary" href="#projects">
            View work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact
          </a>
          <a
            className="btn btn--text"
            href={profile.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume PDF
          </a>
        </div>
      </div>
    </section>
  )
}
