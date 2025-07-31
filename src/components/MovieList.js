import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesplaying }) => {
  return (
    <div>
      <div className="p-4 bg-">
        <h1 className="text-2xl p-2 text-white">{title}</h1>
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
