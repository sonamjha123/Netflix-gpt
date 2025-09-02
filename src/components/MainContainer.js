
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";
import React ,{ useState } from "react";
const MainContainer = () => {
  
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }
  const firstMovie = movies[0];
  
  const { original_title, overview ,id} = firstMovie;

  return (
    <div className="  dark:bg-netflix-dark dark:text-neutral-100 pt-[35%] md:pt-20  bg-gradient-to-b from-white to-transparent">
      <VideoTitle title={original_title} overview={overview}/>
      <VideoContainer movieId={id} />
    </div>
  );
};

export default MainContainer;
