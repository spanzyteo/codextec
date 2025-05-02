import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Footer from './Components/Footer'
import About from './About'

function App() {
  return (
    <div className='relative'>
      <Sidebar />
      <Navbar />
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      {/* </BrowserRouter> */}
      <Footer />
    </div>
  )
}

export default App
