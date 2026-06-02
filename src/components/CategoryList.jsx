import { useCategories } from '../hooks/useWordPress.js';

function CategoryList() {
  const { data: categories, loading, error } = useCategories();

  if (loading) return <div className="loading">Carregando categorias...</div>;
  if (error) return <div className="error">Erro: {error}</div>;

  return (
    <section className="category-list">
      <h2>Categorias</h2>
      
      {categories.length === 0 ? (
        <p>Nenhuma categoria encontrada.</p>
      ) : (
        <ul className="categories-grid">
          {categories.map(category => (
            <li key={category.id} className="category-item">
              <span className="category-name">{category.name}</span>
              <span className="category-count">({category.count} posts)</span>
              {category.description && (
                <p className="category-description">
                  {category.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CategoryList;