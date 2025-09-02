import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList"; // Import MovieList component
const GPTMovieSuggestions = () => {
  const gptSelector = useSelector((store) => store.gptSearch);
  const { movieResults, movieNames } = gptSelector;

  return (
    <div className="p-1 m-2 bg-black-600">
      {(movieNames && movieNames.length > 0) && (movieResults && movieResults.length > 0) ? (
        movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            moviesplaying={movieResults[index] || []}
          />
        ))
      ) : (
        <div className="text-neutral-500 bg-white dark:text-neutral-100 dark:bg-netflix-dark h-screen w-auto">
          <h3 className="text-center mt-14 text-2xl pt-24">No movie suggestions found</h3></div>
      )}
    </div>
  );
};

export default GPTMovieSuggestions;
