import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <>
      <div className="h-[500px] sm:h-[600px] lg:h-[800px] mt-[70px] px-5 lg:px-20 flex flex-col items-center sm:items-start justify-center gap-4 bg-center bg-cover bg-no-repeat bg-[url(/home-bg.jpg)]">
        <h1 className="text-[14px] md:text-[18px] text-white text-center sm:text-left tracking-[5px] leading-[30px]">
          DIGITAL SOLUTIONS THAT TRANSFORM
        </h1>
        <h1 className="text-[22px] sm:text-[38px] md:text-[46px] lg:text-6xl font-bold text-white max-w-[790px] text-center sm:text-start lg:leading-[80px]">
          EMPOWERING BRANDS THROUGH TECHNOLOGY & INNOVATION
        </h1>
        <Link to={'/about'} className="sm:px-[50px] px-[30px] sm:py-[25px] py-[15px] flex items-center gap-2 bg-[#05F2DB] rounded-4xl font-semibold hover:bg-gray-100 transition-all ease-in-out duration-500">
          <FaLongArrowAltRight />
          <p>Read More</p>
        </Link>
      </div>
    </>
  )
}

export default Banner
