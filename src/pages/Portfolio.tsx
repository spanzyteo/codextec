import { portfolio } from "../utils/ourPortfolio"

const Portfolio = () => {
  return (
    <div className="flex flex-col bg-[#FAFAFA]">
      <div className="h-[350px] sm:h-[400px] lg:h-[515px] mt-[70px] flex flex-col justify-center px-6 lg:px-10 gap-2 bg-[url(/portfolio-bg.jpg)] bg-center bg-cover bg-no-repeat">
        <h1 className="text-white text-md uppercase">We are dedicated</h1>
        <h1 className="font-bold text-white text-4xl lg:text-6xl">
          Our Portfolio.
        </h1>
      </div>
      <div className="flex flex-col py-[90px] px-5 md:px-20" >
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
            <div key={item.id} className="relative lg:h-[400px] h-[365px]">
              <img src={item.image} alt="image" />
              <div className="absolute bottom-0  w-full lg:w-[90%] h-[200px] bg-white">

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
