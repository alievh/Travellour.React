import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const MessageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    selectedUser: {},
    sendUserId: null,
    loading: false,
    error: null,
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setSendUserId: (state, action) => {
      state.sendUserId = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function GetMessages(dispatch: any, id: string) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/chat/${id}`, {
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

  dispatch(setSendUserId(id));
  dispatch(setMessages(response.reverse()));
}

export async function SendMessages(dispatch: any, id: string, message: any) {
  dispatch(setLoading(true));
  await fetch(`${baseUrl}/chat/messagesend`, {
    method: "POST",
    body: JSON.stringify(message),
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

  GetMessages(dispatch, id);
}

export async function GetSelectedUser(dispatch: any, id: string) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/user/${id}`, {
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

  dispatch(setSelectedUser(response));
}

export const { setSendUserId, setMessages, setSelectedUser, setLoading, setError } =
  MessageSlice.actions;
export default MessageSlice.reducer;
