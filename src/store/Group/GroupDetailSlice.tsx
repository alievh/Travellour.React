import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const GroupSlice = createSlice({
  name: "groupDetail",
  initialState: {
    group: [],
    loading: false,
    error: null,
  },
  reducers: {
    setGroup: (state, action) => {
      state.group = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function GetGroupDetail(dispatch: any, id: string | undefined) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/group/${id}`, {
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

  dispatch(setGroup(response));
}

export const { setGroup, setLoading, setError } = GroupSlice.actions;
export default GroupSlice.reducer;
