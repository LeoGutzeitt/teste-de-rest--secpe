import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getPosts } from '../services/wpApi'

function SinglePost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        setError(null)
        const posts = await getPosts({ slug, _embed: true })
        if (posts.length > 0) {
          setPost(posts[0])
        } else {
          setError('Post não encontrado')
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <>
        <Header />
        <main className="app-main">
          <div className="loading">Carregando post...</div>
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
        <article className="single-post">
          <Link to="/noticias" className="back-link">← Voltar para Notícias</Link>
          
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <img 
              src={post._embedded['wp:featuredmedia'][0].source_url} 
              alt={post.title.rendered}
              className="single-post-thumbnail"
            />
          )}
          
          <h1 
            className="single-post-title"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          
          <div className="single-post-meta">
            {post._embedded?.author?.[0] && (
              <span className="post-author">
                Por {post._embedded.author[0].name}
              </span>
            )}
            <span className="post-date">
              {new Date(post.date).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>

          {post._embedded?.['wp:term']?.[0] && (
            <div className="single-post-categories">
              {post._embedded['wp:term'][0].map(cat => (
                <Link 
                  key={cat.id} 
                  to={`/categoria/${cat.slug}`}
                  className="category-badge"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
          
          <div 
            className="single-post-content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>
      </main>

      <Footer />
    </>
  )
}

export default SinglePost