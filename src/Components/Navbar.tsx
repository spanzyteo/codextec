import { FiFacebook } from 'react-icons/fi'
import { BsTwitterX } from 'react-icons/bs'
import { FiLinkedin } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { MdMenu } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { closeSidebar, openSidebar } from '../store/sidebarSlice'
import { useAppSelector } from '../store/hooks'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const sidebar = useAppSelector((state) => state.sidebar.sidebarOPen)
  const dispatch = useDispatch()

  const handleOpenSidebar = () => {
    dispatch(openSidebar())
  }

  const handleCloseSidebar = () => {
    dispatch(closeSidebar())
  }

  return (
    <div className="flex fixed top-0 left-0 right-0 z-10 items-center justify-between h-[70px] md:px-10 px-5 bg-[#FAFAFA]">
      {/* <div className="w-[70px] h-[80px]"> */}
      <img
        src="/logo.svg"
        alt="logo"
        className="w-[130px] object-cover"
      />
      {/* </div> */}
      <div className="hidden lg:flex items-center gap-4 font-semibold text-lg">
        <h1>Home</h1>
        <h1>About Us</h1>
        <h1>Services</h1>
        <h1>Contact Us</h1>
      </div>
      <div className="hidden lg:flex items-center gap-6 font-semibold text-lg">
        <FiFacebook className="w-[20px] h-[20px]" />
        <BsTwitterX className="w-[20px] h-[20px]" />
        <FiLinkedin className="w-[20px] h-[20px]" />
        <BsInstagram className="w-[20px] h-[20px]" />
      </div>
      <div className="hidden xl:flex items-center gap-4 font-semibold">
        <p>codextec93@gmail.com</p>
        <p>/</p>
        <p>+2348134662374</p>
      </div>
      {sidebar ? (
        <div className="block lg:hidden">
          <FaXmark
            className="h-[30px] w-[30px] cursor-pointer"
            onClick={() => handleCloseSidebar()}
          />
        </div>
      ) : (
        <div className="block lg:hidden">
          <MdMenu
            className="h-[30px] w-[30px] cursor-pointer"
            onClick={() => handleOpenSidebar()}
          />
        </div>
      )}
    </div>
  )
}

export default Navbar
