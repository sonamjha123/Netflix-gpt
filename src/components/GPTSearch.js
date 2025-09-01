import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-50">
        <img
          className=" h-screen object-cover w-screen"
          src={BG_URL}
          alt="Netflix promotional background"
        />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
