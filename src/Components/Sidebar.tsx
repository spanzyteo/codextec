import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { motion, AnimatePresence } from 'framer-motion'
import { closeSidebar } from '../store/sidebarSlice'

const Sidebar = () => {
  const sidebar = useAppSelector((state) => state.sidebar.sidebarOPen)
  const dispatch = useAppDispatch()

  const handleCloseSidebar = () => {
    dispatch(closeSidebar())
  }

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [sidebar])
  return (
    <AnimatePresence>
      {sidebar && (
        <>
          {/* Overlay to close sidebar when clicked */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-black z-10 lg:hidden"
            onClick={handleCloseSidebar} // Clicking outside closes the sidebar
          ></motion.div>

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed z-20 top-0 left-0 bottom-0 bg-white w-[300px] flex lg:hidden flex-col px-3 gap-3 text-[18px] pt-3 text-gray-700"
          >
            <h1>Home</h1>
            <div className="w-full border-t border-t-gray-200"></div>
            <h1>About Us</h1>
            <div className="w-full border-t border-t-gray-200"></div>
            <h1>Services</h1>
            <div className="w-full border-t border-t-gray-200"></div>
            <h1>Contact Us</h1>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Sidebar
