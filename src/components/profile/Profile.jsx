import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

function Profile() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });
  return (
    <main>
      <section className="lg:min-h-screen bg-[#005BFF] text-white flex flex-col items-center min-h-fit sm:pb-20">
        <animated.div
          style={fadeIn}
          className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto px-4"
        >
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold break-normal">
              View your existing profiles
            </h1>
            <p className="text-sm sm:text-lg lg:text-2xl">
              Profiles are secured with face recognition authentication, with
              ease of storage and access!
            </p>
            <div className="grid grid-cols-1 gap-4 sm:flex sm:flex-col mt-4">
              <Link to="/Google">
                <button className="bg-transparent hover:bg-white text-white hover:text-gray-300 py-3 px-10 sm:py-5 sm:px-14 border border-white hover:border-transparent rounded w-full sm:w-96 h-14 flex-shrink-0 flex-grow-0">
                  Google Profile
                </button>
              </Link>
              <Link to="/YouTube">
                <button className="bg-transparent hover:bg-white text-white hover:text-gray-300 py-3 px-10 sm:py-5 sm:px-14 border border-white hover:border-transparent rounded w-full sm:w-96 h-14 flex-shrink-0 flex-grow-0">
                  YouTube Profile
                </button>
              </Link>
              <Link to="/PayPal">
                <button className="bg-transparent hover:bg-white text-white hover:text-gray-300 py-3 px-10 sm:py-5 sm:px-14 border border-white hover:border-transparent rounded w-full sm:w-96 h-14 flex-shrink-0 flex-grow-0">
                  PayPal Profile
                </button>
              </Link>
            </div>
            <br></br>
            <br></br>
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold break-normal">
              Create new profiles
            </h1>
            <p className="text-sm sm:text-lg lg:text-2xl">
              New to FaceLock? Click below to create a new secure profile for
              your application!
            </p>
            <div className="grid grid-cols-1 gap-4 sm:flex sm:flex-col mt-4">
              <Link to="/profilecreate">
                <button className="bg-white text-[#005BFF] py-3 px-10 sm:py-5 sm:px-14  rounded hover:text-gray-300 hover:bg-blue-500 w-full sm:w-96 h-14 flex-shrink-0 flex-grow-0">
                  Create new profile
                </button>
              </Link>
            </div>
          </div>
        </animated.div>
      </section>
    </main>
  );
}

export default Profile;
