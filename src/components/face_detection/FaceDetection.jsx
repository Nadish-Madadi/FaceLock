import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import Loading from '../loading/Loading';
import { Link } from "react-router-dom";

function FaceDetection() {
    

    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    })
    
    const [isLoading, setIsLoading] = useState(true);

    const handleOnLoad = () => {
        setIsLoading(false);
    };

    return (
        <main>
            <animated.section style={fadeIn} className="min-h-screen bg-white text-black flex flex-col items-center justify-center space-y-9 py-20">
                <h1 className="text-2xl sm:text-4xl font-bold text-center space-y-4">Authenticate using facial recognition</h1>
                <div className="flex flex-col items-center space-y-14 relative">
                    {isLoading && <div className="absolute inset-0 flex items-center justify-center z-10"><Loading /></div>}
                    <img 
                    src="http://localhost:5000/video_feed"
                    onLoad={handleOnLoad}
                    title="Webcam"
                    className="w-[640px] h-[640px] lg:scale-50 sm:scale-[0.4] scale-[0.3] overflow-hidden lg:-my-32 sm:-my-48 -my-56"
                    />
                    <p className="text-sm sm:text-lg lg:text-2xl text-center">Click the button below to scan your face</p>
                    <Link to="/loginsuccess">
                    <button className="bg-blue-400 text-white py-2 px-4 rounded hover:text-gray-300 hover:bg-blue-500 w-52">Scan Face</button>
                    </Link>
                </div>
            </animated.section>
        </main>
    );
}

export default FaceDetection;
