import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const FriendRequestPaginationSlice = createSlice({
  name: "friendRequestPagination",
  initialState: {
    friendRequestsPagination: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFriendRequestsPagination: (state, action) => {
      state.friendRequestsPagination = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function GetFriendRequestsPagination(dispatch: any) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/friend/friendrequestspagination`, {
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

  console.log(response);
  dispatch(setFriendRequestsPagination(response));
}

export const { setFriendRequestsPagination, setLoading, setError } =
  FriendRequestPaginationSlice.actions;
export default FriendRequestPaginationSlice.reducer;
