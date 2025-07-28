import React, { useState } from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoContainer = ({ movieId }) => {
  const [trailerId, setTrailerid] = useState(null);
  const fetchVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    const filteredData = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : data.results[0];
    setTrailerid(trailer.key)
    console.log("Video Data:", data.results, "Trailer:", trailer);
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      <iframe
        width="960"
        height="960"
        src={"https://www.youtube.com/embed/"+ trailerId}
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
