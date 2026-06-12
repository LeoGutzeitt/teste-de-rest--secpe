import { useState, useRef, useEffect } from 'react'
import './RadioPlayer.css'

const radioNews = [
  'Concurso Pernambuco de Todas as Paixões está com inscrições abertas',
  'Pernambuco recebe mais de 12 mil inscrições nos editais da Lei Paulo Gustavo',
  'Festival de Inverno de Garanhuns entra na reta final e terá shows da MPB',
  'Secretaria de Cultura e Fundarpe divulgam propostas classificadas para o 31º FIG',
  'Governo de Pernambuco lança convocatória artística do 31º FIG',
]

const radioPrograms = [
  {
    title: 'Programa "Oxente, Afrodite!" ganha segunda temporada na Rádio Frei Caneca',
    category: 'Música',
    url: '#',
  },
  {
    title: 'No Presídio de Igarassu, uma rádio comunitária abre janelas para a cidadania e cultura',
    category: 'Rádio',
    url: '#',
  },
  {
    title: 'Presidente da Fundarpe participa de debate sobre a preservação de museus na Rádio Jornal',
    category: 'Espaços culturais',
    url: '#',
  },
]

function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [currentProgram, setCurrentProgram] = useState(0)
  const scrollRef = useRef(null)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const nextProgram = () => {
    setCurrentProgram((prev) => (prev + 1) % radioPrograms.length)
  }

  const prevProgram = () => {
    setCurrentProgram((prev) => (prev - 1 + radioPrograms.length) % radioPrograms.length)
  }

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current
      let scrollPos = 0
      let animId

      const animate = () => {
        const scrollWidth = scrollContainer.scrollWidth
        const clientWidth = scrollContainer.clientWidth
        scrollPos += 0.5
        if (scrollPos >= scrollWidth - clientWidth) {
          scrollPos = 0
        }
        scrollContainer.scrollLeft = scrollPos
        animId = requestAnimationFrame(animate)
      }

      animId = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section className="radio-section">
      <div className="radio-container">
        <div className="radio-header">
          <h3 className="radio-title">
            <span className="radio-title-bold">Rádio</span> Cultura.PE
          </h3>
          <div className="radio-live-badge">
            <span className="radio-live-dot"></span>
            AO VIVO
          </div>
        </div>

        <div className="radio-player">
          <div className="radio-player-controls">
            <button
              className="radio-play-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pausar' : 'Tocar'}
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6,4 20,12 6,20" />
                </svg>
              )}
            </button>
            <div className="radio-player-info">
              <span className="radio-now-playing">Tocando agora</span>
              <span className="radio-track-name">{radioNews[currentTrack]}</span>
            </div>
          </div>

          <div className="radio-progress">
            <div className="radio-progress-bar">
              <div
                className="radio-progress-fill"
                style={{ width: isPlaying ? '65%' : '0%' }}
              ></div>
            </div>
            <div className="radio-progress-time">
              <span>00:00</span>
              <span>03:45</span>
            </div>
          </div>
        </div>

        <div className="radio-programs">
          <div className="radio-programs-nav">
            <button
              className="radio-nav-btn"
              onClick={prevProgram}
              aria-label="Anterior"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15,18 9,12 15,6" />
              </svg>
            </button>
            <span className="radio-program-title">
              {radioPrograms[currentProgram].title}
            </span>
            <button
              className="radio-nav-btn"
              onClick={nextProgram}
              aria-label="Proximo"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9,18 15,12 9,6" />
              </svg>
            </button>
          </div>
          <div className="radio-program-meta">
            <span className="radio-program-category">
              {radioPrograms[currentProgram].category}
            </span>
            <a href={radioPrograms[currentProgram].url} className="radio-program-link">
              Ver mais
            </a>
          </div>
        </div>

        <div className="radio-ticker" ref={scrollRef}>
          <div className="radio-ticker-content">
            {radioNews.map((item, index) => (
              <span key={index} className="radio-ticker-item">
                <span className="radio-ticker-dot">&#9679;</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RadioPlayer