import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";

export const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    loading: false,
    error: null,
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function GetProfile(dispatch: any) {
  dispatch(setLoading(true));
  const response = await fetch(
    `${baseUrl}/user/userprofile/${
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
    dispatch(setLoading(false));
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((data) => {
        dispatch(setError(data.error.message.toString()));
      });
    }
  });

  dispatch(setProfile(response));
}

export async function ProfilePhotoChanger(dispatch:any, formData: any) {
  const response = await fetch(`${baseUrl}/user/changeprofilephoto`, {
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
        setError(data?.error?.message?.toString());
      });
    }
  });

  GetProfile(dispatch);
}

export async function CoverPhotoChanger(dispatch: any, formData: any) {
  const response = await fetch(`${baseUrl}/user/changecoverphoto`, {
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
        setError(data?.error?.message?.toString());
      });
    }
  });

  GetProfile(dispatch);
}

export const { setProfile, setLoading, setError } = ProfileSlice.actions;
export default ProfileSlice.reducer;
