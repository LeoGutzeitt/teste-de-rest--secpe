import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getPosts, getCategories } from '../services/wpApi'

function Categoria() {
  const { slug } = useParams()
  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Buscar a categoria pelo slug
        const categories = await getCategories({ slug, per_page: 1 })
        if (categories.length > 0) {
          setCategory(categories[0])
          
          // Buscar posts da categoria
          const postsData = await getPosts({ 
            categories: categories[0].id, 
            per_page: 12, 
            _embed: true 
          })
          setPosts(postsData)
        } else {
          setError('Categoria não encontrada')
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [slug])

  if (loading) {
    return (
      <>
        <Header />
        <main className="app-main">
          <div className="loading">Carregando posts...</div>
        </main>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <main className="app-main">
          <div className="error">
            <h2>Erro: {error}</h2>
            <Link to="/noticias">← Voltar para Notícias</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      
      <main className="app-main">
        <h1 className="page-title">
          {category?.name || 'Categoria'}
        </h1>
        
        <Link to="/noticias" className="back-link">← Todas as Notícias</Link>
        
        {posts.length === 0 ? (
          <p>Nenhum post encontrado nesta categoria.</p>
        ) : (
          <div className="posts-grid">
            {posts.map(post => (
              <article key={post.id} className="post-card">
                {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                  <img 
                    src={post._embedded['wp:featuredmedia'][0].source_url} 
                    alt={post.title.rendered}
                    className="post-thumbnail"
                  />
                )}
                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <div 
                  className="post-excerpt"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                />
                <div className="post-meta">
                  {post._embedded?.author?.[0] && (
                    <span className="post-author">
                      Por {post._embedded.author[0].name}
                    </span>
                  )}
                  <span className="post-date">
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <Link 
                  to={`/noticia/${post.slug}`} 
                  className="read-more"
                >
                  Ler mais →
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}

export default Categoria