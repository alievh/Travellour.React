import { createSlice } from "@reduxjs/toolkit";

export const OnlineUserSlice = createSlice({
  name: "onlineUser",
  initialState: {
    isOnline: [],
  },
  reducers: {
    setIsOnline: (state, action) => {
      state.isOnline = action.payload;
    },
  },
});

export function AddOnlineUser(dispatch: any, id: string | undefined) {
  dispatch(setIsOnline(id));
}

export const { setIsOnline } = OnlineUserSlice.actions;
export default OnlineUserSlice.reducer;
