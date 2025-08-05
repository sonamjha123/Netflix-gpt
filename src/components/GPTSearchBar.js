import React from "react";
import languageConstants from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector(store=> store.config.language)
  console.log("GPTSearchBar langKey", langKey);
  return (
    <div className="  pt-[10%] flex justify-center">
      <form className="bg-gray-700 w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={languageConstants[langKey]?.gptSearchPlaceHolder}
          className="p-4 m-4 col-span-8 border-2 border-gray-300 rounded-lg"
        />
        <button className="col-span-3 p-4 m-4 bg-red-600 text-white rounded-lg">
          {languageConstants[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
