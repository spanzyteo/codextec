import FirstFooter from './Footer/FirstFooter'
import LastFooter from './Footer/LastFooter'

const Footer = () => {
  return (
    <div className="bg-[#251a37]">
      <div className="px-5 md:px-20">
        <FirstFooter />
      </div>
      <LastFooter />
    </div>
  )
}

export default Footer
