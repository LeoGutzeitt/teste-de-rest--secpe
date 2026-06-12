import Header from '../components/Header'
import ActivitiesNav from '../components/ActivitiesNav'
import NewsBlock from '../components/NewsBlock'
import TVSchedule from '../components/TVSchedule'
import CultureEvents from '../components/CultureEvents'
import CultureGallery from '../components/CultureGallery'
import RadioPlayer from '../components/RadioPlayer'
import PostList from '../components/PostList'
import CategoryList from '../components/CategoryList'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <ActivitiesNav />
      <NewsBlock />
      <TVSchedule />
      <CultureEvents />
      <CultureGallery />
      <RadioPlayer />

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
    </>
  )
}

export default Home