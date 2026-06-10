import { useState, useEffect, useRef } from "react";
import "./CultureEvents.css";

function CultureEvents() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  // Get current year and month for dynamic dates
  const now = new Date();
  const eventYear = now.getFullYear();
  const eventMonth = now.getMonth();
  
  // Sample culture events data - ordered from most to least recent
  const eventsData = [
    {
      id: 1,
      title: "Exposição: Arte Moderna Brasileira",
      date: new Date(eventYear, eventMonth, 8),
      time: "19:00",
      location: "Pinacoteca do Estado",
      category: "Exposição",
      description: "Mostra reúne obras de Tarsila do Amaral, Portinari e outros mestres."
    },
    {
      id: 2,
      title: "Espetáculo: Dança Contemporânea",
      date: new Date(eventYear, eventMonth, 7),
      time: "20:30",
      location: "Theatro Municipal",
      category: "Teatro",
      description: "Companhia apresenta coreografias inéditas com trilha sonora ao vivo."
    },
    {
      id: 3,
      title: "Workshop: Cerâmica Tradicional",
      date: new Date(eventYear, eventMonth, 6),
      time: "14:00",
      location: "Centro Cultural São Paulo",
      category: "Oficina",
      description: "Aprenda técnicas ancestrais de modelagem em cerâmica."
    },
    {
      id: 4,
      title: "Show: MPB e Chorinho",
      date: new Date(eventYear, eventMonth, 5),
      time: "21:00",
      location: "Sala São Paulo",
      category: "Música",
      description: "Noite especial com os maiores clássicos da música popular brasileira."
    },
    {
      id: 5,
      title: "Cine Debate: Cinema Nacional",
      date: new Date(eventYear, eventMonth, 4),
      time: "18:30",
      location: "CineSESC",
      category: "Cinema",
      description: "Exibição seguida de debate com o diretor do filme."
    },
    {
      id: 6,
      title: "Feira de Literatura",
      date: new Date(eventYear, eventMonth, 3),
      time: "10:00",
      location: "Parque da Água Branca",
      category: "Literatura",
      description: "Autores locais apresentam obras e realizam sessões de autógrafos."
    },
    {
      id: 7,
      title: "Festival de Gastronomia Cultural",
      date: new Date(eventYear, eventMonth, 2),
      time: "12:00",
      location: "Mercado Municipal",
      category: "Gastronomia",
      description: "Sabores tradicionais de todas as regiões do Brasil."
    },
    {
      id: 8,
      title: "Visita Guiada: Centro Histórico",
      date: new Date(eventYear, eventMonth, 1),
      time: "09:00",
      location: "Pátio do Colégio",
      category: "Turismo Cultural",
      description: "Passeio pelos principais pontos históricos da cidade."
    },
    {
      id: 9,
      title: "Sarau Poético",
      date: new Date(eventYear, eventMonth - 1, 30),
      time: "19:30",
      location: "Biblioteca Mário de Andrade",
      category: "Literatura",
      description: "Noite de poesia com declamações e música ao vivo."
    },
    {
      id: 10,
      title: "Exposição: Fotografia Urbana",
      date: new Date(eventYear, eventMonth - 1, 28),
      time: "16:00",
      location: "Museu da Imagem e do Som",
      category: "Exposição",
      description: "Registro fotográfico da transformação da paisagem urbana."
    }
  ];

  // Sort events from most recent to oldest
  const sortedEvents = [...eventsData].sort((a, b) => b.date - a.date);

  const getCategoryColor = (category) => {
    const colors = {
      "Exposição": "#FF6B6B",
      "Teatro": "#4ECDC4",
      "Oficina": "#45B7D1",
      "Música": "#96CEB4",
      "Cinema": "#FFEAA7",
      "Literatura": "#DDA0DD",
      "Gastronomia": "#FF8C42",
      "Turismo Cultural": "#87CEEB",
    };
    return colors[category] || "#95E1D3";
  };

  const formatDate = (date) => {
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
  };

  const formatDateLong = (date) => {
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 
                    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
  };

  const isSameDay = (date1, date2) => {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  };

  const getEventsForDate = (date) => {
    return sortedEvents.filter(event => isSameDay(event.date, date));
  };

  const generateCalendarDays = () => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDay = firstDay.getDay();
    const totalDays = lastDay.getDate();
    
    const days = [];
    
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    for (let day = 1; day <= totalDays; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const changeMonth = (delta) => {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + delta, 1));
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    if (showCalendar) {
      setSelectedDate(null);
    }
  };

  const handleDateSelect = (day) => {
    setSelectedDate(day);
    setShowCalendar(false);
  };

  const clearFilter = () => {
    setSelectedDate(null);
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCalendar && calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];
  const calendarDays = generateCalendarDays();

  return (
    <section className="culture-events">
      <div className="culture-events-container">
        <div className="culture-events-header">
          <div className="culture-events-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            <span>Agenda Cultural</span>
          </div>
          <div className="culture-events-count">
            {sortedEvents.length} eventos programados
          </div>
        </div>

        <div className="culture-events-content">
          {/* Events Section */}
          <div className="events-section">
            <div className="events-header">
              <div className="events-header-content">
                <h3 className="events-section-title">
                  {selectedDate 
                    ? `Eventos para ${formatDate(selectedDate)}`
                    : 'Próximos Eventos'}
                </h3>
                {selectedDate && (
                  <button className="clear-filter-btn" onClick={clearFilter}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    Limpar filtro
                  </button>
                )}
              </div>
              <button className="toggle-calendar-btn" onClick={toggleCalendar} aria-label="Abrir calendário para filtrar eventos por data">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {showCalendar ? 'Fechar calendário' : 'Filtrar por data'}
              </button>
            </div>

            <div className="events-scroll-container">
              <div className="events-list">
                {selectedDate && selectedDateEvents.length > 0 ? (
                  selectedDateEvents.map(event => (
                    <div key={event.id} className="event-card">
                      <div className="event-category-badge" style={{ backgroundColor: getCategoryColor(event.category) }}>
                        {event.category}
                      </div>
                      <h4 className="event-title">{event.title}</h4>
                      <div className="event-details">
                        <div className="event-datetime">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                          <span>{event.time}</span>
                        </div>
                        <div className="event-location">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="event-description">{event.description}</p>
                      <button className="event-details-btn">
                        Ver detalhes
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </div>
                  ))
                ) : (
                  sortedEvents.map(event => (
                    <div key={event.id} className="event-card">
                      <div className="event-date-mini">
                        {formatDateLong(event.date)}
                      </div>
                      <div className="event-category-badge" style={{ backgroundColor: getCategoryColor(event.category) }}>
                        {event.category}
                      </div>
                      <h4 className="event-title">{event.title}</h4>
                      <div className="event-details">
                        <div className="event-datetime">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                          <span>{event.time}</span>
                        </div>
                        <div className="event-location">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="event-description">{event.description}</p>
                      <button className="event-details-btn">
                        Ver detalhes
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <a href="#agenda-completa" className="events-see-all">
              Ver agenda completa
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Calendar Modal */}
        {showCalendar && (
          <div className="calendar-modal-overlay">
            <div className="calendar-modal" ref={calendarRef}>
              <button className="calendar-modal-close" onClick={toggleCalendar} aria-label="Fechar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>

              <div className="calendar-modal-header">
                <button 
                  className="calendar-nav-btn" 
                  onClick={() => changeMonth(-1)}
                  aria-label="Mês anterior"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <h3 className="calendar-modal-month">
                  {monthNames[calendarMonth.getMonth()]} {calendarMonth.getFullYear()}
                </h3>
                <button 
                  className="calendar-nav-btn" 
                  onClick={() => changeMonth(1)}
                  aria-label="Próximo mês"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>

              <div className="calendar-grid">
                {weekDays.map(day => (
                  <div key={day} className="calendar-weekday">{day}</div>
                ))}
                
                {calendarDays.map((day, index) => {
                  if (!day) {
                    return <div key={index} className="calendar-day empty"></div>;
                  }
                  
                  const isSelected = isSameDay(day, selectedDate);
                  const isToday = isSameDay(day, new Date());
                  const hasEvents = getEventsForDate(day).length > 0;
                  
                  return (
                    <button
                      key={index}
                      className={`calendar-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''} ${hasEvents ? 'has-events' : ''}`}
                      onClick={() => handleDateSelect(day)}
                      aria-label={`${formatDate(day)}${hasEvents ? ' - possui eventos' : ''}`}
                    >
                      <span className="day-number">{day.getDate()}</span>
                      {hasEvents && <span className="events-dot"></span>}
                    </button>
                  );
                })}
              </div>

              <div className="calendar-legend">
                <div className="legend-item">
                  <span className="legend-dot today"></span>
                  <span>Hoje</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot has-events"></span>
                  <span>Com eventos</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot selected"></span>
                  <span>Selecionado</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CultureEvents;