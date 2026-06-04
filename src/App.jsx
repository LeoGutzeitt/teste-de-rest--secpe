import Header from './components/Header'
import ActivitiesNav from './components/ActivitiesNav'
import NewsBlock from './components/NewsBlock'
import TVSchedule from './components/TVSchedule'
import Footer from './components/Footer'
import PostList from './components/PostList'
import CategoryList from './components/CategoryList'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <ActivitiesNav />
      <NewsBlock />
      <TVSchedule />

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
