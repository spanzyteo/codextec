import AboutSection from "../Components/Home/AboutSection"
import Banner from "../Components/Home/Banner"
import JoinUs from "../Components/Home/JoinUs"
import OurPortfolio from "../Components/Home/OurPortfolio"
import SecondBanner from "../Components/Home/SecondBanner"
import ServiceSection from "../Components/Home/ServiceSection"
import TeamMembers from "../Components/Home/TeamMembers"
import Testimonials from "../Components/Home/Testimonials"
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Codextec | Web Development Company in Nigeria</title>
        <meta
          name="description"
          content="Codextec is a leading web development company in Nigeria, offering custom software solutions, mobile app development, and digital marketing services to help businesses thrive online."
        />
        <meta
          name="keywords"
          content="web development, software development Nigeria, mobile app development, digital marketing Nigeria, custom software solutions, Codextec"
        />
        <meta name="author" content="Codextec" />
        <meta property="og:title" content="Codextec | Web Development Company in Nigeria" />
        <meta
          property="og:description"
          content="Offering custom software solutions, mobile app development, and digital marketing services to help businesses thrive online."
        />
        <meta property="og:url" content="https://codextec.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
     <Banner />
     <SecondBanner />
     <AboutSection />
     <ServiceSection />
     <OurPortfolio />
     <TeamMembers />
     <Testimonials />
     <JoinUs />
    </>
  )
}

export default Home