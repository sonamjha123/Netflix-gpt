import React, { useState, useEffect } from "react";
import Header from "./Header";
import Modal from "./Modals";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
const Browse = () => {
  useNowPlayingMovies();// Custom hook to fetch now playing movies
  usePopularMovies(); // Custom hook to fetch popular movies
  useTopRatedMovies(); // Custom hook to fetch top rated movies
  useUpcomingMovies(); // Custom hook to fetch upcoming movies
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default Browse;

{/* 
      MainContainer
       - VideoBackground
       - VideoTitle
      SecondaryContainer
       - MovieList * n
        - Card * n
      */}