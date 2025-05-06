import { Link } from "react-router-dom"
import { portfolio } from "../../utils/ourPortfolio"
import { FaLongArrowAltRight } from "react-icons/fa";

const OurPortfolio = () => {
  return (
    <div className="flex flex-col py-[90px] mx-auto px-5 md:px-20">
      <h2 className="text-center text-[14px] leading-[26px] text-[#0F4BB9] font-medium">
        OUR PORTFOLIO
      </h2>
      <h1 className="font-bold text-[28px] text-center mt-2">
        Our Latest Case Studies
      </h1>
      <div className="w-full flex flex-col gap-10 mt-16">
        {portfolio.map((item) => (
          <>
            <div className="w-full border-t border-t-[#e5e5e5]"></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-col md:flex-row md:w-[45%] justify-between md:items-center gap-1">
                <h1 className="font-semibold text-[24px]">{item.name}</h1>
                <p className="uppercase text-[#666666] text-[14px]">
                  {item.technology}
                </p>
              </div>
              <Link
                to={`${item.detail}`}
                target="_blank"
                className="flex items-center justify-center gap-2 bg-gray-100 h-[50px] w-[130px] rounded-4xl hover:bg-[#0f4bb9] group transition-all duration-500 ease-in-out"
              >
                <FaLongArrowAltRight className="text-[#666666] group-hover:text-white" />
                <p className="text-[#666666] text-[14px] font-semibold group-hover:text-white">
                  View Detail
                </p>
              </Link>
            </div>
          </>
        ))}
      </div>
      <Link
        to={'/portfolio'}
        className="flex items-center justify-center gap-2 hover:bg-gray-100 h-[60px] w-[150px] rounded-4xl bg-[#0f4bb9] group transition-all duration-500 ease-in-out mx-auto mt-20"
      >
        <FaLongArrowAltRight className="text-white group-hover:text-black" />
        <p className="text-white text-[14px] font-semibold group-hover:text-black">
          View All
        </p>
      </Link>
    </div>
  )
}

export default OurPortfolio