import React from "react";
import personImage from "../images/FaceIcon.png"; 
import { useSpring, animated } from 'react-spring';

function FaceDetection() {
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      })
    return (
        <main>
            <animated.section style={fadeIn} className="min-h-screen bg-white text-black flex flex-col items-center justify-center space-y-9 py-20">
                <h1 className="text-2xl sm:text-4xl font-bold text-center space-y-4">Authenticate using facial recognition</h1>
                <div className="flex flex-col items-center space-y-14">
                    <img src={personImage} alt="FaceIcon" className="w-48 sm:w-64 lg:w-5/12" />
                    {/* aight rick replace the image above ^. this is where you can do ur magic and do the webcam stuffs ig idk */}
                    <p class="text-sm sm:text-lg lg:text-2xl text-center">Click the button below to scan your face</p>
                    <button className="bg-blue-400 text-white py-2 px-4 rounded hover:text-gray-300 hover:bg-blue-500 w-52">Scan Face</button>
                </div>
            </animated.section>
        </main>
    );
}

export default FaceDetection;