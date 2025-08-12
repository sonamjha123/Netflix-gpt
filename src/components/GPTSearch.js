import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img
          className="w-full h-full"
          src={BG_URL}
          alt="Netflix promotional background"
        />
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
      
    </div>
  );
};

export default GptSearch;
