import React from "react";
import logo from "../images/logo.png";
import personImage from "../images/FaceIcon.png";
import { useSpring, animated } from "react-spring";
import {Link} from "react-router-dom";
function Register() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });
  return (
    <main>
      <animated.section
        style={fadeIn}
        className="min-h-screen bg-[#005BFF] text-white flex flex-col items-center justify-center"
      >
        <div className="flex justify-center items-center p-2">
          <img src={logo} alt="Logo" className="w-24 sm:w-32 lg:w-48" />
        </div>
        <div className="flex flex-col justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div>
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold break-normal text-center">
              Register below!
            </h1>
            <p className="text-sm sm:text-lg lg:text-2xl text-center">
              Please create your account.
            </p>
            <div className="flex flex-col space-y-2 mt-4 items-center">
              <input
                type="text"
                placeholder="Username"
                className="py-2 px-4 bg-white rounded w-52 text-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="py-2 px-4 bg-white rounded w-52 text-black"
              />
              <input
                type="password"
                placeholder="Password"
                className="py-2 px-4 bg-white rounded w-52 text-black"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="py-2 px-4 bg-white rounded w-52 text-black"
              />
              <Link to="/faceidregister">
              <button className="bg-white text-[#005BFF] py-2 px-4 rounded hover:text-gray-300 hover:bg-blue-500 w-52">
                Sign Up
              </button>
              </Link>
            </div>
          </div>
        </div>
      </animated.section>
      
    </main>
  );
}

export default Register;
