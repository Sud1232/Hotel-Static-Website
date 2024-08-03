import { FaChevronCircleDown } from "react-icons/fa"
import { Link } from "react-router-dom"
import apartment from "../../assets/images/apartment.png"
import cal from "../../assets/images/cal.png"
import room1 from "../../assets/images/room1.png"
import room2 from "../../assets/images/room2.png"
import room3 from "../../assets/images/room3.png"
import Testimonials from "../Testimonials/Testimonials"
import Footer from "../constant/Footer/Footer"
import { GoPlus } from "react-icons/go";


function Rooms() {
  return (
    <>
      <div className="xsm:w-[1271px] xsm:h-full xsm:bg-cover xsm:bg-center xl:relative xl:w-full xl:h-[95vh] xl:bg-cover xl:bg-center" style={{ backgroundImage: `url(${apartment})` }}>
        <div className="xl:w-auto xsm:w-[60%] xsm:px-20 xl:px-18 xsm:flex xsm:justify-between xl:flex xl:justify-between">
          <div className="xsm:p-4 xsm:flex xsm:flex-col xl:flex xl:flex-col text-[#14274A] bg-[#E0B973] xl:p-6 xl:text-3xl rounded-b-3xl justify-center">
            <p className="xsm:p-2 xsm:text-6xl xl:text-2xl font-bold font-[adobe-garamond-pro]">LUXURY</p>
            <p className="xsm:text-3xl xl:text-sm font-[adobe-garamond-pro] xsm:px-20 xl:px-7">HOTELS</p>
          </div>
          <div className="xl:w-auto xsm:w-[20%] xsm:flex xsm:items-center xl:flex xl:p-4 xl:items-center xl:justify-end xl:mx-24">
            <ul className="xsm:flex xsm:gap-10 xl:flex xl:space-x-12 xl:text-base text-white font-semibold xsm:py-2 xsm:text-3xl">
              <li className="hover:underline"><Link to="/">Home</Link></li>
              <li className="hover:underline"><Link to="/facilities">Facilities</Link></li>
              <li className="hover:underline"><Link to="/Rooms">Rooms</Link></li>
              <li className="hover:underline"><Link to="/contact">Contact-us</Link></li>
            </ul>
          </div>
        </div>
        <div className="xl:w-[auto] xl:flex text-white xl:p-22 xl:px-22 font-[adobe-garamond-pro]">
          <p className="xsm:p-20 xsm:text-3xl xl:text-2xl font-[montserrat]">WELCOME TO <br /><p className="xsm:text-6xl xl:text-7xl font-[adobe-garabond-pro] font-semibold">LUXURY</p> HOTELS <br className="font-[montserrat]" />Book your stay and enjoy Luxury <br /> redefined at the most affordable rates.</p>
        </div>
        <div className="xsm:flex xsm:flex-row xsm:justify-center xl:flex xl:flex-row xl:justify-center xsm:-mb-0.5">
          <button className="bg-[#E0B973] xsm:w-[180px] xsm:text-xl xsm:gap-1 xsm:flex  xsm:p-2 xl:w-[130px] font-bold xl:flex xl:items-center xl:gap-1 xl:text-sm text-white xl:p-2 rounded-md"><img src={cal} alt="" />BOOK NOW</button>
        </div>
        <div className="xsm:mb-5 xsm:flex xsm:flex-col xsm:justify-center xl:flex xl:flex-col xl:justify-center xl:p-8 text-white font-bold">
          <div className="xsm:flex xsm:justify-center xsm:text-xl xl:flex xl:justify-center xl:text-xl">
            <p>Scroll</p>
          </div>
          <div className="xsm:flex xsm:justify-center xl:flex xl:justify-center xl:p-2">
            <FaChevronCircleDown className="xsm:text-2xl xl:text-2xl"></FaChevronCircleDown>
          </div>
        </div>
      </div>

      <div className="xsm:w-[1271px] xsm:text-center xsm:p-10 xl:w-full xl:p-12 xl:text-center xl:px-20 text-[#14274A] stroke-[#14274A] xl:font-medium">
        <h1 className="xl:text-2xl xsm:font-[adobe-garamond-pro] xsm:font-bold xl:font-[adobe-garamond-pro] xl:font-bold xsm:text-5xl">ROOMS AND RATES</h1>
        <p className="xsm:text-3xl xl:text-base xsm:pt-7 xl:pt-4 xl:w-full">Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes,<br />
          comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented <br />
          by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>
      </div>
      <div className="xl:flex xl:flex-col xl:items-center xl:space-y-12 xl:w-full xl:justify-center xsm:w-[1271px] xsm:flex xsm:flex-col xsm:justify-center xsm:items-center xsm:space-y-14">
        <div className="xl:w-[90%] xsm:w-[90%] border-2 border-[#14274A] rounded-lg">
          <img src={room1} alt="" />
          <p className="xsm:text-center xsm:p-4 xl:p-4 xl:text-center bg-[#14274A] text-white font-bold font-[montserrat] text-3xl">SINGLE ROOM</p>
          <div className="xsm:flex xsm:items-center xsm:p-16 xsm:justify-between xl:flex xl:items-center xl:justify-between xl:p-16">
            <p className="xsm:flex xsm:items-center xsm:gap-x-3 xsm:text-3xl xl:flex xl:text-base xl:items-center font-bold font-[montserrat] text-[#14274A] xl:gap-x-3"><GoPlus className="bg-[#E0B973] text-white rounded-full xsm:w-16 xsm:h-16 xl:w-10 xl:h-10"></GoPlus>VIEW ROOM DETAILS </p>
            <button className="bg-[#E0B973] text-white xsm:p-5 xsm:text-3xl xl:p-5 xl:px-16 xl:text-2xl xl:flex xl:w-[288px] xl:h-[78px] rounded-md font-bold font-[montserrat]">$147 Avg/night</button>
          </div>
        </div>
        <div className="xl:w-[90%] xsm:w-[90%] border-2 border-[#14274A] rounded-lg">
          <img src={room2} alt="" />
          <p className="xsm:text-center xsm:p-4 xl:p-4 xl:text-center bg-[#14274A] text-white font-bold font-[montserrat] text-3xl">DOUBLE ROOM</p>
          <div className="xsm:flex xsm:items-center xsm:p-16 xsm:justify-between xl:flex xl:items-center xl:justify-between xl:p-16">
            <p className="xsm:flex xsm:items-center xsm:gap-x-3 xsm:text-3xl xl:flex xl:text-base xl:items-center font-bold font-[montserrat] text-[#14274A] xl:gap-x-3"><GoPlus className="bg-[#E0B973] text-white rounded-full xsm:w-16 xsm:h-16 xl:w-10 xl:h-10"></GoPlus>VIEW ROOM DETAILS </p>
            <button className="bg-[#E0B973] text-white xsm:p-5 xsm:text-3xl xl:p-5 xl:px-16 xl:text-2xl xl:flex xl:w-[288px] xl:h-[78px] rounded-md font-bold font-[montserrat]">$155 Avg/night</button>
          </div>
        </div>
        <div className="xl:w-[90%] xsm:w-[90%] border-2 border-[#14274A] rounded-lg">
          <img src={room3} alt="" />
          <p className="xsm:text-center xsm:p-4 xl:p-4 xl:text-center bg-[#14274A] text-white font-bold font-[montserrat] text-3xl">TWIN ROOM</p>
          <div className="xsm:flex xsm:items-center xsm:p-16 xsm:justify-between xl:flex xl:items-center xl:justify-between xl:p-16">
            <p className="xsm:flex xsm:items-center xsm:gap-x-3 xsm:text-3xl xl:flex xl:text-base xl:items-center font-bold font-[montserrat] text-[#14274A] xl:gap-x-3"><GoPlus className="bg-[#E0B973] text-white rounded-full xsm:w-16 xsm:h-16 xl:w-10 xl:h-10"></GoPlus>VIEW ROOM DETAILS </p>
            <button className="bg-[#E0B973] text-white xsm:p-5 xsm:text-3xl xl:p-5 xl:px-16 xl:text-2xl xl:flex xl:w-[288px] xl:h-[78px] rounded-md font-bold font-[montserrat]">$155 Avg/night</button>
          </div>
        </div>

      </div>
      <Testimonials />
      <Footer />
    </>
  )
}

export default Rooms