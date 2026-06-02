import { usePosts } from '../hooks/useWordPress.js';

function PostList() {
  const { data: posts, loading, error, refetch } = usePosts({ per_page: 10 });

  if (loading) return <div className="loading">Carregando posts...</div>;
  if (error) return <div className="error">Erro: {error}</div>;

  return (
    <section className="post-list">
      <h2>Últimos Posts</h2>
      <button onClick={() => refetch()} className="refresh-btn">
        Atualizar
      </button>
      
      {posts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
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
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="read-more"
              >
                Ler mais →
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default PostList;