import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
// Custom hook to fetch now playing movies and update store using dispatch
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const json = await response.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useNowPlayingMovies;
