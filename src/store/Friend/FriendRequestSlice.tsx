import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const FriendRequestSlice = createSlice({
  name: "friendRequest",
  initialState: {
    friendRequests: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFriendRequests: (state, action) => {
      state.friendRequests = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function SendFriendRequest(id: string | undefined) {
  const response = await fetch(`${baseUrl}/friend/addfriend/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("user") || "{}").token
      }`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((data) => {
        setError(data.error.message.toString());
      });
    }
  });
}

export async function GetFriendRequests(dispatch: any) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/friend/friendrequests`, {
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

  dispatch(setFriendRequests(response));
}

export const { setFriendRequests, setLoading, setError } =
  FriendRequestSlice.actions;
export default FriendRequestSlice.reducer;
