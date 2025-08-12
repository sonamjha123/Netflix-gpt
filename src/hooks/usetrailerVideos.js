import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerMovies } from "../utils/moviesSlice";

const useTrailerVideos = (movieId) => {
  const dispatch = useDispatch();
  const trailerMovies = useSelector((store) => store.movies.trailerMovies);

  const fetchVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    const filteredData = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : data.results[0];
    dispatch(addTrailerMovies(trailer));
  };

  useEffect(() => {
    !trailerMovies && fetchVideos();
  }, []);
};

export default useTrailerVideos;
