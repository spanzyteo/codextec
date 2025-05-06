import { Link } from "react-router-dom"
import { portfolio } from "../utils/ourPortfolio"
import { FaLongArrowAltRight } from "react-icons/fa"

const Portfolio = () => {
  return (
    <div className="flex flex-col bg-[#FAFAFA]">
      <div className="h-[350px] sm:h-[400px] lg:h-[515px] mt-[70px] flex flex-col justify-center px-6 lg:px-10 gap-2 bg-[url(/portfolio-bg.jpg)] bg-center bg-cover bg-no-repeat">
        <h1 className="text-white text-md uppercase">
          DIGITAL SOLUTIONS THAT TRANSFORM
        </h1>
        <h1 className="font-bold text-white text-4xl lg:text-6xl">
          Our Portfolio.
        </h1>
      </div>
      <div className="flex flex-col py-[90px] px-5 md:px-20">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 ">
          <div className="flex flex-col gap-2">
            <h1 className="text- uppercase">Our Case Study</h1>
            <h1 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold max-w-[471px]">
              CodexTec Special Case Study
            </h1>
          </div>
          <div>
            <p className="text-[14px] leading-[26px] max-w-[561px]">
              At CodexTec, we combine industry expertise with innovative
              technology to deliver tailored solutions that drive success. From
              digital transformation to IT consulting, our services are designed
              to meet the unique needs of businesses across every sector.
            </p>
          </div>
        </div>
        <div className="py-[60px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.map((item) => (
            <div
              key={item.id}
              className="relative lg:h-[400px] h-[365px] shadow-md lg:shadow-none"
            >
              <img
                src={item.image}
                alt="image"
                className="h-[300px] object-cover lg:shadow-md w-full"
              />
              <div className="absolute bottom-0 w-full lg:w-[90%] py-[30px] lg:px-[50px] px-[30px] bg-white flex flex-col gap-4 lg:shadow-md">
                <p className="text-[#0F4BB9] uppercase">{item.technology}</p>
                <h1 className="font-bold lg:text-3xl">{item.name}</h1>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
