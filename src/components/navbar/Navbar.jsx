import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <section className="bg-[#0059ff] text-white flex items-center justify-between px-8 py-4 sm:px-16">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32" />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/login">
          <button className="bg-white text-[#005BFF] py-2 sm:py-3 px-6 sm:px-8 rounded hover:text-gray-300 hover:bg-blue-500 w-32 sm:w-40 h-12 sm:h-14">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-transparent hover:bg-white text-white hover:text-gray-300 py-2 sm:py-3 px-6 sm:px-8 border border-white hover:border-transparent rounded w-32 sm:w-40 h-12 sm:h-14">
            Join Now!
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
