import { useEffect, useRef, useState } from "react"
import { team } from "../../utils/teamMembers"
import { motion, useAnimation } from 'framer-motion'

const TeamMembers = () => {
  const containerRef = useRef<HTMLDivElement>(null)
    const [itemWidth, setItemWidth] = useState(0)
    const [itemsToShow, setItemsToShow] = useState(3)
    const gap = 24
    const duplicatedTeam = [...team, ...team] // duplicated
  
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth
        if (width >= 1024) {
          setItemsToShow(3)
        } else if (width >= 768) {
          setItemsToShow(2)
        } else {
          setItemsToShow(1)
        }
  
        if (containerRef.current) {
          const totalWidth = containerRef.current.offsetWidth
          const calculatedItemWidth =
            (totalWidth - (itemsToShow - 1) * gap) / itemsToShow
          setItemWidth(calculatedItemWidth)
        }
      }
  
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [itemsToShow])
  
    const totalScrollWidth = duplicatedTeam.length * (itemWidth + gap)
  return (
    <div style={{
      backgroundImage: 'url(/bg-team.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    className="flex flex-col py-[90px] mx-auto px-5 md:px-20">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-white uppercase">Team Members</h1>
          <h1 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold max-w-[471px] text-white">
            CodexTec Special Team Members
          </h1>
        </div>
        <div>
          <p className="text-white text-[14px] leading-[26px] max-w-[561px]">
          Behind every great project is a passionate team. At CodexTec, our experts combine creativity, strategy, and technical skill to bring your digital vision to life — with precision, care, and purpose.
          </p>
        </div>
      </div>

       {/* Infinite Scroll Section */}
       <div
        ref={containerRef}
        className="overflow-hidden w-full flex mt-16 mx-auto"
      >
        <motion.div
          className="flex flex-nowrap"
          style={{ width: totalScrollWidth }}
          animate={{ x: [`0px`, `-${totalScrollWidth / 2}px`] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20,
          }}
        >
          {duplicatedTeam.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 aspect-[4/3] relative cursor-pointer group"
              style={{
                width: `${itemWidth}px`,
                marginRight:
                  index !== duplicatedTeam.length - 1 ? `${gap}px` : '0px',
              }}
            >
              <img
                src={item.image}
                alt={`services ${item.id}`}
                className="object-cover w-full h-full"
              />
              <div className="flex flex-col gap-4 mt-6">
                <p className="text-white">{item.position}</p>
                <p className="text-white font-bold text-[24px]">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default TeamMembers