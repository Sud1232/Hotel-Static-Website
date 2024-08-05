import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

function Testimonials() {
  return (
    <>
      <div className="text-[#14274A] text-center xl:p-16 xsm:p-7 xsm:space-x-3 xsm:my-10 xsm:space-y-1 xl:space-x-3 xl:space-y-1 xsm:text-3xl xl:w-auto xl:my-auto xsm:w-[1271px]">
        <h1 className="xsm:text-7xl xl:text-3xl font-bold font-[montserrat]">Testimonials</h1>
        <p className="font-[montserrat] xl:text-2xl xsm:text-5xl font-semibold p-2">&quot;Calm, Serene, Retro – What a way to relax and enjoy&quot;</p>
        <p className="font-[montserrat] font-medium xsm:text-4xl xl:text-2xl"> Mr. and Mrs. Baxter, UK</p>
        <button className="bg-[#E0B973] text-white rounded-md xsm:w-20 xsm:h-20 xsm:px-0 xl:h-10 xl:w-10 xl:px-2.5 "><IoIosArrowBack className="xsm:w-20 xsm:h-20 xl:h-5 xl:w-5"></IoIosArrowBack></button>
        <button className="bg-[#E0B973] text-white rounded-md xsm:w-20 xsm:h-20 xsm:px-0 xl:h-10 xl:px-2.5 xl:w-10"><IoIosArrowForward className="xsm:w-20 xsm:h-20 xl:h-5 xl:w-5"></IoIosArrowForward></button>
      </div>
    </>
  )
}

export default Testimonials