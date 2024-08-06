import cal from "../../assets/images/cal.png";
import { FaChevronCircleDown } from "react-icons/fa";
import background from "../../assets/images/Mask Group.png";
import { Link } from "react-router-dom";
import bedroom from "../../assets/images/bedroom.png";
import beach from "../../assets/images/beach.png";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../constant/Footer/Footer";

function Home() {
  return (
    <>

      <div className="relative xsm:w-[1271px] xsm:h-screen xl:w-full xl:h-[96vh]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}></div>
        <div className="absolute inset-0 bg-[#14274A] opacity-50"></div>
        <div className="relative xl:w-full xsm:w-[60%] xsm:px-20 xl:px-36 xsm:flex xsm:justify-between xl:flex xl:justify-between z-10">
          <div className="xsm:p-4 xsm:flex xsm:flex-col xsm:rounded-b-3xl xl:w-auto xl:flex xl:flex-col text-[#14274A] bg-[#E0B973] xl:p-6 xl:text-3xl xl:rounded-b-[2.5rem] justify-center">
            <p className="xsm:p-2 xsm:text-6xl xl:text-2xl font-bold font-[adobe-garamond-pro]">LUXURY</p>
            <p className="xsm:text-3xl xl:text-sm font-[adobe-garamond-pro] xsm:px-20 xl:px-7 xl:tracking-widest">HOTELS</p>
          </div>
          <div className="xl:w-[50%] xsm:w-[20%] xsm:flex xsm:items-center xl:flex xl:p-4 xl:items-center xl:justify-end xl:ml-8">
            <ul className="xsm:flex xsm:gap-10 xl:flex xl:space-x-10 xl:text-base xl:mx-8 text-white font-semibold xsm:py-2 xsm:text-3xl">
              <li className="hover:underline"><Link to="/">Home</Link></li>
              <li className="hover:underline"><Link to="/facilities">Facilities</Link></li>
              <li className="hover:underline"><Link to="/Rooms">Rooms</Link></li>
              <li className="hover:underline"><Link to="/contact">Contact-us</Link></li>
            </ul>
          </div>
        </div>
        <div className="relative xl:w-[auto] xl:flex text-white xl:p-1 xl:px-16 font-[adobe-garamond-pro] z-10 hover:drop-shadow-2xl">
          <p className="xsm:p-20 xsm:text-3xl xl:text-3xl font-sans xl:tracking-widest">WELCOME TO <br />
            <span className="xsm:text-6xl xl:text-8xl font-[adobe-garamond-pro] font-semibold tracking-[7%]">LUXURY</span><br /> <p className="xl:text-4xl xl:tracking-[0.5em] xl:font-[adobe-garamond-pro] xsm:tracking-normal xl:font-bold">HOTELS</p>
            <span className="xl:text-2xl xsm:font-sans xl:tracking-normal">Book your stay and enjoy Luxury <br /> redefined at the most affordable rates.</span>
          </p>
        </div>
        <div className="xsm:flex xsm:flex-row xsm:justify-center xl:flex xl:flex-row xl:justify-center xsm:-mb-0.5">
          <button className="bg-[#E0B973] xsm:w-[180px] xsm:text-xl xsm:gap-1 xsm:flex xsm:p-2 xsm:absolute xsm:bottom-24 xl:w-[130px] font-bold xl:flex xl:items-center xl:absolute xl:bottom-28 xl:gap-1 xl:text-sm text-white xl:p-2 rounded-md">
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
      <div className="xl:w-auto xl:text-center xsm:p-6 xsm:w-[1250px] xsm:text-3xl xsm:text-center xl:text-2xl xl:p-12 text-[#14274A] stroke-[#14274A] xl:font-medium z-10">
        <p>All our room types are including complementary breakfast</p>
      </div>
      <div className="xsm:justify-between xsm:flex xsm:flex-col-reverse xsm:w-[1250px] xl:w-full xl:p-4 xl:px-40 xl:flex xl:flex-row xl:justify-evenly xsm:items-center">
        <div className="xsm:justify-center xsm:p-10 xsm:flex xsm:w-[90%] xsm:flex-col xl:w-[60%] xl:flex xl:border-l-2 border-[#14274A] xl:p-10">
          <h1 className="font-[adobe-garabond-pro] font-bold text-[#14274A] xl:text-left xl:text-4xl xsm:text-7xl xsm:text-center">Luxury redefined</h1> <br />
          <p className="xl:text-xl xl:text-left xsm:text-4xl xsm:text-center font-[montserrat] text-[#14274A]">Our rooms are designed to transport <br />
            you into an environment made for leisure. <br />
            Take your mind off the day-to-day of home <br />
            life and find a private paradise for yourself.</p>
          <button className="bg-[#E0B973] xl:my-4 text-white font-semibold font-[Montserrat] rounded-md xl:w-30 xl:p-2 xl:m-0 xsm:p-4 xl:text-sm xsm:text-2xl xsm:w-[150px] xsm:m-auto xsm:my-5">EXPLORE</button>
        </div>
        <div className="xsm:flex xsm:justify-center xsm:items-center xsm:w-[full] xl:w-[70%] xl:flex xl:flex-row xl:items-center">
          <img src={bedroom} className="xsm:w-[1000px] xsm:h-full xl:w-full" />
        </div>
      </div>
      <div className="xsm:justify-between xsm:flex xsm:flex-col-reverse xsm:w-[1250px] xl:w-full xl:p-3  xl:flex xl:flex-row xl:px-40  xl:justify-evenly xsm:items-center">
        <div className="xsm:justify-center xsm:p-10 xsm:flex xsm:w-[90%] xsm:flex-col xl:w-[60%] xl:flex xl:border-l-2 border-[#14274A]   xl:p-14">
          <h1 className="font-[adobe-garabond-pro] font-bold text-[#14274A] xl:text-left xl:text-4xl xsm:text-7xl xsm:text-center">Leave your worries in <br /> the sand</h1><br />
          <p className="xl:text-xl xl:text-left xsm:text-4xl xsm:text-center font-[montserrat] text-[#14274A]">We love life at the beach. Being close <br />
            to the ocean with access to endless sandy <br />
            beach ensures a relaxed state of mind. It <br />
            seems like time stands still watching the <br />
            ocean. </p>
          <button className="bg-[#E0B973] xl:my-4 text-white font-semibold font-[Montserrat] rounded-md xl:w-30 xl:p-2 xl:m-0 xsm:p-4 xl:text-sm xsm:text-2xl xsm:w-[150px] xsm:m-auto xsm:my-5">EXPLORE</button>
        </div>
        <div className="xsm:flex xsm:justify-center xsm:items-center xsm:w-[full] xl:w-[70%] xl:flex xl:flex-row xl:justify-end xl:items-center">
          <img src={beach} className="xsm:w-[1000px] xsm:h-full xl:w-full" />
        </div>
      </div>
      <Testimonials />
      <Footer />

    </>
  );
}

export default Home;
