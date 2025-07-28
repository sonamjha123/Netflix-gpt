import React, { useState, useEffect } from "react";
import Header from "./Header";
import Modal from "./Modals";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();// Custom hook to fetch now playing movies
  return (
    <div>
      <Header />
      {/* 
      MainContainer
       - VideoBackground
       - VideoTitle
      SecondaryContainer
       - MovieList * n
        - Card * n
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default Browse;
