import { useState, useEffect } from "react";
import { useCategories } from "../hooks/useWordPress";
import "./ActivitiesNav.css";

function ActivitiesNav() {
  const { data: categories, loading, error } = useCategories({ per_page: 8 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Fallback activities data for demo purposes
  const fallbackActivities = [
    { id: 1, name: "Música", slug: "musica", count: 24 },
    { id: 2, name: "Teatro", slug: "teatro", count: 18 },
    { id: 3, name: "Dança", slug: "danca", count: 15 },
    { id: 4, name: "Artes Visuais", slug: "artes-visuais", count: 32 },
    { id: 5, name: "Literatura", slug: "literatura", count: 12 },
    { id: 6, name: "Cinema", slug: "cinema", count: 9 },
    { id: 7, name: "Fotografia", slug: "fotografia", count: 21 },
    { id: 8, name: "Cultura Popular", slug: "cultura-popular", count: 28 },
    { id: 9, name: "Patrimônio", slug: "patrimonio", count: 14 },
    { id: 10, name: "Museus", slug: "museus", count: 17 },
  ];

  const activities = categories && categories.length > 0 ? categories : fallbackActivities;

  const scroll = (direction) => {
    const container = document.querySelector(".activities-nav-scroll");
    if (container) {
      const scrollAmount = 200;
      const newPosition = direction === "left" 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      
      container.scrollTo({
        left: newPosition,
        behavior: "smooth"
      });
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = () => {
    const container = document.querySelector(".activities-nav-scroll");
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      setScrollPosition(scrollLeft);
    }
  };

  useEffect(() => {
    const container = document.querySelector(".activities-nav-scroll");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="activities-nav">
      <div className="activities-nav-container">
        <div className="activities-nav-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <span>Atividades Culturais</span>
        </div>
        
        <div className="activities-nav-wrapper">
          {showLeftArrow && (
            <button 
              className="activities-nav-arrow activities-nav-arrow-left"
              onClick={() => scroll("left")}
              aria-label="Rolar para esquerda"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
          )}
          
          <div className="activities-nav-scroll">
            {loading ? (
              <div className="activities-nav-loading">Carregando atividades...</div>
            ) : (
              activities.map((activity) => (
                <a 
                  key={activity.id} 
                  href={`#atividade/${activity.slug}`}
                  className="activities-nav-item"
                >
                  <div className="activities-nav-item-icon">
                    {activity.slug === "musica" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18V5l12-2v13"/>
                        <circle cx="6" cy="18" r="3"/>
                        <circle cx="18" cy="16" r="3"/>
                      </svg>
                    )}
                    {activity.slug === "teatro" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5"/>
                        <path d="M2 12l10 5 10-5"/>
                      </svg>
                    )}
                    {activity.slug === "danca" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="4" r="2"/>
                        <path d="M12 6v6l4 2"/>
                        <path d="M8 22v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/>
                        <path d="M12 14l-4-2"/>
                        <path d="M12 14l4-2"/>
                      </svg>
                    )}
                    {activity.slug === "artes-visuais" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="2"/>
                        <circle cx="8" cy="8" r="2"/>
                        <path d="M22 14l-6-6-12 12"/>
                      </svg>
                    )}
                    {activity.slug === "literatura" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        <line x1="8" y1="6" x2="16" y2="6"/>
                        <line x1="8" y1="10" x2="14" y2="10"/>
                      </svg>
                    )}
                    {activity.slug === "cinema" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="2.18"/>
                        <line x1="7" y1="2" x2="7" y2="22"/>
                        <line x1="17" y1="2" x2="17" y2="22"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <line x1="2" y1="7" x2="7" y2="7"/>
                        <line x1="2" y1="17" x2="7" y2="17"/>
                        <line x1="17" y1="17" x2="22" y2="17"/>
                        <line x1="17" y1="7" x2="22" y2="7"/>
                      </svg>
                    )}
                    {activity.slug === "fotografia" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                        <circle cx="12" cy="13" r="4"/>
                      </svg>
                    )}
                    {activity.slug === "cultura-popular" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    )}
                    {activity.slug === "patrimonio" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 21h18"/>
                        <path d="M5 21V7l8-4 8 4v14"/>
                        <path d="M9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10H9V10z"/>
                        <path d="M10 21V11h4v10"/>
                      </svg>
                    )}
                    {activity.slug === "museus" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 21h18"/>
                        <path d="M5 21V7l7-4 7 4v14"/>
                        <rect x="9" y="14" width="6" height="7"/>
                        <path d="M10 9h4"/>
                        <path d="M10 12h4"/>
                      </svg>
                    )}
                    {!["musica", "teatro", "danca", "artes-visuais", "literatura", "cinema", "fotografia", "cultura-popular", "patrimonio", "museus"].includes(activity.slug) && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        <path d="M2 12h20"/>
                      </svg>
                    )}
                  </div>
                  <span className="activities-nav-item-name">{activity.name}</span>
                  {activity.count && (
                    <span className="activities-nav-item-count">{activity.count}</span>
                  )}
                </a>
              ))
            )}
          </div>
          
          {showRightArrow && (
            <button 
              className="activities-nav-arrow activities-nav-arrow-right"
              onClick={() => scroll("right")}
              aria-label="Rolar para direita"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ActivitiesNav;