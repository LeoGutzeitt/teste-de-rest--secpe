import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import CategoryList from '../components/CategoryList'
import PostList from '../components/PostList'

function Noticias() {
  return (
    <>
      <Header />
      
      <main className="app-main">
        <h1 className="page-title">Notícias</h1>
        <SearchBar />
        
        <div className="content-grid">
          <div className="main-content">
            <PostList per_page={12} />
          </div>
          
          <aside className="sidebar">
            <CategoryList />
          </aside>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Noticias