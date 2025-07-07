import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignintoggle, setIsSignintoToggle] = useState(false);
  const handleToggle = () => {
    
    setIsSignintoToggle(!isSignintoggle);
    // Logic to toggle between login and signup can be added here
    console.log("Toggle between login and signup");
  };
  return (
    <>
      <div className="absolute">
        <Header />
        <img
          className="w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/FR-en-20250630-TRIFECTA-perspective_70e52842-38a0-4ff9-841d-117202b467d4_small.jpg"
          alt="Netflix image"
        />
      </div>
      {/* <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md mx-auto mt-8 p-6 bg-white rounded shadow"> */}
        <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 -left-0 bg-opacity-80 rounded shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6 py-4">{isSignintoggle ? "Sign Up" : "Sign In"}</h1>
        <input
          type="text"
          placeholder="Email or mobile number"
          className="w-full p-2 mb-4 border bg-black border-gray-500 text-white rounded"
        />
        {isSignintoggle && (
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 mb-4 border bg-black border-gray-500 text-white rounded"
        />)}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border bg-black text-white border-gray-500 rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          {isSignintoggle ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-gray-400 text-sm py-2 mt-4 cursor-pointer hover:text-white" onClick={handleToggle}>
          {isSignintoggle ? "Already have an account ? Sign In" : "New to Netflix ? Sign up now"}
        </p>
      </form>
    </>
  );
};

export default Login;
