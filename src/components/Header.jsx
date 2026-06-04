import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Barra do Governo */}
      <div className="header-top">
        <div className="header-top-container">
          <div className="header-top-brand">
            <span className="header-top-text">
              Governo do Estado de Pernambuco
            </span>
          </div>
          <div className="header-top-actions">
            <a href="#acessibilidade" className="header-top-link">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="8" r="2" />
                <path d="M12 10v4" />
                <path d="M8 14l4 4 4-4" />
              </svg>
              Acessibilidade
            </a>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <div className="header-main">
        <div className="header-main-container">
          <div className="header-logo">
            <div className="header-logo-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#1a3a5c" />
                <path
                  d="M20 8L28 14V22L20 28L12 22V14L20 8Z"
                  fill="#2d7abf"
                  stroke="#fff"
                  strokeWidth="1"
                />
                <circle cx="20" cy="18" r="4" fill="#fff" />
              </svg>
            </div>
            <div className="header-logo-text">
              <span className="header-secretaria">
                Secretaria de Cultura
              </span>
              <span className="header-estado">Pernambuco</span>
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="header-nav desktop-nav">
            <ul className="header-nav-list">
              <li>
                <a href="#inicio" className="header-nav-link active">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="header-nav-link">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#noticias" className="header-nav-link">
                  Notícias
                </a>
              </li>
              <li>
                <a href="#servicos" className="header-nav-link">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#transparencia" className="header-nav-link">
                  Transparência
                </a>
              </li>
              <li>
                <a href="#contato" className="header-nav-link">
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          {/* Botão de Busca */}
          <button className="header-search-btn" aria-label="Buscar">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          {/* Menu Mobile Toggle */}
          <button
            className={`header-menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className="header-menu-toggle-line"></span>
            <span className="header-menu-toggle-line"></span>
            <span className="header-menu-toggle-line"></span>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`header-mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="header-mobile-nav">
          <ul className="header-mobile-nav-list">
            <li>
              <a href="#inicio" className="header-mobile-nav-link active">
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="header-mobile-nav-link">
                Sobre
              </a>
            </li>
            <li>
              <a href="#noticias" className="header-mobile-nav-link">
                Notícias
              </a>
            </li>
            <li>
              <a href="#servicos" className="header-mobile-nav-link">
                Serviços
              </a>
            </li>
            <li>
              <a href="#transparencia" className="header-mobile-nav-link">
                Transparência
              </a>
            </li>
            <li>
              <a href="#contato" className="header-mobile-nav-link">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
