import { profile } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {year} {profile.name}
        </p>
        <p className="footer__note">Built with Vite · React · TypeScript</p>
      </div>
    </footer>
  )
}
