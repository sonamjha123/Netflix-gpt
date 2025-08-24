import React, { useRef, useState } from "react";
import languageConstants from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants"; // Import API options for TMDB
import { addGptMovieresults } from "../utils/gptsearchSlice";
const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      const json = await data.json();
      return json.results;
    } catch (err) {
      console.error("TMDB fetch error:", err);
      return [];
    }
  };

  const handleSearchGptClick = async () => {
    if (loading) return; // Prevent multiple clicks while loading
    if (!searchText.current) return;
    const prompt = searchText.current.value;
    if (!prompt) return;

    setLoading(true);
    let recommendedMovies = [];

    try {
      const response = await fetch("/api/index", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();

      recommendedMovies = data?.reply?.movie_titles || [];
    } catch (err) {
      console.error("GPT fetch error:", err);
    } finally {
      setLoading(false);
    }
    // For each recommended movie, search TMDB API
    const promiseArray = recommendedMovies.map((movie) =>
      searchMovieTMDB(movie)
    );
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieresults({
        movieNames: recommendedMovies,
        movieResults: tmdbResults,
      })
    );
  };
  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black bg-opacity-70 w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={languageConstants[langKey]?.gptSearchPlaceHolder}
          className="text-xs md:text-base p-2 m-2 col-span-8 border-2 border-gray-300 rounded-lg"
        />
        <button
          className="text-xs md:text-base col-span-3 p-2 m-3 bg-red-500 hover:bg-red-800 text-white rounded-lg"
          onClick={handleSearchGptClick}
        >
          {languageConstants[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
