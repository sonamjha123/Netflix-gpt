import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "en", 
  },// Default language 
  reducers: {
    changeLanguage: (state, action) => {  
        state.language = action.payload; // Update the language in the state
    },
  },
})

export const { changeLanguage } = configSlice.actions; // Export the action creator for changing language 

export default configSlice.reducer; // Export the reducer to be used in the store