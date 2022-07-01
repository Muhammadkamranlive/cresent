import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const UserSlice = createSlice({
  name: "userObject",
  initialState,
  reducers: {
    userObject: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = undefined;
    }
  },
});

// Action creators are generated for each case reducer function
export const { userObject } = UserSlice.actions;

export default UserSlice.reducer;
