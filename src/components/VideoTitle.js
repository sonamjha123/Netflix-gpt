import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { togglePlayVideo } from "../utils/moviesSlice";
const VideoTitle = ({ title, overview }) => {
  const playVideo = useSelector((store) => store.movies?.playVideo);
  const dispatch = useDispatch();
  const handlePlay = () => {
    dispatch(togglePlayVideo());
  };
  return (
    <div className="  dark:text-neutral-100 w-screen aspect-video pt-[5%]  text-black bg-gradient-to-r absolute from-black-500 pl-2">
      <h1 className="  dark:text-neutral-800  text-neutral-500 text-xl md:text-4xl ml-6 px-1  font-bold">
        {title}
      </h1>
      <p className="  dark:text-neutral-800 hidden md:inline-block md:mt-8 mt-1 ml-8 md:py-6  py-4 text-xs md:text-lg w-1/4">
        {overview}
      </p>
      <div className="flex ml-6 mt-6 ">
        <button
          className="bg-neutral-300 py-1  dark:bg-neutral-400 dark:text-neutral-200 text-sm md:py-4 md:px-16 px-2 mr-4 ml-2 md:ml-6
         text-black font-semibold rounded-lg bg-opacity-90 hover:bg-opacity-60"
          onClick={handlePlay}
        >
          {playVideo ? "Pause" : "▶ Play"}
        </button>
        <button className="bg-gray-500  dark:text-neutral-200 hidden py-2 p-2 px-2 md:px-12 ml-2 md:inline-block text-white font-semibold rounded-lg bg-opacity-90 hover:bg-opacity-60">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
