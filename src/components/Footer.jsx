import { useState } from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (email.trim()) {
      alert('Obrigado por se inscrever na nossa newsletter!')
      setEmail('')
    }
  }

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="footer-container">
          <div className="footer-newsletter-content">
            <div className="footer-newsletter-text">
              <h3>Receba nosso boletim eletrônico</h3>
              <p>Fique por dentro das últimas notícias da cultura pernambucana.</p>
            </div>
            <form className="footer-newsletter-form" onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Assine nossa newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-newsletter-input"
                required
              />
              <button type="submit" className="footer-newsletter-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand & Description */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="#2d7abf" />
                    <path
                      d="M20 8L28 14V22L20 28L12 22V14L20 8Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <circle cx="20" cy="18" r="4" fill="#2d7abf" />
                  </svg>
                </div>
                <div className="footer-logo-text">
                  <span className="footer-logo-title">Secretaria de Cultura</span>
                  <span className="footer-logo-subtitle">Pernambuco</span>
                </div>
              </div>
              <p className="footer-description">
                Portal oficial da Secretaria de Cultura de Pernambuco. Promovendo a cultura,
                as artes e o patrimônio cultural do estado.
              </p>

              {/* Social Media */}
              <div className="footer-social">
                <a
                  href="https://www.facebook.com/culturape"
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.twitter.com/culturape"
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.flickr.com/fundarpe"
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Flickr"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="7" cy="12" r="5" />
                    <circle cx="17" cy="12" r="5" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/secultpe"
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/secultpe"
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4 className="footer-links-title">Links Rápidos</h4>
              <ul className="footer-links-list">
                <li><a href="#editais">Editais</a></li>
                <li><a href="#eventos">Eventos</a></li>
                <li><a href="#noticias">Notícias</a></li>
                <li><a href="#radio">Rádio Cultura</a></li>
                <li><a href="#tv">TV Cultura</a></li>
                <li><a href="#galeria">Galeria</a></li>
              </ul>
            </div>

            {/* Institutional */}
            <div className="footer-links">
              <h4 className="footer-links-title">Institucional</h4>
              <ul className="footer-links-list">
                <li><a href="#secult">Secult-PE</a></li>
                <li><a href="#fundarpe">Fundarpe</a></li>
                <li><a href="#funcultura">Funcultura</a></li>
                <li><a href="#espacos">Espaços Culturais</a></li>
                <li><a href="#patrimonio">Patrimônio</a></li>
                <li><a href="#transparencia">Transparência</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h4 className="footer-links-title">Contato</h4>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Rua da Aurora, 463/469 – Boa Vista<br />Recife-PE</span>
              </div>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>+55 81 3184.3000</span>
              </div>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                <span>Segunda a Sexta<br />8h às 17h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {currentYear} Secretaria de Cultura de Pernambuco. Todos os direitos reservados.
            </p>
            <div className="footer-bottom-links">
              <a href="#acesso-info">Acesso à Informação</a>
              <a href="#ouvidoria">Ouvidoria</a>
              <a href="#privacidade">Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer