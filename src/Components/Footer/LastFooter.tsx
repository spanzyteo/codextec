import { SlSocialFacebook } from 'react-icons/sl'
import { RiTwitterXFill } from 'react-icons/ri'
import { FiLinkedin } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'

const LastFooter = () => {
  return (
    <div className="md:mx-20 bg-[#1d152c] flex flex-col items-center py-10 gap-4">
      <div className="flex items-center gap-6 text-[#666666]">
        <SlSocialFacebook className="w-[25px] h-[25px] cursor-pointer hover:text-white" />
        <RiTwitterXFill className="w-[25px] h-[25px] cursor-pointer hover:text-white" />
        <FiLinkedin className="w-[25px] h-[25px] cursor-pointer hover:text-white" />
        <BsInstagram className="w-[25px] h-[25px] cursor-pointer hover:text-white" />
      </div>
      <p className="text-[#ffffffb3] text-[14px] font-medium">
        © 2025 by <span className="text-[#fff]">CodexTec.</span> All rights
        reserved.
      </p>
    </div>
  )
}

export default LastFooter
