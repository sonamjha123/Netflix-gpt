import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-30">
        <img
          className="h-screen object-cover w-screen"
          src={BG_URL}
          alt="Netflix promotional background"
        />
      </div>
      <div className=" dark:bg-netflix-dark dark:text-neutral-100 min-h-screen relative z-20">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
