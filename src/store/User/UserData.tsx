import { createSlice } from "@reduxjs/toolkit";

export const UserDataSlice = createSlice({
  name: "userData",
  initialState: {
    user: null,
  },
  reducers: {
    getUserData: (state, action) => {
      state.user = action.payload.user;
    },
  }
});

export const getUserData = UserDataSlice.actions;
export default UserDataSlice.reducer;
