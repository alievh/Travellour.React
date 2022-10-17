import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const NotificationPaginationSlice = createSlice({
  name: "notificationPagination",
  initialState: {
    notificationPagination: [],
    loading: false,
    error: null,
  },
  reducers: {
    setNotificationPagination: (state, action) => {
      state.notificationPagination = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function GetNotificationPagination(dispatch: any) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/notification/notificationpagination`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("user") || "{}").token
      }`,
    },
  }).then((res) => {
    if (res.ok) {
      dispatch(setLoading(false));
      return res.json();
    } else {
      return res.json().then((data) => {
        dispatch(setError(data.error.message.toString()));
      });
    }
  });


  dispatch(setNotificationPagination(response));
}

export const { setNotificationPagination, setLoading, setError } =
  NotificationPaginationSlice.actions;
export default NotificationPaginationSlice.reducer;
