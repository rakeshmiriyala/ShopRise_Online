import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="navbar bg-white flex justify-between items-center p-4"
      data-aos="fade-down"
    >
      <div className="flex items-center md:ml-[200px] lg:ml-[350px]">
        <img
          src={Logo}
          alt="Logo"
          className="xs:h-12 xs:w-12 md:h-16 md:w-20 lg:h-28 lg:w-32 mr-2"
        />
        <a className="md:text-4xl lg:text-6xl xs:text-lg font-bold text-[#eb4646]">
          ShopRise Online
        </a>
      </div>

      <div>
        <Link to="/login">
          <button className="text-white bg-green-600 hover:bg-green-500 font-bold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
