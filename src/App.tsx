import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='relative'>
      <Sidebar />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
