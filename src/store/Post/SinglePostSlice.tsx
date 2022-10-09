import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const SinglePostSlice = createSlice({
  name: "post",
  initialState: {
    post: {},
    loading: false,
    error: null,
  },
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function GetSinglePost(dispatch: any, id: string | undefined) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/post/${id}`, {
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

  dispatch(setPost(response));
}

export const { setPost, setLoading, setError } = SinglePostSlice.actions;
export default SinglePostSlice.reducer;
