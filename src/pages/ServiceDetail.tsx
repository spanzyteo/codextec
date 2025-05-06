import { useParams } from 'react-router-dom'
import { workService } from '../utils/workService'
import JoinUs from '../Components/Home/JoinUs'
import { Helmet } from 'react-helmet';

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = workService.find((s) => s.slug === slug)

  if (!service) return <div>Service not found</div>

  // const { icon: Icon, title, longDescription } = service

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.longDescription,
    "provider": {
      "@type": "Organization",
      "name": "Codextec",
      "url": "https://codextec.vercel.app/",
      "logo": "/logo.svg" // Replace with actual logo URL
    },
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "serviceType": service.title,
    "url": window.location.href
  };
  return (
    <>
    <Helmet>
      <title>{service.title} | Codextec - Web & Software Development in Nigeria</title>
      <meta
        name="description"
        content={service.longDescription.slice(0, 155)}
      />
      <meta
        name="keywords"
        content={`${service.title}, web development, software solutions, mobile app development, digital marketing`}
      />
      <meta name="author" content="Codextec" />
      <meta property="og:title" content={`${service.title} | Codextec - Web & Software Development in Nigeria`} />
      <meta
        property="og:description"
        content={service.longDescription.slice(0, 155)}
      />
      <meta property="og:url" content={`https://codextec.vercel.app/services/${slug}`} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
          {JSON.stringify(structuredData)}
      </script>
    </Helmet>
    <div className="flex flex-col">
      <div className="h-[350px] sm:h-[400px] lg:h-[515px] mt-[70px] flex flex-col justify-center px-6 lg:px-10 gap-2 bg-[url(/about-bg.jpg)] bg-center bg-cover bg-no-repeat">
        <h1 className="font-bold text-white text-4xl lg:text-6xl">
          {service.title}
        </h1>
      </div>
      <div className="py-[90px] px-5 md:px-20">
        <h2 className="text-[14px] leading-[26px] text-[#0F4BB9] font-medium">
          WHY CHOOSE US
        </h2>
        <h1 className="font-bold text-xl lg:text-6xl leading-[28px] lg:leading-[78px] mt-2">
          Our Creative Design Solutions Are For People, Not For Machines. Yet
          Made By People And Machines.
        </h1>
        <p className='mt-8 text-[14px] text-[#666666] leading-[26px]'>{service.longDescription}</p>
        <p className='mt-4 text-[14px] text-[#666666] leading-[26px]'>{service.longDescription2}</p>
      </div>
      <JoinUs />
    </div>
    </>
  )
}

export default ServiceDetail
