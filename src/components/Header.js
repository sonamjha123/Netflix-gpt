import React from "react";
import Modal from "./Modals";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { useSelector } from "react-redux";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const handlesignOut = () => {
    // setIsModalOpen(true);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/"); // Navigate to the home page after successful sign-out
      })
      .catch((error) => {
        navigate("/error"); // Handle any errors that occur during sign-out
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black to-transparent top-0 left-0 right-0 flex items-center justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 rounded-full mr-20 "
            // src="https://avatars.githubusercontent.com/u/58945854?v=4"
            src={user?.photoURL}
            alt="Usericon"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-5 right-4 bg-red-600 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Leaving So Soon?"
            onConfirm={() => {
              // Handle sign out logic here
              console.log("User signed out");
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
