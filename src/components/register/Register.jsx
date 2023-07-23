import React, {useState} from "react";
import logo from "../images/logo.png";
import personImage from "../images/FaceIcon.png";
import { useSpring, animated } from "react-spring";
import {Link} from "react-router-dom";
function Register() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const specialString = '~`!@#$%^&*()-_+={}[]|\;:"<>,./?'

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirm = (event) => {
    setConfirm(event.target.value);

  }

  const submitPassword = (event) => {
    setSubmitted(true)

    // if(passGood && passMatch){
    //   do logic here
    // }
  }

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });
  return (
    <main>
      <animated.section
        style={fadeIn}
        className="min-h-screen bg-[#005BFF] text-white flex flex-col items-center justify-center"
      >
        <div className="flex justify-center items-center p-2">
          <img src={logo} alt="Logo" className="w-24 sm:w-32 lg:w-48" />
        </div>
        <div className="flex flex-col justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div>
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold break-normal text-center">
              Register below!
            </h1>
            <p className="text-sm sm:text-lg lg:text-2xl text-center">
              Please create your account.
            </p>
            <div className="flex flex-col space-y-2 mt-4 items-center">
              <input
                type="text"
                placeholder="Username"
                className="py-2 px-4 bg-white rounded w-52 text-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="py-2 px-4 bg-white rounded w-52 text-black"
              />
                <input
                  type="password"
                  placeholder="Password"
                  className="py-2 px-4 bg-white rounded w-52 text-black"
                  onChange={handlePassword}
                />
                <div>
                  <p className="text-xs">Password must include at least:</p>
                  <ul>
                    <li className="text-xs">{Array.from(password).some(char => specialString.includes(char)) ? <>&#10004;</> : <>&#183;</>}
                        &nbsp;1 special character</li>
                    <li className="text-xs">{password.length >= 6 ? <>&#10004;</> : <>&#183;</>}
                        &nbsp;6 characters</li>
                    <li className="text-xs">{/[A-Z]/.test(password)? <>&#10004;</> : <>&#183;</>}
                        &nbsp;1 capital letter</li>
                  </ul>
                </div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="py-2 px-4 bg-white rounded w-52 text-black"
                  onChange={handleConfirm}
                /> 
                {(submitted && password != '' &&
                (password !== confirm ||
                !Array.from(password).some(char => specialString.includes(char)) ||
                !password.length >= 6 ||
                !/[A-Z]/.test(password))) && 
                <div>
                  <p className="text-xs">Password must be valid</p>
                  <p className="text-xs">Passwords must match</p>
                </div>}
                
                { password === confirm &&
                  Array.from(password).some(char => specialString.includes(char)) &&
                  password.length >= 6 &&
                  /[A-Z]/.test(password)
                ? (
                  <Link to="/faceidregister">
                    <button className="bg-white text-[#005BFF] py-2 px-4 rounded hover:text-gray-300 hover:bg-blue-500 w-52" onClick={submitPassword}>
                      Sign Up
                    </button>
                  </Link>
                ) : (
                  <button className="bg-white text-[#005BFF] py-2 px-4 rounded hover:text-gray-300 hover:bg-blue-500 w-52" onClick={submitPassword}>
                    Sign Up
                  </button>
                )}
            </div>
          </div>
        </div>
      </animated.section>
      
    </main>
  );
}

export default Register;
