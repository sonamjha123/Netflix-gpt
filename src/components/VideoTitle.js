import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-6 ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="mt-4 py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-gray-500 p-4 px-16 mr-2
         text-white font-semibold rounded-lg bg-opacity-90 hover:bg-opacity-60">
          ▶️ Play
        </button>

        <button className="bg-gray-500 p-4 px-12 ml-4 text-white font-semibold rounded-lg bg-opacity-90 hover:bg-opacity-60">ℹ️ More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
