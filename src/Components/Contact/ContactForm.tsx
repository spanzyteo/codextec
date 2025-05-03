import { FaLongArrowAltRight } from 'react-icons/fa'

const ContactForm = () => {
  return (
    <div className="w-full bg-[#FAFAFA] p-[50px] flex flex-col">
      <h1 className="text-xl font-bold">Get In Touch</h1>
      <form className="mt-6 flex flex-col gap-8">
        <input
          type="text"
          placeholder="Your Name"
          className="border-b focus:outline-none p-2 border-b-gray-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border-b focus:outline-none p-2 border-b-gray-500"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="border-b focus:outline-none p-2 border-b-gray-500"
        />
        <textarea
          placeholder="Your message"
          className="border-b focus:outline-none p-2 border-b-gray-500"
          rows={3}
        />
        <button className="w-[200px] h-[60px] flex items-center justify-center gap-2 bg-[#0F4BB9] rounded-4xl font-semibold text-white cursor-pointer hover:bg-black transition-all duration-500 ease-in-out">
          <FaLongArrowAltRight />
          <p>Send Message</p>
        </button>
      </form>
    </div>
  )
}

export default ContactForm
