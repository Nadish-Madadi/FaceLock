import React from "react";
import { useSpring, animated } from "react-spring";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import personImage from "../images/FaceIcon.png"; //This is the white scanning icon at the top right of the home page
import image1 from "../images/LockImage.png"; //the lock, first icon of getting started part
import image2 from "../images/BlueScanImage.png"; //second icon of getting started part
import image3 from "../images/ClickImage.png"; //third icon of getting started part
import { Tilt as Tilt } from "react-tilt";

function Home() {
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
              Embrace the Next-Gen Authentication with FaceLock.
            </h1>
            <p className="text-sm sm:text-lg lg:text-2xl">
              Discover the strength of open innovation with FaceLock,
              simplifying secure access like never before
            </p>
            <div className="grid grid-cols-1 gap-4 sm:flex sm:flex-col mt-4">
              <Link to="/login">
                <button className="bg-white text-[#005BFF] py-3 px-10 sm:py-5 sm:px-14 rounded hover:text-gray-300 hover:bg-blue-500 w-full sm:w-96 h-14 flex-shrink-0 flex-grow-0">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-transparent hover:bg-white text-white hover:text-gray-300 py-3 px-10 sm:py-5 sm:px-14 border border-white hover:border-transparent rounded w-full sm:w-96 h-14 flex-shrink-0 flex-grow-0">
                  Sign Up
                </button>
              </Link>
              <ScrollLink to="secondPage" smooth={true} duration={500}>
                <button className="bg-blue-400 text-white py-3 px-10 sm:py-5 sm:px-14 rounded hover:text-gray-300 hover:bg-blue-500 w-full sm:w-96 h-14 flex-shrink-0 flex-grow-0">
                  Getting Started
                </button>
              </ScrollLink>
            </div>
          </div>
          <Tilt
            options={{
              max: 25,
              scale: 1,
              gyroscopeMaxAngleX: 0,
              gyroscopeMaxAngleY: 0,
              glare: false,
            }}
          >
            <img
              src={personImage}
              alt="Person"
              className="w-60 sm:w-11/12 md:w-96 lg:w-11/12 xl:w-11/12"
            />
          </Tilt>
        </animated.div>
      </section>
      <section
        id="secondPage"
        className="min-h-screen w-full bg-white text-black flex flex-col items-center justify-center space-y-9 py-20"
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-center space-y-4">
          Secure your passwords today!
        </h1>
        <div className="flex flex-col items-center space-y-14">
          <div className="flex flex-col items-center">
            <img src={image1} alt="Step 1" class="w-24 sm:w-32 lg:w-48" />
            <p class="text-sm sm:text-lg lg:text-2xl text-center">
              Enter your username & password for a profile, storing the
              credentials securely on the cloud
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={image2} alt="Step 2" class="w-24 sm:w-32 lg:w-48" />
            <p class="text-sm sm:text-lg lg:text-2xl text-center">
              Scan your face with your browser through a camera, allowing for
              our facial recognition to work
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={image3} alt="Step 3" class="w-24 sm:w-32 lg:w-48" />
            <p class="text-sm sm:text-lg lg:text-2xl text-center">
              Access all your stored profiles with your face and the click of a
              button!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
