import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const FriendSlice = createSlice({
  name: "friend",
  initialState: {
    friends: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFriends: (state, action) => {
      state.friends = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function GetAllFriend(dispatch: any) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/friend/getallfriend`, {
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

  dispatch(setFriends(response));
}

export async function RemoveFriend(dispatch: any, id: string | undefined) {
  await fetch(`${baseUrl}/friend/deletefriend/${id}`, {
    method: "PUT",
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

  GetAllFriend(dispatch);
}

export async function CancelFriendRequest(dispatch: any, id: string | undefined) {
  await fetch(`${baseUrl}/friend/friendrequestcancel/${id}`, {
    method: "PUT",
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

export const { setFriends, setLoading, setError } = FriendSlice.actions;
export default FriendSlice.reducer;
