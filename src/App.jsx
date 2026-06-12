import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Noticias from './pages/Noticias'
import SinglePost from './pages/SinglePost'
import Categoria from './pages/Categoria'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticia/:slug" element={<SinglePost />} />
        <Route path="/categoria/:slug" element={<Categoria />} />
      </Routes>
    </div>
  )
}

export default App