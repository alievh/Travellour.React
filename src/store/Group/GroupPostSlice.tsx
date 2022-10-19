import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const GroupPostSlice = createSlice({
  name: "groupPosts",
  initialState: {
    groupPosts: [],
    loading: false,
    error: null,
  },
  reducers: {
    setGroupPosts: (state, action) => {
      state.groupPosts = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function GetGroupPosts(dispatch: any, id: string | undefined) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/group/Grouppostgetall/${id}`, {
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

  dispatch(setGroupPosts(response));
}

export const { setGroupPosts, setLoading, setError } = GroupPostSlice.actions;
export default GroupPostSlice.reducer;
