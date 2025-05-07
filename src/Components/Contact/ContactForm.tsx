import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const [status, setStatus] = useState<'success' | 'error' | null>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        process.env.SERVICE_ID!, // Replace with your EmailJS service ID
        process.env.TEMPLATE_ID!, // Replace with your EmailJS template ID
        form.current,
        process.env.PUBLIC_KEY! // Replace with your EmailJS public key
      )
      .then(() => {
        setStatus('success')
        form.current?.reset()
      })
      .catch(() => {
        setStatus('error')
      })

    // Clear status message after a delay
    setTimeout(() => {
      setStatus(null)
    }, 4000)
  }

  return (
    <div className="w-full bg-[#FAFAFA] p-[50px] flex flex-col">
      <h1 className="text-xl font-bold">Get In Touch</h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-6 flex flex-col gap-8"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="border-b focus:outline-none p-2 border-b-gray-500"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="border-b focus:outline-none p-2 border-b-gray-500"
          required
        />
        {/* <input
          type="number"
          name="user_phone"
          placeholder="Phone Number"
          className="border-b focus:outline-none p-2 border-b-gray-500"
          required
        /> */}
        <textarea
          name="message"
          placeholder="Your message"
          className="border-b focus:outline-none p-2 border-b-gray-500"
          rows={3}
          required
        />

        <button
          type="submit"
          className="w-[200px] h-[60px] flex items-center justify-center gap-2 bg-[#0F4BB9] rounded-4xl font-semibold text-white cursor-pointer hover:bg-black transition-all duration-500 ease-in-out"
        >
          <FaLongArrowAltRight />
          <p>Send Message</p>
        </button>
      </form>

      <AnimatePresence>
        {status && (
          <motion.div
            key={status}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-4 p-3 rounded text-white w-fit ${
              status === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {status === 'success'
              ? 'Message sent successfully!'
              : 'Failed to send message. Please try again.'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ContactForm
