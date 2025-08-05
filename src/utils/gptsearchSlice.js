import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch; // Toggle the visibility of GPT search
    },
  },
});

export const { toggleGptSearchView } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
 