import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";
import { GetProfile } from "../User/ProfileSlice";

export const FriendSuggestionsSlice = createSlice({
  name: "friendRequest",
  initialState: {
    friendSuggestions: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFriendSuggestions: (state, action) => {
      state.friendSuggestions = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function SendFriendRequest(dispatch: any, id: string | undefined) {
  await fetch(`${baseUrl}/friend/addfriend/${id}`, {
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

  GetProfile(dispatch);
  GetFriendSuggestions(dispatch);
}

export async function GetFriendSuggestions(dispatch: any) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/friend/friendsuggestion`, {
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

  dispatch(setFriendSuggestions(response));
}

export const { setFriendSuggestions, setLoading, setError } =
  FriendSuggestionsSlice.actions;
export default FriendSuggestionsSlice.reducer;
