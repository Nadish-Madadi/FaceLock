import React from "react";
import logo from "../images/logo.png"; 
import personImage from "../images/FaceIcon.png"; 

function Register() {
    return (
        <main>
            <section className="min-h-screen bg-[#005BFF] text-white flex flex-col items-center justify-center">
                <div className="flex justify-center items-center p-2">
                    <img src={logo} alt="Logo" className="w-24 sm:w-32 lg:w-48" />
                </div>
                <div className="flex flex-col justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div>
                        <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold break-normal text-center">Register below!</h1>
                        <p className="text-sm sm:text-lg lg:text-2xl text-center">Please create your account.</p>
                        <div className="flex flex-col space-y-2 mt-4 items-center">
                            <input type="text" placeholder="Username" className="py-2 px-4 bg-white rounded w-52 text-black"/>
                            <input type="email" placeholder="Email" className="py-2 px-4 bg-white rounded w-52 text-black"/>
                            <input type="password" placeholder="Password" className="py-2 px-4 bg-white rounded w-52 text-black"/>
                            <input type="password" placeholder="Confirm Password" className="py-2 px-4 bg-white rounded w-52 text-black"/>
                            <button className="bg-white text-[#005BFF] py-2 px-4 rounded hover:text-gray-300 hover:bg-blue-500 w-52">Sign Up</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center space-y-9 py-20">
                <h1 className="text-2xl sm:text-4xl font-bold text-center space-y-4">Register your face</h1>
                <div className="flex flex-col items-center space-y-14">
                    <img src={personImage} alt="FaceIcon" className="w-48 sm:w-64 lg:w-5/12" /> 
                    {/* aight rick replace the image above ^. this is where you can do ur magic and do the webcam stuffs ig idk */}
                    <p class="text-sm sm:text-lg lg:text-2xl text-center">Click the button below to scan your face</p>
                    <button className="bg-blue-400 text-white py-2 px-4 rounded hover:text-gray-300 hover:bg-blue-500 w-52">Scan Face</button>
                </div>
            </section>
        </main>
    );
}

export default Register;
