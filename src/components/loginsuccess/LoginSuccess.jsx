import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";

function LoginSuccess() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace("/profile");  // After 2 seconds, redirect to Home
    }, 2000); 

    return () => clearTimeout(timer); // This will clear the timeout if the component is unmounted before the timeout finishes
  }, []);

  return (
    <main>
      <animated.section
        style={fadeIn}
        className="min-h-screen bg-[#005BFF] text-white flex flex-col items-center justify-center"
      >
        <div className="flex flex-col justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div>
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold break-normal text-center">
              Successful login! Redirecting to account profile page.
            </h1>
            <p className="text-sm sm:text-lg lg:text-2xl text-center">
              Please wait while this loads.
            </p>
          </div>
        </div>
      </animated.section>
    </main>
  );
}

export default LoginSuccess;
