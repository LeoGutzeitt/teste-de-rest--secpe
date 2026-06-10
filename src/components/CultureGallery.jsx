import "./CultureGallery.css";

function CultureGallery() {
  // Sample gallery images - using picsum.photos for demo
  const galleryImages = [
    {
      id: 1,
      title: "Festival de Parintins",
      category: "Folklore",
      size: "large",
      url: "https://picsum.photos/seed/cultura1/600/600"
    },
    {
      id: 2,
      title: "Carnaval do Recife",
      category: "Festas Populares",
      size: "medium",
      url: "https://picsum.photos/seed/cultura2/400/400"
    },
    {
      id: 3,
      title: "Capoeira na Bahia",
      category: "Tradições",
      size: "tall",
      url: "https://picsum.photos/seed/cultura3/400/600"
    },
    {
      id: 4,
      title: "Arte Indígena",
      category: "Artesanato",
      size: "small",
      url: "https://picsum.photos/seed/cultura4/300/300"
    },
    {
      id: 5,
      title: "Bumba Meu Boi",
      category: "Folklore",
      size: "medium",
      url: "https://picsum.photos/seed/cultura5/400/400"
    },
    {
      id: 6,
      title: "Círio de Nazaré",
      category: "Religiosidade",
      size: "wide",
      url: "https://picsum.photos/seed/cultura6/600/300"
    },
    {
      id: 7,
      title: "Congada Mineira",
      category: "Tradições",
      size: "small",
      url: "https://picsum.photos/seed/cultura7/300/300"
    },
    {
      id: 8,
      title: "Festa do Divino",
      category: "Festas Populares",
      size: "tall",
      url: "https://picsum.photos/seed/cultura8/400/600"
    },
    {
      id: 9,
      title: "Cerâmica Marajoara",
      category: "Artesanato",
      size: "medium",
      url: "https://picsum.photos/seed/cultura9/400/400"
    },
    {
      id: 10,
      title: "Maracatu",
      category: "Folklore",
      size: "small",
      url: "https://picsum.photos/seed/cultura10/300/300"
    },
    {
      id: 11,
      title: "Lavagem do Bonfim",
      category: "Religiosidade",
      size: "wide",
      url: "https://picsum.photos/seed/cultura11/600/300"
    },
    {
      id: 12,
      title: "Frevo Pernambucano",
      category: "Danças",
      size: "medium",
      url: "https://picsum.photos/seed/cultura12/400/400"
    },
    {
      id: 13,
      title: "Rendeiras do Nordeste",
      category: "Artesanato",
      size: "tall",
      url: "https://picsum.photos/seed/cultura13/400/600"
    },
    {
      id: 14,
      title: "Cavalhada",
      category: "Teatro Popular",
      size: "small",
      url: "https://picsum.photos/seed/cultura14/300/300"
    },
    {
      id: 15,
      title: "Folia de Reis",
      category: "Tradições",
      size: "medium",
      url: "https://picsum.photos/seed/cultura15/400/400"
    },
  ];

  return (
    <section className="culture-gallery">
      <div className="culture-gallery-container">
        <div className="culture-gallery-header">
          <div className="culture-gallery-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <span>Galeria da Cultura Brasileira</span>
          </div>
          <div className="culture-gallery-count">
            {galleryImages.length} registros culturais
          </div>
        </div>

        <div className="gallery-mosaic">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className={`gallery-item ${image.size}`}
            >
              <div className="gallery-image-wrapper">
                <img 
                  src={image.url} 
                  alt={image.title}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <span className="gallery-category">{image.category}</span>
                    <h3 className="gallery-item-title">{image.title}</h3>
                    <button className="gallery-view-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      Ver detalhes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-footer">
          <a href="#galeria-completa" className="gallery-see-all">
            Explorar galeria completa
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CultureGallery;