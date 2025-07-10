// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeTElUWPBNs3txC13Pa_emvwKhHssK2GI",
  authDomain: "netflixgpt-b45b2.firebaseapp.com",
  projectId: "netflixgpt-b45b2",
  storageBucket: "netflixgpt-b45b2.firebasestorage.app",
  messagingSenderId: "13889001872",
  appId: "1:13889001872:web:16da96e10b24a9b33cbb15",
  measurementId: "G-B90M25WWTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);