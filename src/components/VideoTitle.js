import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
      <div className="w-screen aspect-video pt-[10%] absolute text-white bg-gradient-to-r from-black-500 pl-2">
      <h1 className="text-4xl ml-8 font-bold">{title}</h1>
      <p className="mt-8 ml-8 py-6 text-md w-1/2">{overview}</p>
      <div className="flex ml-6 mt-6">
        <button className="bg-white p-4 px-16 mr-4 ml-8
         text-black font-semibold rounded-lg bg-opacity-90 hover:bg-opacity-60">
          ▶ Play
        </button>
        <button className="bg-gray-500 p-4 px-12 ml-4 text-white font-semibold rounded-lg bg-opacity-90 hover:bg-opacity-60">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
