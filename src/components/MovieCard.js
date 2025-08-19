import React from "react";
import { Image_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath){
    return null;
  }
  return (
    <div className=" w-28 md:w-40 mr-2 md:mr-4 p-2 shadow-lg rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <img alt="movie poster" src={Image_CDN + posterPath} />
    </div>
  );
};
/*image path -> https://image.tmdb.org/t/p/w500 +  */
export default MovieCard;
