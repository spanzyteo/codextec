import { TfiMouseAlt } from 'react-icons/tfi'
import { IoCloudDownloadOutline } from 'react-icons/io5'

const AboutSection = () => {
  return (
    <div className="py-32 relative">
      <img
        src="/dotted-pic.png"
        alt="dotted-pic"
        className="absolute top-32 left-0"
      />
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-5 md:px-20 lg:ml- gap-8">
        <div className="flex gap-6 relative">
          <img
            src="/left-pic.png"
            alt="left-pic"
            className="w-[70px] h-[410px] hidden xl:block mt-[11.5rem]"
          />
          <img
            src="/about-img.jpg"
            alt="about-img"
            className="xl:w-[391px] lg:w-[286px] md:w-[526px] sm:w-[346px] h-full rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 lg:w-[50%]">
          <h1 className="text-[22px] sm:text-[30px] lg:text-[48px] xl:text-[60px] font-bold leading-[28px] sm:leading-[39px] lg:leading-[72px]  max-w-[696px] xl:w-[560px] lg:w-[456px]">
            That's Why We're List Of Favorites.
          </h1>
          <p className="font-semibold">
            Nullam vel ligula lorem. Phasellus neque Etiam nequeretium
          </p>
          <p className="max-w-[560px] text-[14px] text-[#666666]">
            There are many variations of passage of Lorem Ipsum all item
            available, but the majority have suffered alteration in some form
            injected humour Nullam.
          </p>
          <div className="h-[30px] w-full bg-[#e9ecef] rounded-md">
            <div className="h-full w-[90%] bg-[#05F2DB] rounded-md px-8 flex items-center">
              <p className="font-semibold text-[14px] ">95.00% Work Success</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
            <p className="text-[14px] text-[#666666]">
              Proin lobortis mauris vel dui egestas,non laoreet duolei
              hendrerit.
            </p>
            <p className="text-[14px] text-[#666666]">
              Fusce maximus turpis in magna cursus, vehicula bibendum sem
              placerat.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-28 gap-10">
            <div className="flex flex-row gap-6">
              <div className="bg-[#FAFAFA] rounded-full h-[70px] w-[70px] flex items-center justify-center">
                <TfiMouseAlt className="h-[30px] w-[30px] text-[#05F2DB" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-bold text-lg">IT Solution</h1>
                <div className="text-[#666666] text-[14px]">02 PROJECT</div>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <div className="bg-[#FAFAFA] rounded-full h-[70px] w-[70px] flex items-center justify-center">
                <IoCloudDownloadOutline className="h-[30px] w-[30px] text-[#05F2DB" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-bold text-lg">IT Consultant</h1>
                <div className="text-[#666666] text-[14px]">04 PROJECT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
