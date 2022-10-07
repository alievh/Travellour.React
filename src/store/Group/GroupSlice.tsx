import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";
import { GetGroupDetail } from "./GroupDetailSlice";

export const GroupSlice = createSlice({
  name: "groups",
  initialState: {
    groups: [],
    loading: false,
    error: null,
  },
  reducers: {
    setGroups: (state, action) => {
      state.groups = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function GetGroups(dispatch: any) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/group/groupgetall`, {
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

  dispatch(setGroups(response));
}

export async function CreateGroup(formData: any) {
  await fetch(`${baseUrl}/group/groupcreate`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("user") || "{}").token
      }`,
      Accept: "*/*",
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

export async function JoinGroup(
  dispatch: any,
  id: string | undefined,
) {
  await fetch(`${baseUrl}/group/groupjoin/${id}`, {
    method: "POST",
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

    GetGroupDetail(dispatch, id);
    GetGroups(dispatch);
}

export const { setGroups, setLoading, setError } = GroupSlice.actions;
export default GroupSlice.reducer;
