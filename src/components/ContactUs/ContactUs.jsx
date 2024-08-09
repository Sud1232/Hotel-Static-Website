import { Link } from "react-router-dom"
import Footer from "../constant/Footer/Footer"
import { HiArrowLongRight } from "react-icons/hi2";
import "../../../src/App.css"

function ContactUs() {
  return (
    <>
      <div className="bg-[#14274A] xsm:w-[1271px] xl:w-full xl:h-[380px]">
        <div>
          <div className="relative xl:w-auto xsm:w-[60%] xsm:px-20 xl:px-36 xsm:flex xsm:justify-between xl:flex xl:justify-between z-10">
            <div className="xsm:p-0 xsm:flex xsm:flex-col xsm:rounded-b-3xl xl:w-[40%] xl:flex xl:flex-col text-[#14274A]  xl:p-0 xl:text-3xl justify-center">
              <div className="bg-[#E0B973] xl:w-[40%] xl:rounded-b-[2rem] xsm:p-2 xsm:rounded-b-3xl xl:p-8 flex flex-col justify-center items-center">
                <p className="xsm:p-2 xsm:text-6xl xl:text-3xl xl:leading-3 font-semibold font-[adobe-garamond-pro]">LUXURY</p>
                <p className="xsm:text-3xl xl:text-sm xl:font-semibold font-[adobe-garamond-pro] xsm:px-20 xl:px-7 xl:tracking-[0.4em]">HOTELS</p>
              </div>
            </div>
            <div className="xl:w-[60%] xsm:w-[20%] xsm:flex xsm:items-center xl:flex xl:p-4 xl:items-center xl:justify-end xl:ml-8">
              <ul className="xsm:flex xsm:gap-10 xl:flex xl:space-x-10 xl:text-base xl:mx-20 text-white font-semibold xsm:py-2 xsm:text-3xl">
                <li className="hover:font-bold"><Link to="/">Home</Link></li>
                <li className="hover:font-bold"><Link to="/facilities">Facilities</Link></li>
                <li className="hover:font-bold"><Link to="/Rooms">Rooms</Link></li>
                <li className="hover:font-bold"><Link to="/contact" className="font-bold underline underline-offset-4">Contact-us</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="xsm:p-16 xsm:flex xsm:justify-center xsm:items-center xl:p-0 xl:flex xl:justify-center xl:items-center xl:py-14">
          <h1 className="xsm:text-4xl xl:text-6xl text-white font-bold">CONTACT US</h1>
        </div>
      </div>
      <div className="xl:space-y-1 xl:w-full text-[#14274A] xl:pt-52 xl:px-36 xsm:p-24 xsm:w-[1271px] xsm:text-left xsm:space-y-5">
        <h2 className="font-[adobe-garamond-pro] font-bold xl:text-5xl xl:text-left xsm:text-5xl xsm:text-center">WE ARE HERE FOR YOU</h2>
        <p className="font-[montserrat] font-medium xl:text-xl xsm:text-3xl">At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,
          please forward it to our support desk and we will get back to you as soon as possible.</p>
      </div>
      <div className="xsm:w-[1271px] xsm:justify-center xsm:flex xsm:flex-col xl:flex xl:flex-row xl:w-full text-[#14274A] xl:justify-evenly">
        <div className="xsm:w-full xsm:px-24 xsm:text-5xl xl:w-1/2 xl:px-36 xl:text-6xl xl:text-left xsm:text-center">
          <p className="xsm:text-5xl xl:text-3xl xsm:gap-y-[30px]">497 Evergreen Rd. Roseville,</p>
          <p className="xl:text-3xl xsm:text-5xl">CA 95673</p>
          <div className="xsm:flex xl:flex xl:justify-start xl:items-center xsm:justify-center xl:gap-x-3 xsm:gap-x-2">
            <p className="font-bold xl:text-3xl xl:text-left xsm:pt-4 xl:pt-2 xl:pb-4 xsm:pb-1 xsm:text-5xl">View map</p><HiArrowLongRight className="xsm:w-16 xsm:h-20 xl:w-14 xl:h-20"></HiArrowLongRight>
          </div>
          <p className="xl:text-3xl xl:pt-3">Phone: +44 345 678 903 <br />
            Email: luxury_hotels@gmail.com</p>
        </div>
        <div className="xsm:w-full xsm:px-24 xsm:py-10 xl:flex xl:flex-col xl:w-1/2 xl:py-0 xl:space-y-2 xsm:space-y-3 xsm:h-[100vh] xl:h-[860px] xl:text-left xsm:text-center text-[#14274A]">
          <p className="xl:p-0.5 xl:text-lg xsm:text-3xl font-semibold">Name</p>
          <input type="text" className="border-gray-400 border-2 p-2 w-[80%]" />
          <p className="xl:p-0.5 xl:text-lg xsm:text-3xl font-semibold">Email Address</p>
          <input type="email" className="border-gray-400 border-2 p-2 w-[80%]" />
          <p className="xl:p-0.5 xl:text-lg xsm:text-3xl font-semibold">Message</p>
          <textarea className="xl:w-[80%] xl:p-2 xl:border-2 xsm:border-2 xsm:w-[80%] border-gray-400" name="" id="" cols="2" rows="7"></textarea><br />
          <button type="submit" className="bg-[#E0B973] text-[#ffffff] xl:mt-[40%] xl:text-lg xl:font-semibold xl:w-[20%] xl:mx-[60%] xl:p-4 xl:mt- rounded-md font-semibold xsm:mb-72 xsm:text-2xl xsm:p-2">Submit</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactUs