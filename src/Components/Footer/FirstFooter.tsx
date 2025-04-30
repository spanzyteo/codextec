import { FiPhoneCall } from 'react-icons/fi'
import { FaPhone } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'

const FirstFooter = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-16 py-20">
        <div className="flex flex-col gap-8">
          <img src="/my-logo.png" alt="" className="p-0 m-0 w-[100px]" />
          <p className="text-[14px] text-[#ffffff80]">
            Pellentesque in commodo elit. Nunc tincidun sapien eget condimentum.
            Vivamus aliquam sollicitudin purus. Quisque sem leo.
          </p>
          <div className="flex gap-3 items-center">
            <FiPhoneCall className="h-[50px] w-[50px] text-white" />
            <div className="flex flex-col gap-">
              <h1 className="font-medium text-[14px] text-[#666666] uppercase leading-[20px]">
                Contact us 24/7
              </h1>
              <h1 className="text-[18px] md:text-[22px] font-medium uppercase leading-[32px] text-[#ffffffb3] whitespace-nowrap">
                +234 (80) 866 700 83
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 xl:ml-16">
          <h1 className="text-[#ffffff] text-[18px] font-normal leading-[23px]">
            Useful Links
          </h1>
          <div className="flex flex-col gap-6 text-[#ffffff80] text-[14px] font-medium leading-[20px]">
            <p>Our Services</p>
            <p>Meet Our Team</p>
            <p>Our Portfolio</p>
            <p>Contact</p>
            <p>Why Choose Us</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-[#ffffff] text-[18px] font-normal leading-[23px]">
            Solutions
          </h1>
          <div className="flex flex-col gap-6 text-[#ffffff80] text-[14px] font-medium leading-[20px]">
            <div className="flex items-start gap-2">
              <FaPhone className="" />
              <div className="flex flex-col gap-2">
                <p>+234 (80) 866 700 83</p>
                <p>+234 (81) 346 623 74</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMail className="h-[18px] w-[18px]" />
              <p>codextec93@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-[#ffffff] text-[18px] font-normal leading-[23px]">
            Instagram
          </h1>
          <div className='grid grid-cols-3 gap-4'>
            <img src="/instagram1.jpg" alt="" />
            <img src="/instagram2.jpg" alt="" />
            <img src="/instagram3.jpg" alt="" />
            <img src="/instagram4.jpg" alt="" />
            <img src="/instagram5.jpg" alt="" />
            <img src="/instagram6.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstFooter
