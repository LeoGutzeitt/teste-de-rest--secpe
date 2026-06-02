import PostList from './components/PostList'
import CategoryList from './components/CategoryList'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>WordPress REST API Demo</h1>
        <p>Integração React com WordPress Headless</p>
      </header>

      <main className="app-main">
        <SearchBar />
        
        <div className="content-grid">
          <div className="main-content">
            <PostList />
          </div>
          
          <aside className="sidebar">
            <CategoryList />
          </aside>
        </div>
      </main>

      <footer className="app-footer">
        <p>
          Estrutura básica para integração com WordPress REST API
        </p>
      </footer>
    </div>
  )
}

export default App