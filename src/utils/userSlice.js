import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null, // if no user then make initialState as null
  reducers: {
    addUser: (state, action) => {
      // action.payload is the user object that we want to add to the state
      return action.payload;
    },

    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
