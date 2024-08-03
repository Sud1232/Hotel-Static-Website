import cal from "../../assets/images/cal.png"
import { FaChevronCircleDown } from "react-icons/fa";
import background from "../../assets/images/Mask Group.png"
import { Link } from "react-router-dom"
import bedroom from "../../assets/images/bedroom.png"
import beach from "../../assets/images/beach.png"
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../constant/Footer/Footer";
function Home() {
  return (
    <>
      <div className="xsm:w-[1271px] xsm:h-screen xsm:bg-cover xsm:bg-center xl:relative xl:w-full xl:h-[95vh] xl:bg-cover xl:bg-center" style={{ backgroundImage: `url(${background})` }}>
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
      <div className="xl:w-auto xl:text-center xsm:p-6 xsm:w-[1250px] xsm:text-3xl xsm:text-center xl:text-lg xl:p-12  text-[#14274A] stroke-[#14274A] xl:font-medium">
        <p>All our room types are including complementary breakfast</p>
      </div>
      <div className="xsm:justify-between xsm:flex xsm:flex-col-reverse xsm:w-[1250px] xl:w-full xl:p-6 xl:px-24 xl:flex xl:flex-row xl:justify-between xsm:items-center">
        <div className="xsm:justify-center xsm:p-10 xsm:flex xsm:w-[90%] xsm:flex-col xl:w-1/2 xl:flex xl:border-l-2 border-[#14274A] xl:p-10">
          <h1 className="font-[adobe-garabond-pro] font-bold text-[#14274A] xl:text-left xl:text-2xl xsm:text-7xl xsm:text-center">Luxury redefined</h1> <br />
          <p className="xl:text-sm xl:text-left xsm:text-4xl xsm:text-center font-[montserrat] text-[#14274A]">Our rooms are designed to transport <br />
            you into an environment made for leisure. <br />
            Take your mind off the day-to-day of home <br />
            life and find a private paradise for yourself.</p>
          <button className="bg-[#E0B973] xl:my-4 text-white font-semibold font-[Montserrat] rounded-md xl:w-30 xl:p-2 xl:m-0 xsm:p-4 xl:text-sm xsm:text-2xl xsm:w-[150px] xsm:m-auto xsm:my-5">EXPLORE</button>
        </div>
        <div className="xsm:flex xsm:justify-center xsm:items-center xsm:w-[full] xl:w-1/2 xl:flex xl:flex-row xl:items-center">
          <img src={bedroom} className="xsm:w-[1000px] xsm:h-full xl:w-[580px] xl:h-80" />
        </div>
      </div>
      <div className="xsm:justify-between xsm:flex xsm:flex-col-reverse xsm:w-[1250px] xl:w-full xl:p-6 xl:px-24 xl:flex xl:flex-row xl:justify-between xsm:items-center">
        <div className="xsm:justify-center xsm:p-10 xsm:flex xsm:w-[90%] xsm:flex-col xl:w-1/2 xl:flex xl:border-l-2 border-[#14274A] xl:p-10">
          <h1 className="font-[adobe-garabond-pro] font-bold text-[#14274A] xl:text-left xl:text-2xl xsm:text-7xl xsm:text-center">Leave your worries in the sand</h1> <br />
          <p className="xl:text-sm xl:text-left xsm:text-4xl xsm:text-center font-[montserrat] text-[#14274A]">We love life at the beach. Being close <br />
            to the ocean with access to endless sandy <br />
            beach ensures a relaxed state of mind. It <br />
            seems like time stands still watching the <br />
            ocean. </p>
          <button className="bg-[#E0B973] xl:my-4 text-white font-semibold font-[Montserrat] rounded-md xl:w-30 xl:p-2 xl:m-0 xsm:p-4 xl:text-sm xsm:text-2xl xsm:w-[150px] xsm:m-auto xsm:my-5">EXPLORE</button>
        </div>
        <div className="xsm:flex xsm:justify-center xsm:items-center xsm:w-[full] xl:w-1/2 xl:flex xl:flex-row xl:items-center">
          <img src={beach} className="xsm:w-[1000px] xsm:h-full xl:w-[580px] xl:h-80" />
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home