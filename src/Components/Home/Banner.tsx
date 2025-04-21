import { FaLongArrowAltRight } from "react-icons/fa";


const Banner = () => {
  return (
    <>
      <div
        // bgImage="/home-bg.jpg"
        className="h-[500px] sm:h-[600px] lg:h-[800px] mt-[70px] sm:px-20 flex flex-col items-center sm:items-start justify-center gap-4"
        style={{
          backgroundImage: 'url(/home-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="text-[14px] md:text-[18px] text-white tracking-[5px] leading-[30px]">
          WE ARE DEDICATED
        </h1>
        <h1 className="text-[22px] sm:text-[38px] md:text-[46px] lg:text-[96px] font-bold text-white max-w-[790px] text-center sm:text-start lg:leading-[124px]">
          MAKING IT A PART OF YOUR BUSINESS
        </h1>
        <button className="sm:px-[50px] px-[30px] sm:py-[25px] py-[15px] flex items-center gap-2 bg-[#05F2DB] rounded-4xl font-semibold">
          <FaLongArrowAltRight />
          <p>Read More</p>
        </button>
      </div>
    </>
  )
}

export default Banner
