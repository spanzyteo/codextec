import { useEffect, useRef, useState } from 'react'
import { reviews } from '../../utils/reviews'
import { motion } from 'framer-motion'
import { BiSolidQuoteLeft } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa6'

const Testimonials = () => {
  const [itemsToShow, setItemsToShow] = useState(3)
  const [startIndex, setStartIndex] = useState(0)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const gap = 16

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsSmallScreen(width < 768)

      if (width >= 1024) {
        setItemsToShow(3)
      } else if (width >= 768) {
        setItemsToShow(1)
      } else {
        setItemsToShow(1)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const maxIndex = reviews.length - itemsToShow
  const itemWidth = containerRef.current
    ? (containerRef.current.offsetWidth - (itemsToShow - 1) * gap) / itemsToShow
    : 0

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [maxIndex])

  const handleScrollButton = (index: number) => {
    setStartIndex(index)
  }

  return (
    <div className="flex flex-col py-[90px] mx-auto px-5 md:px-20">
      <h2 className="text-center text-[14px] leading-[26px] text-[#0F4BB9] font-medium">
        OUR TESTIMONIAL
      </h2>
      <h1 className="font-bold text-[28px] text-center mt-2">
        What Clients Say?
      </h1>

      {/* Project Container */}
      <div
        ref={containerRef}
        className="overflow-hidden w-full lg:w-full flex mt-16 mx-auto "
      >
        <motion.div
          className="flex flex-nowrap"
          animate={{ x: `-${startIndex * (itemWidth + gap)}px` }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ width: reviews.length * (itemWidth + gap) }}
        >
          {reviews.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 aspect-[4/3] relative cursor-pointer group"
              style={{
                width: `${itemWidth}px`,
                marginRight: index !== reviews.length - 1 ? `${gap}px` : '0px',
              }}
            >
              <div className="bg-[#FAFAFA] flex flex-col h-full min-h-[320px] py-6 relative">
                <div className="flex flex-col gap-6 p-[25px] h-full">
                  <h1 className="font-semibold text-[24px]">{item.name}</h1>
                  <p className="text-[#666666]">{item.review}</p>
                </div>
                <div className="flex items-center gap-3 absolute bottom-2 left-7">
                  <BiSolidQuoteLeft className="text-[#0F4BB9] h-[40px] w-[40px]" />
                  <div className="flex items-center gap-1">
                    <FaStar className="text-[#e3a573]" />
                    <FaStar className="text-[#e3a573]" />
                    <FaStar className="text-[#e3a573]" />
                    <FaStar className="text-[#e3a573]" />
                    <FaStar className="text-[#e3a573]" />
                  </div>
                  <p className="text-[#666666] text-[11px] whitespace-nowrap">
                    (5 reviews)
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Buttons for Small Screens */}
      {isSmallScreen && (
        <div className="flex justify-center gap-2 mt-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleScrollButton(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              title={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                i === startIndex ? 'bg-[#0F4BB9]' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Testimonials
