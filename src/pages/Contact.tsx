import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import ContactForm from '../Components/Contact/ContactForm'

const Contact = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[350px] sm:h-[400px] lg:h-[515px] mt-[70px] flex flex-col justify-center px-6 lg:px-10 gap-2 bg-[url(/contact-bg.jpg)] bg-center bg-cover bg-no-repeat">
        <h1 className="text-white text-md uppercase">We are dedicated</h1>
        <h1 className="font-bold text-white text-4xl lg:text-6xl">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between  py-[90px] px-5 md:px-20 gap-10">
        <div className="flex flex-col gap-10 lg:w-[70%]">
          <h2 className="text-[14px] leading-[26px] text-[#0F4BB9] font-medium">
            CONTACT US
          </h2>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl leading-[38px] lg:leading-[78px]">
            Our creative design solutions are for people, Contact Us.
          </h1>
          <div className="flex flex-col lg:flex-row xl:gap-28 lg:gap-10 gap-6">
            <div className="flex gap-10 items-center">
              <div className="bg-[#FAFAFA] h-[70px] w-[70px] flex items-center justify-center rounded-full">
                <FiPhoneCall className="h-[30px] w-[30px] text-[#0F4BB9]" />
              </div>
              <div className="flex flex-col gap-">
                <h1 className="font-medium text-[14px] text-[#666666] leading-[20px]">
                  Contact Phone
                </h1>
                <h1 className="text-[18px] font-medium leading-[32px] whitespace-nowrap">
                  +234 (80) 866 700 83
                </h1>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <div className="bg-[#FAFAFA] h-[70px] w-[70px] flex items-center justify-center rounded-full">
                <MdOutlineMail className="h-[30px] w-[30px] text-[#0F4BB9]" />
              </div>
              <div className="flex flex-col gap-">
                <h1 className="font-medium text-[14px] text-[#666666] leading-[20px]">
                  Contact Mail
                </h1>
                <h1 className="text-[18px] font-medium leading-[32px] whitespace-nowrap">
                  codextec93@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
