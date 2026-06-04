import { useState } from "react";
import "./Header.css";

// Menu items with sub-items
const menuItems = [
  {
    id: "inicio",
    label: "Início",
    href: "#inicio",
    subItems: [],
  },
  {
    id: "sobre",
    label: "Sobre",
    href: "#sobre",
    subItems: [
      { label: "A Secretaria", href: "#sobre/secretaria" },
      { label: "Equipe", href: "#sobre/equipe" },
      { label: "História", href: "#sobre/historia" },
    ],
  },
  {
    id: "noticias",
    label: "Notícias",
    href: "#noticias",
    subItems: [
      { label: "Últimas Notícias", href: "#noticias/ultimas" },
      { label: "Eventos", href: "#noticias/eventos" },
      { label: "Editais", href: "#noticias/editais" },
    ],
  },
  {
    id: "servicos",
    label: "Serviços",
    href: "#servicos",
    subItems: [
      { label: "Agendamentos", href: "#servicos/agendamentos" },
      { label: "Certidões", href: "#servicos/certidoes" },
      { label: "Inscrições", href: "#servicos/inscricoes" },
    ],
  },
  {
    id: "transparencia",
    label: "Transparência",
    href: "#transparencia",
    subItems: [
      { label: "Dados Abertos", href: "#transparencia/dados" },
      { label: "Licitações", href: "#transparencia/licitacoes" },
      { label: "Prestação de Contas", href: "#transparencia/contas" },
    ],
  },
  {
    id: "contato",
    label: "Contato",
    href: "#contato",
    subItems: [
      { label: "Fale Conosco", href: "#contato/fale" },
      { label: "Ouvidoria", href: "#contato/ouvidoria" },
      { label: "Endereços", href: "#contato/enderecos" },
    ],
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpenItems, setMobileOpenItems] = useState({});
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = (itemId) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMobileSubmenu = (itemId) => {
    setMobileOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `#search?q=${encodeURIComponent(searchTerm)}`;
      setSearchOpen(false);
      setSearchTerm('');
    }
  };

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
              {menuItems.map((item) => (
                <li 
                  key={item.id} 
                  className={`header-nav-item ${item.subItems.length > 0 ? 'has-dropdown' : ''}`}
                >
                  {item.subItems.length > 0 ? (
                    <>
                      <button
                        className={`header-nav-link ${activeDropdown === item.id ? 'active' : ''}`}
                        onClick={() => toggleDropdown(item.id)}
                        aria-expanded={activeDropdown === item.id}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <svg 
                          className="dropdown-arrow"
                          width="12" 
                          height="12" 
                          viewBox="0 0 12 12" 
                          fill="none"
                        >
                          <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      {activeDropdown === item.id && (
                        <ul className="header-dropdown-menu">
                          {item.subItems.map((subItem, index) => (
                            <li key={index}>
                              <a href={subItem.href} className="header-dropdown-link" onClick={closeDropdown}>
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a href={item.href} className="header-nav-link active">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão de Busca */}
          <button 
            className="header-search-btn" 
            aria-label="Buscar"
            onClick={() => setSearchOpen(true)}
          >
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
            {menuItems.map((item) => (
              <li key={item.id} className="header-mobile-nav-item">
                {item.subItems.length > 0 ? (
                  <>
                    <div className="header-mobile-nav-item-header">
                      <a href={item.href} className="header-mobile-nav-link">
                        {item.label}
                      </a>
                      <button
                        className={`header-mobile-dropdown-toggle ${mobileOpenItems[item.id] ? 'open' : ''}`}
                        onClick={() => toggleMobileSubmenu(item.id)}
                        aria-expanded={mobileOpenItems[item.id]}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    {mobileOpenItems[item.id] && (
                      <ul className="header-mobile-dropdown-menu">
                        {item.subItems.map((subItem, index) => (
                          <li key={index}>
                            <a href={subItem.href} className="header-mobile-dropdown-link">
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={item.href} className="header-mobile-nav-link active">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Search Modal Overlay */}
      {searchOpen && (
        <div className="header-search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="header-search-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="header-search-close" 
              onClick={() => setSearchOpen(false)}
              aria-label="Fechar busca"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <form className="header-search-form" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="O que você está procurando?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="header-search-input"
                autoFocus
              />
              <button type="submit" className="header-search-submit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
