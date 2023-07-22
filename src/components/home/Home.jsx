import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"; 
import personImage from "../images/FaceIcon.png";  //This is the white scanning icon at the top right of the home page
import image1 from "../images/LockImage.png"; //the lock, first icon of getting started part
import image2 from "../images/BlueScanImage.png"; //second icon of getting started part
import image3 from "../images/ClickImage.png"; //third icon of getting started part

function Home() {
    return (
      <main>
        <section className="min-h-screen bg-[#005BFF] text-white flex flex-col">
          <div className="flex justify-between items-center p-2">
            <img src={logo} alt="Logo" className="w-24 sm:w-32 lg:w-48" />
            
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div>
              <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold break-normal">Face the Future: Embrace the Next-Gen Authentication with FaceLock.</h1>
              <p class="text-sm sm:text-lg lg:text-2xl">Discover the strength of open innovation with FaceLock, simplifying secure access like never before</p>
              <div className="flex flex-col space-y-2 mt-4">
              <Link to="/login"> 
                  <button className="bg-white text-[#005BFF] py-5 px-14 rounded hover:text-gray-300 hover:bg-blue-500 w-96 h-14">Login</button>
                </Link>
                <Link to="/register"> 
                  <button className="bg-transparent hover:bg-white text-white hover:text-gray-300 py-5 px-14 border border-white hover:border-transparent rounded w-96 h-14">Sign Up</button>
                </Link>
                <ScrollLink to="secondPage" smooth={true} duration={500}>
                  <button className="bg-blue-400 text-white py-5 px-14 rounded hover:text-gray-300 hover:bg-blue-500 w-96 h-14">Getting Started</button>
                </ScrollLink>
                    </div>
            </div>
            
            <img src={personImage} alt="Person" className="w-48 sm:w-64 lg:w-5/12" />
          </div>
        </section>
        <section id="secondPage" className="min-h-screen w-full bg-white text-black flex flex-col items-center justify-center space-y-9 py-20">
    <h1 className="text-2xl sm:text-4xl font-bold text-center space-y-4">Secure your passwords today!</h1>
    <div className="flex flex-col items-center space-y-14">
        <div className="flex flex-col items-center">
            <img src={image1} alt="Step 1" class="w-24 sm:w-32 lg:w-48" />
            <p class="text-sm sm:text-lg lg:text-2xl text-center">Enter your username & password for a profile, storing the credentials securely on the cloud</p>
        </div>
        <div className="flex flex-col items-center">
            <img src={image2} alt="Step 2" class="w-24 sm:w-32 lg:w-48" />
            <p class="text-sm sm:text-lg lg:text-2xl text-center">Scan your face with your browser through a camera, allowing for our facial recognition to work</p>
        </div>
        <div className="flex flex-col items-center">
            <img src={image3} alt="Step 3" class="w-24 sm:w-32 lg:w-48" />
            <p class="text-sm sm:text-lg lg:text-2xl text-center">Access all your stored profiles with your face and the click of a button!</p>
        </div>
    </div>
</section>

      </main>
    );
  }
  
  export default Home;
