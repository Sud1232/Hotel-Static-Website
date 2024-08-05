import background2 from "../../assets/images/background2.png"
import { Link } from "react-router-dom"
import { FaChevronCircleDown } from "react-icons/fa"
import cal from "../../assets/images/cal.png"
import gym from "../../assets/images/gym.png"
import Footer from "../constant/Footer/Footer"
import Testimonials from "../Testimonials/Testimonials"
import bar from "../../assets/images/bar.png"
import spa from "../../assets/images/spa.png"
import swim from "../../assets/images/swim.png"
import restaurant from "../../assets/images/hotel.png"
import laundry from "../../assets/images/laundry.png"
function Facilities() {
  return (
    <>
      <div className="relative xsm:w-[1271px] xsm:h-screen xl:w-full xl:h-[96vh]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${background2})` }}></div>
        <div className="absolute inset-0 bg-[#14274A] opacity-50"></div>
        <div className="relative xl:w-auto xsm:w-[60%] xsm:px-20 xl:px-36 xsm:flex xsm:justify-between xl:flex xl:justify-between z-10">
          <div className="xsm:p-4 xsm:flex xsm:flex-col xsm:rounded-b-3xl xl:flex xl:flex-col text-[#14274A] bg-[#E0B973] xl:p-6 xl:text-3xl xl:rounded-b-3xl justify-center">
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
        <div className="relative xl:w-[auto] xl:flex text-white xl:p-1 xl:px-16 font-[adobe-garamond-pro] z-10">
          <p className="xsm:p-20 xsm:text-3xl xl:text-3xl font-sans xl:tracking-widest">WELCOME TO <br />
            <span className="xsm:text-6xl xl:text-8xl font-[adobe-garamond-pro] font-semibold tracking-[7%]">LUXURY</span><br /> <p className="xl:text-4xl xl:tracking-[0.5em] xl:font-[adobe-garamond-pro] xsm:tracking-normal xl:font-bold">HOTELS</p>
            <span className="xl:text-2xl xsm:font-sans xl:tracking-normal">Book your stay and enjoy Luxury <br /> redefined at the most affordable rates.</span>
          </p>
        </div>
        <div className="xsm:flex xsm:flex-row xsm:justify-center xl:flex xl:flex-row xl:justify-center xsm:-mb-0.5">
          <button className="bg-[#E0B973] xsm:w-[180px] xsm:text-xl xsm:gap-1 xsm:flex xsm:p-2 xsm:absolute xsm:bottom-32 xl:w-[130px] font-bold xl:flex xl:items-center xl:absolute xl:bottom-28 xl:gap-1 xl:text-sm text-white xl:p-2 rounded-md">
            <img src={cal} alt="" />BOOK NOW
          </button>
        </div>
        <div className="xsm:mb-5 xsm:flex xsm:flex-col xsm:justify-center xl:flex xl:flex-col xl:justify-center xl:p-8 text-white font-bold">
          <div className="xsm:flex xsm:absolute xsm:justify-center xsm:text-xl xsm:left-96 xsm:right-96  xl:flex xl:justify-center xl:text-xl xl:absolute xl:left-96 xl:right-96 xl:bottom-10 xsm:bottom-10">
            <p>Scroll</p>
          </div>
          <div className="xsm:flex xsm:justify-center xsm:absolute xsm:left-96 xsm:right-96 xsm:bottom-1 xl:flex xl:justify-center xl:absolute xl:p-2 xl:left-96 xl:right-96 xl:bottom-1">
            <FaChevronCircleDown className="xsm:text-2xl xl:text-2xl" />
          </div>
        </div>
      </div>

      <div className="xsm:w-[1271px] xsm:text-center xsm:p-10 xl:w-full xl:p-12 xl:text-center xl:px-20 text-[#14274A] stroke-[#14274A] xl:font-medium">
        <h1 className="xl:text-2xl xsm:font-[adobe-garamond-pro] xsm:font-bold xl:font-[adobe-garamond-pro] xl:font-bold xsm:text-5xl">FACILITIES</h1>
        <p className="xsm:text-3xl xl:text-base xsm:pt-7 xl:pt-4 xl:w-full">We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so <br />
          that we can ensure an experience quite unique. Luxury hotels offers the perfect setting with stunning views for leisure <br />
          and our modern luxury resort facilities will help you enjoy the best of all. </p>
      </div>
      <div className="xsm:w-[1271px] xl:w-full xsm:flex xsm:flex-col xsm:justify-center xsm:items-center xsm:space-y-32 xl:flex xl:flex-col xl:justify-center xl:space-y-48 xl:items-center xl:py-10">
        <div className="xl:w-[90%] xl:h-screen xl:bg-cover xl:bg-center xsm:w-[90%] xsm:h-screen xsm:bg-cover xsm:bg-center" style={{ backgroundImage: `url(${gym})` }}>
          <div className="xsm:flex xsm:justify-center xsm:items-center xl:h-auto xl:flex xl:justify-center xl:items-center">
            <p className="text-[#14274A] bg-white font-bold xsm:mt-[51%] xsm:text-center xsm:w-[30%] xsm:text-3xl xl:text-center xl:mt-[48.6%] xl:pl-auto xl:w-[30%] xl:text-2xl">THE GYM </p>
          </div>
        </div>
        <div className="xl:w-[90%] xl:h-screen xl:bg-cover xl:bg-center xsm:w-[90%] xsm:h-screen xsm:bg-cover xsm:bg-center" style={{ backgroundImage: `url(${bar})` }}>
          <div className="xsm:flex xsm:justify-center xsm:items-center xl:h-auto xl:flex xl:justify-center xl:items-center">
            <p className="text-[#14274A] bg-white font-bold xsm:mt-[51%] xsm:text-center xsm:w-[30%] xsm:text-3xl xl:text-center xl:mt-[48.6%] xl:pl-auto xl:w-[30%] xl:text-2xl">POOLSIDE BAR </p>
          </div>
        </div>
        <div className="xl:w-[90%] xl:h-screen xl:bg-cover xl:bg-center xsm:w-[90%] xsm:h-screen xsm:bg-cover xsm:bg-center" style={{ backgroundImage: `url(${spa})` }}>
          <div className="xsm:flex xsm:justify-center xsm:items-center xl:h-auto xl:flex xl:justify-center xl:items-center">
            <p className="text-[#14274A] bg-white font-bold xsm:mt-[51%] xsm:text-center xsm:w-[30%] xsm:text-3xl xl:text-center xl:mt-[48.6%] xl:pl-auto xl:w-[30%] xl:text-2xl">THE SPA </p>
          </div>
        </div>
        <div className="xl:w-[90%] xl:h-screen xl:bg-cover xl:bg-center xsm:w-[90%] xsm:h-screen xsm:bg-cover xsm:bg-center" style={{ backgroundImage: `url(${swim})` }}>
          <div className="xsm:flex xsm:justify-center xsm:items-center xl:h-auto xl:flex xl:justify-center xl:items-center">
            <p className="text-[#14274A] bg-white font-bold xsm:mt-[51%] xsm:text-center xsm:w-[30%] xsm:text-3xl xl:text-center xl:mt-[48.6%] xl:pl-auto xl:w-[30%] xl:text-2xl">SWIMMING POOL </p>
          </div>
        </div>
        <div className="xl:w-[90%] xl:h-screen xl:bg-cover xl:bg-center xsm:w-[90%] xsm:h-screen xsm:bg-cover xsm:bg-center" style={{ backgroundImage: `url(${restaurant})` }}>
          <div className="xsm:flex xsm:justify-center xsm:items-center xl:h-auto xl:flex xl:justify-center xl:items-center">
            <p className="text-[#14274A] bg-white font-bold xsm:mt-[51%] xsm:text-center xsm:w-[30%] xsm:text-3xl xl:text-center xl:mt-[48.6%] xl:pl-auto xl:w-[30%] xl:text-2xl">RESTAURANT </p>
          </div>
        </div>
        <div className="xl:w-[90%] xl:h-screen xl:bg-cover xl:bg-center xsm:w-[90%] xsm:h-screen xsm:bg-cover xsm:bg-center" style={{ backgroundImage: `url(${laundry})` }}>
          <div className="xsm:flex xsm:justify-center xsm:items-center xl:h-auto xl:flex xl:justify-center xl:items-center">
            <p className="text-[#14274A] bg-white font-bold xsm:mt-[51%] xsm:text-center xsm:w-[30%] xsm:text-3xl xl:text-center xl:mt-[48.6%] xl:pl-auto xl:w-[30%] xl:text-2xl">LAUNDRY </p>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  )
}

export default Facilities