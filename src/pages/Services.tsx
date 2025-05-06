import AboutSection from '../Components/Home/AboutSection'
import JoinUs from '../Components/Home/JoinUs'
import ServiceSection from '../Components/Home/ServiceSection'

const Services = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[350px] sm:h-[400px] lg:h-[515px] mt-[70px] flex flex-col justify-center px-6 lg:px-10 gap-2 bg-[url(/about-bg.jpg)] bg-center bg-cover bg-no-repeat">
        <h1 className="text-white text-md uppercase">
          DIGITAL SOLUTIONS THAT TRANSFORM
        </h1>
        <h1 className="font-bold text-white text-5xl lg:text-6xl">
          Our Services.
        </h1>
      </div>
      <ServiceSection />
      <AboutSection />
      <JoinUs />
    </div>
  )
}

export default Services
