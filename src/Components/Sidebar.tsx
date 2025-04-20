import { useAppSelector } from "../store/hooks"

const Sidebar = () => {
  const sidebar = useAppSelector((state) => state.sidebar.sidebarOPen)
  return (
    <>
    {sidebar && (
      <div className="absolute top-0 left-0 bottom-0 bg-black w-[300px]">Sidebar</div>
    )}
    </>
  )
}

export default Sidebar