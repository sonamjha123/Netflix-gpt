import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidateData } from "../utils/validate";
import { BG_URL, photoURL } from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase"; // Ensure you have your Firebase configuration set up
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const dispatch = useDispatch();
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

    const message = checkValidateData(
      email,
      password,
      fullname,
      isSignintoggle
    );

    if (message) {
      setErrorMessage(message);
      return;
    }

    setErrorMessage("");
    if (isSignintoggle) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // If the sign-up is successful, log the user object to the console
          const user = userCredential.user;
          // update users profile using updateProfile API
          updateProfile(user, {
            displayName: fullnameRef.current.value,
            photoURL: photoURL,
          })
            .then(() => {
              //dispatch here again for displayname and photoURL
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // Sign in case

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
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
      <div>
        <Header />
        <div className="absolute">
          <img
            className="h-screen w-screen object-cover"
            src={BG_URL}
            alt="Streamflix promotional background"
          />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute  w-full md:w-3/12 p-12 bg-black my-36 mx-auto right-0 -left-0 bg-opacity-80 rounded shadow-lg"
        >
          <h1 className=" text-2xl md:text-3xl font-bold text-white mb-6 py-4">
            {isSignintoggle ? "Sign Up" : "Sign In"}
          </h1>
          {isSignintoggle && (
            <input
              ref={fullnameRef}
              type="text"
              placeholder="Full Name"
              className="w-full p-2 mb-4 border bg-black border-gray-500 text-white rounded"
            />
          )}
          <input
            ref={emailRef}
            type="text"
            placeholder="Email or mobile number"
            className="w-full p-2 mb-4 border bg-black border-gray-500 text-white rounded"
          />

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
              : "New to Streamflix ? Sign up now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
