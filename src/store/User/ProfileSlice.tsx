import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";
import { GetUserData } from "./UserData";

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

export async function GetProfile(
  dispatch: any,
  navigate: any,
  id: string | undefined
) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/user/userprofile/${id}`, {
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
        // dispatch(setError(data.error.message.toString()));
        navigate("/notfound");
      });
    }
  });

  dispatch(setProfile(response));
}

export async function ProfilePhotoChanger(
  dispatch: any,
  navigate: any,
  formData: any,
  id: string | undefined
) {
  await fetch(`${baseUrl}/user/changeprofilephoto`, {
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

  GetProfile(dispatch, navigate, id);
  GetUserData(dispatch);
}

export async function CoverPhotoChanger(
  dispatch: any,
  navigate: any,
  formData: any,
  id: string | undefined
) {
  await fetch(`${baseUrl}/user/changecoverphoto`, {
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

  GetProfile(dispatch, navigate, id);
  GetUserData(dispatch);
}

export const { setProfile, setLoading, setError } = ProfileSlice.actions;
export default ProfileSlice.reducer;
