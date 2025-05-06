import AboutSection from '../Components/Home/AboutSection'
import JoinUs from '../Components/Home/JoinUs'
import ServiceSection from '../Components/Home/ServiceSection'
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Codextec - Web & Software Development in Nigeria</title>
        <meta
          name="description"
          content="Explore Codextec's range of services, including web development, custom software solutions, mobile app development, and digital marketing tailored for Nigerian businesses."
        />
        <meta
          name="keywords"
          content="services, web development Nigeria, software solutions, mobile app development, digital marketing Nigeria, Codextec services"
        />
        <meta name="author" content="Codextec" />
        <meta property="og:title" content="Our Services | Codextec - Web & Software Development in Nigeria" />
        <meta
          property="og:description"
          content="Offering web development, custom software solutions, mobile app development, and digital marketing tailored for Nigerian businesses."
        />
        <meta property="og:url" content="https://codextec.vercel.app/services" />
        <meta property="og:type" content="website" />
      </Helmet>
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
    </>
  )
}

export default Services
