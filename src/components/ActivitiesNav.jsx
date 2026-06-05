import "./ActivitiesNav.css";

function ActivitiesNav() {
  const activities = [
    { name: "Música", href: "#musica", icon: "music" },
    { name: "Teatro", href: "#teatro", icon: "theater" },
    { name: "Dança", href: "#danca", icon: "dance" },
    { name: "Artes Visuais", href: "#artes-visuais", icon: "art" },
    { name: "Literatura", href: "#literatura", icon: "book" },
    { name: "Cinema", href: "#cinema", icon: "film" },
    { name: "Fotografia", href: "#fotografia", icon: "camera" },
    { name: "Cultura Popular", href: "#cultura-popular", icon: "star" },
  ];

  const getIcon = (type) => {
    const icons = {
      music: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18V5l12-2v13"/>
          <circle cx="6" cy="18" r="3"/>
          <circle cx="18" cy="16" r="3"/>
        </svg>
      ),
      theater: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      dance: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="4" r="2"/>
          <path d="M12 6v6l4 2"/>
          <path d="M8 22v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/>
        </svg>
      ),
      art: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="2"/>
          <circle cx="8" cy="8" r="2"/>
          <path d="M22 14l-6-6-12 12"/>
        </svg>
      ),
      book: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      film: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="2.18"/>
          <line x1="7" y1="2" x2="7" y2="22"/>
          <line x1="17" y1="2" x2="17" y2="22"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
        </svg>
      ),
      camera: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      ),
      star: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
    };
    return icons[type] || icons.star;
  };

  return (
    <div className="activities-nav">
      <div className="activities-nav-container">
        <div className="activities-nav-label">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <span>Atividades</span>
        </div>
        <nav className="activities-nav-items">
          {activities.map((activity) => (
            <a
              key={activity.name}
              href={activity.href}
              className="activities-nav-item"
            >
              <span className="activities-nav-item-icon">
                {getIcon(activity.icon)}
              </span>
              <span className="activities-nav-item-name">{activity.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default ActivitiesNav;