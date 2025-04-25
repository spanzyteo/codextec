import { workService } from '../../utils/workService'

const ServiceSection = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/wallpaper.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex flex-col py-[90px] mx-auto px-5 md:px-20"
    >
      <h2 className="text-center text-[14px] leading-[26px] text-[#0F4BB9] font-medium">
        WHY CHOOSE US
      </h2>
      <h1 className="font-bold text-[28px] text-center mt-2">
        Our Work Services
      </h1>
      <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {workService.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="flex">
              <div className="bg-white p-4 gap-4 shadow-md w-full flex flex-col h-full">
                <div className="flex flex-col p-6 gap-8 hover:bg-[#0F4BB9] group cursor-pointer transition-all duration-500 ease-in-out h-full">
                  <Icon className="h-[50px] w-[50px] text-[#0f4bb9] group-hover:text-white" />
                  <h1 className="font-bold text-[20px] text-[#202122] group-hover:text-white">
                    {item.title}
                  </h1>
                  <h1 className="text-[14px] text-[#666666] group-hover:text-white">
                    {item.description}
                  </h1>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ServiceSection
