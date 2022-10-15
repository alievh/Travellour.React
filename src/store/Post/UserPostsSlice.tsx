import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const UserPostSlice = createSlice({
  name: "userPosts",
  initialState: {
    userPosts: [],
    loading: false,
    error: null,
  },
  reducers: {
    setUserPosts: (state, action) => {
      state.userPosts = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function GetUserPosts(dispatch: any, id: string | undefined) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/post/userpost/${id}`, {
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

  dispatch(setUserPosts(response));
}

export const { setUserPosts, setLoading, setError } = UserPostSlice.actions;
export default UserPostSlice.reducer;
