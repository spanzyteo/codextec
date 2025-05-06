import { FiFacebook } from 'react-icons/fi'
import { BsTwitterX } from 'react-icons/bs'
import { FiLinkedin } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { MdMenu } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { closeSidebar, openSidebar } from '../store/sidebarSlice'
import { useAppSelector } from '../store/hooks'
import { FaXmark } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const sidebar = useAppSelector((state) => state.sidebar.sidebarOPen)
  const dispatch = useDispatch()
  const location = useLocation()

  const handleOpenSidebar = () => {
    dispatch(openSidebar())
  }

  const handleCloseSidebar = () => {
    dispatch(closeSidebar())
  }

  const navLinkClass = (path: string) =>
    location.pathname === path
      ? 'text-[#0f4bb9]'
      : 'text-gray-800 hover:text-[#0f4bb9]'

  return (
    <div className="flex fixed top-0 left-0 right-0 z-10 items-center justify-between h-[70px] md:px-10 px-5 bg-[#FAFAFA]">
      <img src="/logo.svg" alt="logo" className="w-[130px] object-cover" />
      <div className="hidden lg:flex items-center gap-8 font-semibold text-lg">
        <Link to="/" className={navLinkClass('/')}>
          Home
        </Link>
        <Link to="/about" className={navLinkClass('/about')}>
          About Us
        </Link>
        <Link to="/services" className={navLinkClass('/services')}>
          Our Services
        </Link>
        <Link to="/portfolio" className={navLinkClass('/portfolio')}>
          Our Portfolio
        </Link>
        <Link to="/contact" className={navLinkClass('/contact')}>
          Contact Us
        </Link>
      </div>
      <div className="hidden lg:flex items-center gap-6 font-semibold text-lg">
        <FiFacebook className="w-[17px] h-[17px]" />
        <BsTwitterX className="w-[17px] h-[17px]" />
        <FiLinkedin className="w-[17px] h-[17px]" />
        <BsInstagram className="w-[17px] h-[17px]" />
      </div>
      {sidebar ? (
        <div className="block lg:hidden">
          <FaXmark
            className="h-[30px] w-[30px] cursor-pointer"
            onClick={handleCloseSidebar}
          />
        </div>
      ) : (
        <div className="block lg:hidden">
          <MdMenu
            className="h-[30px] w-[30px] cursor-pointer"
            onClick={handleOpenSidebar}
          />
        </div>
      )}
    </div>
  )
}

export default Navbar
