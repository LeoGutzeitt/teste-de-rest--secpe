import Header from './components/Header'
import Footer from './components/Footer'
import PostList from './components/PostList'
import CategoryList from './components/CategoryList'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

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

      <Footer />
    </div>
  )
}

export default App