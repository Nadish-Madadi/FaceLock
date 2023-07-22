import React from 'react';
import logo from '../images/logo.png';

function Footer() {
    return (
        <section className="bg-[#1A3B66] text-white flex flex-col items-center justify-center p-4 space-y-4">

            <div className="flex items-center justify-center space-x-4">
                <img src={logo} alt="Logo" className="w-32" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl text-left">FaceLock is dedicated to helping individuals access their passwords in a secure and efficient manner using facial recognition.</p>
            </div>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-1xl text-left w-full">2023 FaceLock</h1>

        </section>
    )
}

export default Footer;
