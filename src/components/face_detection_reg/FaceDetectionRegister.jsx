import React from "react";
import personImage from "../images/FaceIcon.png";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";


function FaceDetectionRegister() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });
  return (
    <main>
      <animated.section
        style={fadeIn}
        className="min-h-screen bg-white text-black flex flex-col items-center justify-center space-y-9 py-20"
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-center space-y-4">
          Register your face
        </h1>
        <div className="flex flex-col items-center space-y-14">
          <iframe 
            src="http://localhost:5001/video_feed"
            title="Webcam"
            className="w-[640px] h-[640px] lg:scale-50 sm:scale-[0.4] scale-[0.3] overflow-hidden lg:-my-32 sm:-my-48 -my-56"
          />
          {/* aight rick replace the image above ^. this is where you can do ur magic and do the webcam stuffs ig idk */}
          <p class="text-sm sm:text-lg lg:text-2xl text-center">
            Click the button below to scan your face
          </p>
          <Link to="/loginsuccess">
            <button className="bg-blue-400 text-white py-2 px-4 rounded hover:text-gray-300 hover:bg-blue-500 w-52">Submit</button>
          </Link>
        </div>
      </animated.section>
    </main>
  );
}

export default FaceDetectionRegister;
