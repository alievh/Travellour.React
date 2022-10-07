import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const ForumSlice = createSlice({
  name: "forums",
  initialState: {
    forums: [],
    loading: false,
    error: null,
  },
  reducers: {
    setForums: (state, action) => {
      state.forums = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function GetForums(dispatch: any) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/forum/forumgetall`, {
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

  dispatch(setForums(response));
}

export async function CreateForum(dispatch: any, forumCreate: any) {
  await fetch(`${baseUrl}/forum/forumcreate`, {
    method: "POST",
    body: JSON.stringify(forumCreate),
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("user") || "{}").token
      }`,
      "Content-Type": "application/json",
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

  GetForums(dispatch);
}

export const { setForums, setLoading, setError } = ForumSlice.actions;
export default ForumSlice.reducer;
