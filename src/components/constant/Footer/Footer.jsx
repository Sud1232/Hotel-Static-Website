import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa"
import "../../../../src/App.css"
function Footer() {
  return (
    <>
      <div className="bg-[#14274A] xl:w-16 xl:h-12 xl:flex xl:rotate-45 xl:m-auto xl:translate-y-8 xl:z-0 xl:relative xsm:relative xsm:w-20 xsm:h-20 xsm:rotate-45 xsm:ml-[580px] xsm:translate-y-10"></div>
      <div className="bg-[#14274A] xl:z-1 xl:w-full xl:absolute xsm:absolute text-white xl:flex xl:justify-around  xl:p-10 xsm:w-[1270px]">
        <div className=" xsm:w-[1271px] xsm:flex xsm:flex-col xsm:text-center xl:flex xl:flex-col font-[adobe-garamond-pro] xsm:text-5xl xsm:p-12 xl:w-auto xl:text-base xl:text-left">
          <p className="xl:text-2xl font-bold ">LUXURY</p>
          <p className="xl:px-4 xl:text-[7px] xsm:text-lg xl:tracking-[0.3rem] xl:leading-normal">HOTELS</p>
          <p className="xl:py-3 xsm:pt-20">
            497 Evergreen Rd. Roseville, CA 95673 <br />
            +44 345 678 903 <br />
            luxury_hotels@gmail.com</p>
        </div>
        <div className="xsm:flex xsm:p-20 xsm:space-x-10 xsm:justify-center xsm:text-5xl xsm:space-y-1 xsm:w-[1250px] xl:flex xl:justify-center xl:p-0 xl:text-left xl:w-auto xl:space-x-0 xl:space-y-3 xl:text-base xl:flex-col font-semibold xsm:px-10 xsm:pb-10">
          <p><Link to="/">About Us</Link></p>
          <p><Link to="/contact">Contact</Link></p>
          <p>Terms & Conditions</p>
        </div>
        <div className="xsm:p-20 xsm:w-[1250px] xsm:space-y-2 xsm:justify-center xsm:space-x-14 xsm:flex xl:text-base xl:w-auto xl:flex-col xl:justify-center xl:space-y-3 xl:space-x-0 font-semibold xl:p-0 xsm:text-5xl">
          <div className="xsm:flex xsm:justify-center xl:flex xl:items-center xl:space-x-2"><FaFacebookF className=""></FaFacebookF><p><Link to="https://www.facebook.com/">Facebook</Link></p></div>
          <div className="xsm:flex xsm:justify-center xl:flex xl:items-center xl:space-x-2"><FaTwitter className=""></FaTwitter><p><Link to="https://x.com/">Twitter</Link></p></div>
          <div className="xsm:flex xsm:justify-center xl:flex xl:items-center xl:space-x-2"><FaInstagram className=""></FaInstagram><p><Link to="https://www.instagram.com/">Instagram</Link></p></div>
        </div>
        <div className="xl:space-y-6 xl:text-base xl:p-20 xsm:text-center xsm:space-y-[40px] xsm:p-11 xsm:pb-[90px] xsm:text-5xl">
          <p className="xsm:pb-[20px] xl:p-0 xl:text-left">Subsribe to our newsletter</p>
          <input type="email" className="placeholder:text-white border-2 outline-none border-[#E0B973] bg-transparent xl:p-2 xsm:p-2" placeholder="  Email Address" id="" />
          <button className="bg-[#E0B973] xl:p-2.5 xl:rounded-sm xl:w-[80px] xsm:p-5 xsm:rounded-md">OK</button>
        </div>
        <div className="up">
          <a href="#top"><FaArrowUp className="up-ic"></FaArrowUp></a>
        </div>
      </div>
    </>
  )
}

export default Footer