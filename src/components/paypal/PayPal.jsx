import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function PayPal() {
  const name = window.location.pathname.substring(1);
  const [buttonText1, setButtonText1] = useState("Copy username");
  const [buttonText2, setButtonText2] = useState("Copy profile");

  const handleButtonClick1 = () => {
    const randomString = generateRandomString(10);
    navigator.clipboard.writeText("Nadish Madadi");
    setButtonText1("Copied to clipboard");
    setTimeout(() => setButtonText1("Copy username"), 2000);
  };

  const handleButtonClick2 = () => {
    const randomString = generateRandomString(10);
    navigator.clipboard.writeText(randomString);
    setButtonText2("Copied to clipboard");
    setTimeout(() => setButtonText2("Copy profile"), 2000);
  };

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  return (
    <main>
      <section className="lg:min-h-screen bg-[#005BFF] text-white flex flex-col items-center justify-center min-h-fit sm:pb-20">
        <animated.div
          style={fadeIn}
          className="flex flex-col items-center justify-center space-y-3 w-full px-4"
        >
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold break-normal">
            Get your {name} information
          </h1>
          <p className="text-sm sm:text-lg lg:text-2xl">
            Copy your profile username
          </p>
          <button
            onClick={handleButtonClick1}
            className="bg-white text-[#005BFF] py-3 px-10 sm:py-5 sm:px-14 rounded hover:text-gray-300 hover:bg-blue-500 w-full sm:w-96 h-14 flex-shrink-0 flex-grow-0"
          >
            {buttonText1}
          </button>
          <p className="text-sm sm:text-lg lg:text-2xl">
            Copy your profile password
          </p>
          <button
            onClick={handleButtonClick2}
            className="bg-white text-[#005BFF] py-3 px-10 sm:py-5 sm:px-14 rounded hover:text-gray-300 hover:bg-blue-500 w-full sm:w-96 h-14 flex-shrink-0 flex-grow-0"
          >
            {buttonText2}
          </button>
        </animated.div>
      </section>
    </main>
  );
}

function generateRandomString(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomString;
}

export default PayPal;
