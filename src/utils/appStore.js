import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"; // Importing moviesReducer from moviesSlice.js
import gptSearchReducer from "./gptsearchSlice"; // Importing gptSearchReducer from gptsearchSlice.js
import configReducer from "./configSlice";

// Importing configReducer from configSlice.js
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer, // Assuming moviesReducer is imported from moviesSlice.js
    gptSearch: gptSearchReducer, // Import and add the GPT search reducer
    config: configReducer, // Import and add the config reducer
    
  },
});

export default appStore;
