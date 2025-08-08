import React, { useRef , useState} from "react";
import languageConstants from "../utils/languageConstants";
import { useSelector } from "react-redux";
import  client  from "../utils/openai"; // Import the OpenAI client
const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const handleSearchGptClick = async () => {
    //Make an API call to OpenAI and get the movie results
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest movies for " +
    //   searchText.current.value +
    //   " only give 5 movies names, comma separated like example result based on the latest movies available in the market.Example result: Movie1, Movie2, Movie3, Movie4, Movie5";

const prompt = searchText.current.value;
		if (!prompt) return;

		setLoading(true);
		let recommendedMovies = [];

    try {
			const response = await fetch("http://localhost:3001/api/ask", {
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

  }
  return (
    <div className="  pt-[10%] flex justify-center">
      <form
        className="bg-gray-700 w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={languageConstants[langKey]?.gptSearchPlaceHolder}
          className="p-4 m-4 col-span-8 border-2 border-gray-300 rounded-lg"
        />
        <button
          className="col-span-3 p-4 m-4 bg-red-600 text-white rounded-lg"
          onClick={handleSearchGptClick}
        >
          {languageConstants[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
