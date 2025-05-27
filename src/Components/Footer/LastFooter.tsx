import { SlSocialFacebook } from 'react-icons/sl'
import { BsInstagram } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const LastFooter = () => {
  return (
    <div className="md:mx-20 bg-[#1d152c] flex flex-col items-center py-10 gap-4">
      <div className="flex items-center gap-6 text-[#666666]">
        <Link to={'https://www.facebook.com/share/15QuP5txUu/'} target="_blank">
          <SlSocialFacebook className="w-[25px] h-[25px] cursor-pointer hover:text-white" />
        </Link>
        <Link
          to={'https://www.instagram.com/codextec93?igsh=MWZuMTU0aG5rbzJncw=='}
          target="_blank"
        >
          <BsInstagram className="w-[25px] h-[25px] cursor-pointer hover:text-white" />
        </Link>
        <Link to={'https://wa.me/message/2RLOOWFMCJ6YC1'} target="_blank">
          <FaWhatsapp className="w-[25px] h-[25px] cursor-pointer hover:text-white" />
        </Link>
      </div>
      <p className="text-[#ffffffb3] text-[14px] font-medium">
        © 2025 by <span className="text-[#fff]">CodexTec.</span> All rights
        reserved.
      </p>
    </div>
  )
}

export default LastFooter
