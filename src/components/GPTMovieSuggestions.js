import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList"; // Import MovieList component
const GPTMovieSuggestions = () => {
  const gptSelector = useSelector((store) => store.gptSearch);

  const { movieResults, movieNames } = gptSelector;
  if (!movieResults || !movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black-600">
      {movieNames.map((movieName, index) => (
       <MovieList
          key={movieName}
          title={movieName}
          moviesplaying={movieResults[index] || []} // Use the corresponding movie results for each movie name
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
