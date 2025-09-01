
import { useSelector } from "react-redux";

import useTrailerVideos from "../hooks/usetrailerVideos";
const VideoContainer = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerMovies);
  useTrailerVideos(movieId); //Custom hook to fetch trailer videos based on movieId
  return (
    <div className="w-screen">
      <iframe
        className="iframe-class w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;

/*
fetch('https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/
