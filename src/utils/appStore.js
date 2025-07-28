import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"; // Importing moviesReducer from moviesSlice.js

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer, // Assuming moviesReducer is imported from moviesSlice.js
    },
})


export default appStore;