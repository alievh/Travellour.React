import { createSlice } from "@reduxjs/toolkit";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { logout } from "../Auth/AuthSlice";

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

export function AddOnlineUser(dispatch: any) {
  const connection = new HubConnectionBuilder()
    .withUrl("https://localhost:7101/onlinehub")
    .build();

  connection
    .start()
    .then(() =>
      connection
        .invoke(
          "IsOnline",
          JSON.parse(localStorage.getItem("user") || "{}").user.id
        )
        .catch((error: any) => console.log(error))
    )
    .then(() =>
      connection.on("activeUser", (id: any) => {
        dispatch(setIsOnline(id));
      })
    );
}

export function RemoveOnlineUser(dispatch: any) {
  const connection = new HubConnectionBuilder()
    .withUrl("https://localhost:7101/onlinehub")
    .build();

  connection
    .start()
    .then(() => {
      connection
        .invoke(
          "IsOffline",
          JSON.parse(localStorage.getItem("user") || "{}").user.id
        )
        .catch((error) => console.log(error));

      dispatch(logout());
      localStorage.removeItem("user");
    })
    .then(() =>
      connection.on("activeUser", (id) => {
        dispatch(setIsOnline(id));
      })
    );
}

export const { setIsOnline } = OnlineUserSlice.actions;
export default OnlineUserSlice.reducer;
