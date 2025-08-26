import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesplaying }) => {
  return (
    <div>
      <div className="p-4 dark:bg-netflix-dark dark:text-neutral-100 bg-white  bg-opacity-80 shadow-2xl w-full">
        <h1 className=" text-sm md:text-2xl p-2  dark:bg-netflix-dark dark:text-neutral-100 text-black">{title}</h1>
        <div className="flex flex-wrap">
            {moviesplaying?.map((movie) => (    
                <MovieCard
                    key={movie.id}
                    posterPath={movie.poster_path}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
