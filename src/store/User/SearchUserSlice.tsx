import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const SearchUserSlice = createSlice({
  name: "searchUser",
  initialState: {
    searchUser: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSearchUser: (state, action) => {
      state.searchUser = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function GetSearchUser(dispatch: any, input: string | undefined) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/user/usersearch/${input}`, {
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
        dispatch(setError(data.error.message.toString()));
      });
    }
  });

  dispatch(setSearchUser(response));
}

export const { setSearchUser, setLoading, setError } = SearchUserSlice.actions;
export default SearchUserSlice.reducer;
