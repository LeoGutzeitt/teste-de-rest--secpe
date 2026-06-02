import { useState } from 'react';
import { useSearch } from '../hooks/useWordPress.js';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, error } = useSearch(searchTerm);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.search.value);
  };

  return (
    <section className="search-section">
      <h2>Buscar Conteúdo</h2>
      
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="Digite para buscar..."
          defaultValue={searchTerm}
        />
        <button type="submit">Buscar</button>
      </form>

      {loading && <div className="loading">Buscando...</div>}
      {error && <div className="error">Erro: {error}</div>}

      {!loading && !error && searchTerm && (
        <div className="search-results">
          {data.posts.length === 0 && data.pages.length === 0 ? (
            <p>Nenhum resultado encontrado para "{searchTerm}".</p>
          ) : (
            <>
              {data.posts.length > 0 && (
                <div className="results-group">
                  <h3>Posts ({data.posts.length})</h3>
                  <ul>
                    {data.posts.map(post => (
                      <li key={post.id}>
                        <a 
                          href={post.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {data.pages.length > 0 && (
                <div className="results-group">
                  <h3>Páginas ({data.pages.length})</h3>
                  <ul>
                    {data.pages.map(page => (
                      <li key={page.id}>
                        <a 
                          href={page.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          dangerouslySetInnerHTML={{ __html: page.title.rendered }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </section>
  );
}

export default SearchBar;