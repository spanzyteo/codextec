import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <div className="relative">
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
