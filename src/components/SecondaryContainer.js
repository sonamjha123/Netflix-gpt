import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="md:-mt-20 pl-1 md:pl-1 relative z-20 bg-white">
      {/* 
      MovieList - Popular
      MovieList - Top Rated
      MovieList - Upcoming
      MovieList - Now Playing 
       */}
      <MovieList
        title={"Now Playing"}
        moviesplaying={movies.nowPlayingMovies}
      />
      <MovieList title={"Top Rated"} moviesplaying={movies.topRatedMovies} />

      <MovieList title={"Popular"} moviesplaying={movies.popularMovies} />
      <MovieList title={"Upcoming"} moviesplaying={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
