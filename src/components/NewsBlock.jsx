import { useState, useEffect } from "react";
import { usePosts } from "../hooks/useWordPress";
import "./NewsBlock.css";

function NewsBlock() {
  const { data: posts, loading, error } = usePosts({ per_page: 6, _embed: true });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fallback news data for demo purposes
  const fallbackNews = [
    {
      id: 1,
      title: { rendered: "Festival de Inverno de Pernambuco 2024" },
      excerpt: { rendered: "Confira a programação completa do Festival de Inverno com shows, apresentações teatrais e muito mais." },
      categories: [1],
      categoryNames: ["Eventos"],
      featuredImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=400&fit=crop",
      link: "#noticia/1"
    },
    {
      id: 2,
      title: { rendered: "Exposição de Artes Visuais no Museu do Estado" },
      excerpt: { rendered: "Mostra reúne obras de artistas pernambucanos em homenagem à cultura local." },
      categories: [2],
      categoryNames: ["Artes Visuais"],
      featuredImage: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&h=400&fit=crop",
      link: "#noticia/2"
    },
    {
      id: 3,
      title: { rendered: "Editais Abertos para Projetos Culturais" },
      excerpt: { rendered: "Secretaria de Cultura lança novos editais para fomento de projetos artísticos." },
      categories: [3],
      categoryNames: ["Editais"],
      featuredImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=400&fit=crop",
      link: "#noticia/3"
    },
    {
      id: 4,
      title: { rendered: "Espetáculo de Dança Contemporânea no Teatro Santa Isabel" },
      excerpt: { rendered: "Companhia pernambucana apresenta montagem inédita inspirada no frevo." },
      categories: [4],
      categoryNames: ["Dança"],
      featuredImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop",
      link: "#noticia/4"
    },
    {
      id: 5,
      title: { rendered: "Oficinas de Literatura para Jovens Autores" },
      excerpt: { rendered: "Iniciativa visa incentivar a produção literária entre adolescentes de escolas públicas." },
      categories: [5],
      categoryNames: ["Literatura"],
      featuredImage: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=400&fit=crop",
      link: "#noticia/5"
    },
    {
      id: 6,
      title: { rendered: "Mostra de Cinema Pernambucano Chega ao Interior" },
      excerpt: { rendered: "Projeções gratuitas levam produções locais para cidades do sertão." },
      categories: [6],
      categoryNames: ["Cinema"],
      featuredImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=400&fit=crop",
      link: "#noticia/6"
    }
  ];

  const news = posts && posts.length > 0 ? posts.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    categories: post.categories,
    categoryNames: post.categoryNames || ["Geral"],
    featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                   `https://images.unsplash.com/photo-${1500000000000 + post.id}?w=800&h=400&fit=crop`,
    link: `#noticia/${post.id}`
  })) : fallbackNews;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % news.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [news.length]);

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrev = () => {
    goToSlide((activeSlide - 1 + news.length) % news.length);
  };

  const goToNext = () => {
    goToSlide((activeSlide + 1) % news.length);
  };

  const currentNews = news[activeSlide];

  return (
    <section className="news-block">
      <div className="news-block-container">
        <div className="news-block-header">
          <h2 className="news-block-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
            </svg>
            <span>Últimas Notícias</span>
          </h2>
          <a href="#todas-noticias" className="news-block-see-all">
            Ver todas
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {loading ? (
          <div className="news-block-loading">
            <div className="news-block-loading-spinner"></div>
            <span>Carregando notícias...</span>
          </div>
        ) : (
          <div className="news-block-content">
            <div className={`news-block-main ${isTransitioning ? 'transitioning' : ''}`}>
              <a href={currentNews.link} className="news-block-main-link">
                <div className="news-block-main-image">
                  <img 
                    src={currentNews.featuredImage} 
                    alt={currentNews.title.rendered}
                    loading="lazy"
                  />
                  <div className="news-block-main-overlay"></div>
                </div>
                <div className="news-block-main-info">
                  <div className="news-block-main-category">
                    {currentNews.categoryNames?.[0] || "Geral"}
                  </div>
                  <h3 className="news-block-main-title">
                    {currentNews.title.rendered}
                  </h3>
                  <p className="news-block-main-excerpt" dangerouslySetInnerHTML={{ __html: currentNews.excerpt.rendered }} />
                </div>
              </a>
            </div>

            <div className="news-block-thumbnails">
              {news.map((item, index) => (
                <button
                  key={item.id}
                  className={`news-block-thumbnail ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ver notícia: ${item.title.rendered}`}
                  aria-pressed={index === activeSlide}
                >
                  <img 
                    src={item.featuredImage} 
                    alt={item.title.rendered}
                    loading="lazy"
                  />
                  <div className="news-block-thumbnail-overlay"></div>
                  <div className="news-block-thumbnail-info">
                    <span className="news-block-thumbnail-category">
                      {item.categoryNames?.[0] || "Geral"}
                    </span>
                    <span className="news-block-thumbnail-title">
                      {item.title.rendered}
                    </span>
                  </div>
                  <span className="news-block-thumbnail-number">{index + 1}</span>
                </button>
              ))}
            </div>

            <div className="news-block-nav">
              <button 
                className="news-block-nav-btn news-block-nav-prev"
                onClick={goToPrev}
                aria-label="Notícia anterior"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button 
                className="news-block-nav-btn news-block-nav-next"
                onClick={goToNext}
                aria-label="Próxima notícia"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            <div className="news-block-indicators">
              {news.map((_, index) => (
                <button
                  key={index}
                  className={`news-block-indicator ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir para notícia ${index + 1}`}
                  aria-pressed={index === activeSlide}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsBlock;