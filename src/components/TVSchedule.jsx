import "./TVSchedule.css";

function TVSchedule() {
  // Sample TV Cultura schedule data
  const scheduleData = [
    { time: "06:00", program: "Bom Dia Cultura", category: "Infantil" },
    { time: "08:00", program: "Cultura na Escola", category: "Educacional" },
    { time: "10:00", program: "Documentário Especial", category: "Documentário" },
    { time: "12:00", program: "Jornal da Cultura", category: "Jornalismo" },
    { time: "13:00", program: "Cultura Pop", category: "Entretenimento" },
    { time: "15:00", program: "Cine Cultura", category: "Cinema" },
    { time: "17:00", program: "Oficinas Culturais", category: "Educacional" },
    { time: "19:00", program: "Jornal da Noite", category: "Jornalismo" },
    { time: "20:00", program: "Programa Cultural", category: "Entretenimento" },
    { time: "22:00", program: "Cinema Nacional", category: "Cinema" },
    { time: "00:00", program: "Madrugada Cultural", category: "Entretenimento" },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Infantil": "#FF6B6B",
      "Educacional": "#4ECDC4",
      "Documentário": "#45B7D1",
      "Jornalismo": "#96CEB4",
      "Entretenimento": "#FFEAA7",
      "Cinema": "#DDA0DD",
    };
    return colors[category] || "#95E1D3";
  };

  const getCurrentProgram = () => {
    const now = new Date();
    const currentHour = now.getHours();
    
    for (let i = scheduleData.length - 1; i >= 0; i--) {
      const scheduleHour = parseInt(scheduleData[i].time.split(":")[0]);
      if (currentHour >= scheduleHour) {
        return { ...scheduleData[i], isNow: true };
      }
    }
    return { ...scheduleData[0], isNow: true };
  };

  const currentProgram = getCurrentProgram();

  return (
    <section className="tv-schedule">
      <div className="tv-schedule-container">
        <div className="tv-schedule-header">
          <div className="tv-schedule-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
              <polyline points="17 2 12 7 7 2"/>
            </svg>
            <span>Programação TV Cultura</span>
          </div>
          <div className="tv-schedule-live">
            <span className="live-indicator"></span>
            <span>Agora: {currentProgram.program}</span>
          </div>
        </div>

        <div className="tv-schedule-grid">
          {scheduleData.map((item, index) => {
            const isCurrent = item.time === currentProgram.time;
            return (
              <div 
                key={index} 
                className={`tv-schedule-item ${isCurrent ? 'current' : ''}`}
              >
                <div className="tv-schedule-time">
                  {item.time}
                  {isCurrent && <span className="now-badge">AGORA</span>}
                </div>
                <div className="tv-schedule-info">
                  <div 
                    className="tv-schedule-category"
                    style={{ backgroundColor: getCategoryColor(item.category) }}
                  >
                    {item.category}
                  </div>
                  <h4 className="tv-schedule-program">{item.program}</h4>
                </div>
              </div>
            );
          })}
        </div>

        <a href="#programacao-completa" className="tv-schedule-see-all">
          Ver programação completa
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default TVSchedule;