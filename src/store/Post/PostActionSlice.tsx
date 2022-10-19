import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../Fetch/FetchConfiguration";
import { GetForumDetail } from "../Forum/ForumDetailSlice";
import { GetGroupPosts } from "../Group/GroupPostSlice";
import { GetPosts } from "./PostSlice";
import { GetSinglePost } from "./SinglePostSlice";
import { GetUserPosts } from "./UserPostsSlice";

export const PostSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export async function AddLike(
  dispatch: any,
  id: string | undefined,
  userId: string | undefined,
  groupId: string | undefined
) {
  await fetch(`${baseUrl}/post/likeadd/${id}`, {
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

  GetPosts(dispatch);
  GetSinglePost(dispatch, id);
  if (userId !== undefined) {
    GetUserPosts(dispatch, userId);
  }
  if (groupId !== undefined) {
    GetGroupPosts(dispatch, groupId);
  }
}

export async function DeleteLike(
  dispatch: any,
  id: string | undefined,
  userId: string | undefined,
  groupId: string | undefined
) {
  await fetch(`${baseUrl}/post/likedelete/${id}`, {
    method: "PUT",
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

  GetPosts(dispatch);
  GetSinglePost(dispatch, id);
  if (userId !== undefined) {
    GetUserPosts(dispatch, userId);
  }
  if (groupId !== undefined) {
    GetGroupPosts(dispatch, groupId);
  }
}

export async function AddComment(
  dispatch: any,
  comment: any,
  id: string | undefined,
  userId: string | undefined,
  groupId: string | undefined
) {
  await fetch(`${baseUrl}/post/commentadd`, {
    method: "POST",
    body: JSON.stringify(comment),
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

  if (userId !== undefined) {
    GetUserPosts(dispatch, userId);
  }
  if (groupId !== undefined) {
    GetGroupPosts(dispatch, groupId);
  }
  if (id === undefined) {
    GetPosts(dispatch);
    GetSinglePost(dispatch, comment.postId);
  } else if (id !== undefined) {
    GetForumDetail(dispatch, id);
  }
}

export async function DeleteComment(
  dispatch: any,
  id: string | undefined,
  postId: string | undefined,
  forumId: string | undefined,
  groupId: string | undefined,
  postOwenerId: string | undefined
) {
  await fetch(`${baseUrl}/post/commentdelete/${id}`, {
    method: "PUT",
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

  if(postOwenerId !== undefined) {
    GetUserPosts(dispatch, postOwenerId);
  }
  if(groupId !== undefined) {
    GetGroupPosts(dispatch, groupId);
  }
  if (forumId !== undefined) {
    GetForumDetail(dispatch, forumId);
  } else if (forumId === undefined) {
    GetPosts(dispatch);
    GetSinglePost(dispatch, postId);
  }
}
export const { setPosts, setLoading, setError } = PostSlice.actions;
export default PostSlice.reducer;
