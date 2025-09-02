import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerMovies: null,
    popularMovies:null,
    topRatedMovies:null,
    upcomingMovies:null,
    playVideo: false,
    
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerMovies: (state, action) => {
      state.trailerMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    togglePlayVideo: (state) => {
      state.playVideo = !state.playVideo;
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrailerMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  togglePlayVideo,
  
} = moviesSlice.actions;
export default moviesSlice.reducer;
