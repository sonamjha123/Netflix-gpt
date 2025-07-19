import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,  } from "firebase/auth";
import { auth } from "../utils/firebase"; // Ensure you have your Firebase configuration set up
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const [isSignintoggle, setIsSignintoToggle] = useState(false);
  const [errorMessaqe, setErrorMessage] = useState("");

  /* 
  - Refs to access input values
  - Using useRef to avoid unnecessary re-renders and to directly access DOM elements
  - This is useful for form validation and direct DOM manipulation without affecting the component's state.
  - Refs are mutable objects that persist for the full lifetime of the component.
  - They can be used to store a reference to a DOM element or a value that does 
  */
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullnameRef = useRef(null);

  const handleToggle = () => {
    setIsSignintoToggle(!isSignintoggle);
  
  };

  //checking validation of form
  const hanldeClickValidate = () => {
    
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  const fullname = fullnameRef.current?.value || "";

  const message = checkValidateData(email, password, fullname, isSignintoggle);

  if (message) {
    setErrorMessage(message);
    return;
  }

  setErrorMessage("");

    // If no error message, proceed with sign-in or sign-up logic
    // based on the value of the isSignintoggle state variable
    if (isSignintoggle) {
      // Sign Up Logic
      // Use the createUserWithEmailAndPassword method from the Firebase SDK
      // to create a new user with the email and password input values
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // If the sign-up is successful, log the user object to the console
          const user = userCredential.user;
          navigate("/"); // Navigate to the browse page after successful sign-up
        })
        .catch((error) => {
          // If the sign-up fails, log the error message to the console
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign In Logic
      // Use the signInWithEmailAndPassword method from the Firebase SDK
      // to sign-in with the email and password input values
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // If the sign-in is successful, log the user object to the console
          const user = userCredential.user;
          navigate("/browse"); // Navigate to the Browse page after successful sign-in
        })
        .catch((error) => {
          // If the sign-in fails, log the error message to the console
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 -left-0 bg-opacity-80 rounded shadow-lg"
      >
        <h1 className="text-3xl font-bold text-white mb-6 py-4">
          {isSignintoggle ? "Sign Up" : "Sign In"}
        </h1>
        <input
          ref={emailRef}
          type="text"
          placeholder="Email or mobile number"
          className="w-full p-2 mb-4 border bg-black border-gray-500 text-white rounded"
        />
        {isSignintoggle && (
          <input
            ref={fullnameRef}
            type="text"
            placeholder="Full Name"
            className="w-full p-2 mb-4 border bg-black border-gray-500 text-white rounded"
          />
        )}
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border bg-black text-white border-gray-500 rounded"
        />
        <p className="text-red-500 font-bold text-sm py-4">{errorMessaqe}</p>
        <button
          type="submit"
          className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={hanldeClickValidate}
        >
          {isSignintoggle ? "Sign Up" : "Sign In"}
        </button>
        <p
          className="text-gray-400 text-sm py-2 mt-4 cursor-pointer hover:text-white"
          onClick={handleToggle}
        >
          {isSignintoggle
            ? "Already have an account ? Sign In"
            : "New to Netflix ? Sign up now"}
        </p>
      </form>
    </>
  );
};

export default Login;
