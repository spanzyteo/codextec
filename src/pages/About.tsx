import AboutSection from '../Components/Home/AboutSection'
import JoinUs from '../Components/Home/JoinUs'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
    <Helmet>
    <title>About Codextec | Innovative Tech Solutions in Nigeria</title>
    <meta
        name="description"
        content="Learn more about Codextec, a leading web development company in Nigeria, dedicated to delivering innovative digital solutions and exceptional services."
      />
      <meta
        name="keywords"
        content="about us, web development company, software solutions, digital marketing, Codextec"
      />
      <meta name="author" content="Codextec" />
      <meta property="og:title" content="Codextec | About Us" />
      <meta
        property="og:description"
        content="Learn more about Codextec, a leading web development company in Nigeria, dedicated to delivering innovative digital solutions and exceptional services."
      />
      <meta property="og:url" content="https://codextec.vercel.app/about" />
      <meta property="og:type" content="website" />
    </Helmet>
    <div className="flex flex-col">
      <div className="h-[350px] sm:h-[400px] lg:h-[515px] mt-[70px] flex flex-col justify-center px-6 lg:px-10 gap-2 bg-[url(/about-bg.jpg)] bg-center bg-cover bg-no-repeat">
        <h1 className="text-white text-md uppercase">
          DIGITAL SOLUTIONS THAT TRANSFORM
        </h1>
        <h1 className="font-bold text-white text-5xl lg:text-6xl">About Us.</h1>
      </div>
      <AboutSection />
      <JoinUs />
    </div>
    </>
  )
}

export default About
