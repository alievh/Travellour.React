import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const ForumDetailSlice = createSlice({
  name: "forumDetail",
  initialState: {
    forum: {},
    loading: false,
    error: null,
  },
  reducers: {
    setForum: (state, action) => {
      state.forum = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function GetForumDetail(dispatch: any,navigate: any, id: string | undefined) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/forum/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("user") || "{}").token
      }`,
    },
  }).then((res) => {
    dispatch(setLoading(false));
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((data) => {
        // dispatch(setError(data.message.toString()));
        navigate("/notfound");
      });
    }
  });

  dispatch(setForum(response));
}

export const { setForum, setLoading, setError } = ForumDetailSlice.actions;
export default ForumDetailSlice.reducer;
