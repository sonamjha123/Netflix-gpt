import React from "react";
import Modal from "./Modals";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../utils/firebase"; // Ensure you have your Firebase configuration set up
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants"; // Import supported languages
import { toggleGptSearchView } from "../utils/gptsearchSlice"; // Import the action to toggle GPT search view
import { changeLanguage } from "../utils/configSlice"; // Import the action to change language

const Header = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const handlesignOut = () => {
    // setIsModalOpen(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error"); // Handle any errors that occur during sign-out
      });
  };

  //Get the currently signed-in user
  //onAuthStateChanged` is used to listen for changes in the user's authentication state
  // why use used useEffect here? to ensure that the authentication state is checked when the component mounts
  // and to dispatch the appropriate actions based on whether a user is signed in or not.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        // Sign in case
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse"); // Navigate to the browse page if user is authenticated
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView()); // Dispatch the action to toggle GPT search view
  };
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value; // Get the selected language from the dropdown
    dispatch(changeLanguage(selectedLanguage)); // Dispatch the action to change the language
  };
  return (
    <div className="absolute w-screen px-20 py-2 bg-gradient-to-b from-black to-transparent top-0 left-0 right-0 flex flex-col md:flex-row items-center justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
      />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="bg-gray-600 text-xs md:text-base text-white mr-6 py-1 rounded ml-4 px-1"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.icon} {language.name}
                </option>
              ))}
              {/* Add more languages as needed */}
            </select>
          )}

          <button
            className="bg-red-500 text-white px-2 py-1  rounded hover:bg-red-800 transition-colors duration-300 ease-in-out text-xs md:text-base"
            onClick={handleGptSearchClick}
          >
            {" "}
            {showGptSearch ? "🏠Home " : " 🔍GPTSearch"}
          </button>
          {/* <img
            className="h-8 w-50 rounded-sm mr-5 px-5"
            src={user?.photoURL}
            alt="Usericon"
          /> */}
          <button
            onClick={() => setIsModalOpen(true)}
            title="Sign out"
            className="absolute md:top-6 md:right-6 right-8 mb-1 bg-red-500 text-white   px-3  md:py-1 mt-1 rounded
             hover:bg-red-800 transition-colors duration-300 ease-in-out"
          >
            ⎋
          </button>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Leaving So Soon?"
            onConfirm={() => {
              // Handle sign out logic here
              handlesignOut();
            }}
            confirmText="Go Now"
          >
            <p>
              You dont alaways need to sign out of Netflix. It will be
              redirected to home page
            </p>
          </Modal>
        </div>
      )}
    </div>
  );
};
export default Header;
