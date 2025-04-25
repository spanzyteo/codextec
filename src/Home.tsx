import AboutSection from "./Components/Home/AboutSection"
import Banner from "./Components/Home/Banner"
import OurPortfolio from "./Components/Home/OurPortfolio"
import SecondBanner from "./Components/Home/SecondBanner"
import ServiceSection from "./Components/Home/ServiceSection"

const Home = () => {
  return (
    <>
     <Banner />
     <SecondBanner />
     <AboutSection />
     <ServiceSection />
     <OurPortfolio />
    </>
  )
}

export default Home