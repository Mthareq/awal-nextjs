import { Routes, Route } from 'react-router-dom'

import './App.css'
  
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Galeri from './pages/galeri'
import Services from './pages/services'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/galeri" element={<Galeri />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  
  )
}

export default App
