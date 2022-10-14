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

export async function GetMyGroups(dispatch: any) {
  dispatch(setLoading(true));
  const response = await fetch(
    `${baseUrl}/group/mygroupget/${
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

  dispatch(setGroups(response));
}

export async function CreateGroup(dispatch: any, groupCreate: any) {
  await fetch(`${baseUrl}/group/groupcreate`, {
    method: "POST",
    body: JSON.stringify(groupCreate),
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

  GetGroups(dispatch);
}

export async function JoinGroup(dispatch: any, id: string | undefined) {
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

export async function LeaveGroup(dispatch: any, id: string | undefined) {
  await fetch(`${baseUrl}/group/groupleave/${id}`, {
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

export async function KickFromGroup(dispatch: any, userId: string | undefined, groupId: string | undefined) {
  await fetch(`${baseUrl}/group/groupkick/${userId}/${groupId}`, {
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

  GetGroupDetail(dispatch, groupId);
  GetGroups(dispatch);
}

export async function ChangeGroup(dispatch: any, group: any) {
  await fetch(`${baseUrl}/group/groupchange`, {
    method: "POST",
    body: JSON.stringify(group),
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

  GetGroupDetail(dispatch, group.id);
  GetGroups(dispatch);
}

export async function SearchGroup(dispatch: any, groupName: string | undefined) {
  dispatch(setLoading(true));
  const response = await fetch(`${baseUrl}/group/groupsearch/${groupName}`, {
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

export const { setGroups, setLoading, setError } = GroupSlice.actions;
export default GroupSlice.reducer;
