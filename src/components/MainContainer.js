import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoContainer";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }
  const firstMovie = movies[0];
  console.log("First Movie:", firstMovie);
  const { original_title, overview ,id} = firstMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoContainer movieId={id} />
    </div>
  );
};

export default MainContainer;
