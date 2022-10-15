import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";


export const UserDataSlice = createSlice({
  name: "userData",
  initialState: {
    userData: {},
    loading: false,
    error: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export async function GetUserData(dispatch: any) {
  dispatch(setLoading(true));
  const response = await fetch(
    `${baseUrl}/user/${
      JSON.parse(localStorage.getItem("user") || "{}").user.id
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
      },
    }
  ).then((res) => {
    if (res.ok) {
      dispatch(setLoading(false));
      return res.json();
    } else {
      return res.json().then((data) => {
        dispatch(setError(data.error.message.toString()));
      });
    }
  });

  dispatch(setUserData(response));
}

export const { setUserData, setLoading, setError } = UserDataSlice.actions;
export default UserDataSlice.reducer;
