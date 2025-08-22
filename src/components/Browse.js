
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GPTSearch"; // Importing the GPT search component
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingMovies(); // Custom hook to fetch now playing movies
  usePopularMovies(); // Custom hook to fetch popular movies
  useTopRatedMovies(); // Custom hook to fetch top rated movies
  useUpcomingMovies(); // Custom hook to fetch upcoming movies
  const toggleGptSearch = useSelector((store) => store.gptSearch.showGptSearch); // Accessing the GPT search visibility state from Redux store
  
  return (
    <div>
      <Header />
      {toggleGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;

{
  /* 
      MainContainer
       - VideoBackground
       - VideoTitle
      SecondaryContainer
       - MovieList * n
        - Card * n
      */
}
