import React from "react";
import { Image_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath){
    return null;
  }
  return (
    <div className="w-40 m-2 p-2 shadow-lg rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <img alt="movie poster" src={Image_CDN + posterPath} />
    </div>
  );
};
/*image path -> https://image.tmdb.org/t/p/w500 +  */
export default MovieCard;
