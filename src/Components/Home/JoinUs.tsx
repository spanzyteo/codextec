import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const JoinUs = () => {
  return (
    <div className="py-16 relative">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-5 md:px-20 gap-8">
        <div className="flex gap-6 relative">
          <img
            src="/p3.jpg"
            alt="about-img"
            className="xl:w-[491px] lg:w-[286px] md:w-[526px] sm:w-[346px] h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 lg:w-[50%]">
          <h1 className="text-[22px] sm:text-[30px] lg:text-[48px] xl:text-[60px] font-bold leading-[28px] sm:leading-[39px] lg:leading-[72px] max-w-[696px] xl:w-[560px] lg:w-[456px]">
            Why Work With CodexTec?
          </h1>
          <p className="max-w-[560px] text-[14px] text-[#666666]">
            At CodexTec, we don’t just build websites — we craft powerful
            digital experiences that elevate brands. Our team blends creativity,
            innovation, and strategy to deliver solutions that truly make an
            impact.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#0F4BB9] h-[25px] w-[25px]" />
              <p className="lg:text-[18px] text-[14px] lg:leading-[26px] font-normal">
                Tailored solutions designed for your unique business goals
              </p>
            </div>
            <div className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#0F4BB9] h-[25px] w-[25px]" />
              <p className="lg:text-[18px] text-[14px] lg:leading-[26px] font-normal">
                Expert team with a passion for design, development, and results
              </p>
            </div>
            <div className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#0F4BB9] h-[25px] w-[25px]" />
              <p className="lg:text-[18px] text-[14px] lg:leading-[26px] font-normal">
                Timely delivery, transparent communication, and full support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
