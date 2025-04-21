import { useAppSelector } from "../store/hooks"

const Sidebar = () => {
  const sidebar = useAppSelector((state) => state.sidebar.sidebarOPen)
  return (
    <>
      {sidebar && (
        <div className="fixed z-20 top-0 left-0 bottom-0 bg-white w-[300px] flex lg:hidden flex-col px-3 gap-3 text-[18px] pt-3 text-gray-700">
          <h1>Home</h1>
          <div className="w-full border-t border-t-gray-200"></div>
          <h1>About Us</h1>
          <div className="w-full border-t border-t-gray-200"></div>
          <h1>Services</h1>
          <div className="w-full border-t border-t-gray-200"></div>
          <h1>Contact Us</h1>
        </div>
      )}
    </>
  )
}

export default Sidebar