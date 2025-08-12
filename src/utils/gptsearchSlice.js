import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    movieResults: null, // Store GPT movie results
    movieNames: null, // Store GPT movie names
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch; // Toggle the visibility of GPT search
    },
    addGptMovieresults:(state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = movieResults; // Store GPT movie results
      state.movieNames = movieNames; // Store GPT movie names
    },
  },
});

export const { toggleGptSearchView, addGptMovieresults } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
 