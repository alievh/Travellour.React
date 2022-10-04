import { configureStore } from "@reduxjs/toolkit";

import sidebarToggleSlice from "./sidebarToggle";
import AuthSlice from "./Auth/AuthSlice";
import UserDataSlice from "./User/UserData";
import EventSlice from "./Event/EventSlice";
import ForumSlice from "./Forum/ForumSlice";
import GroupSlice from "./Group/GroupSlice";
import PostSlice from "./Post/PostSlice";
import ForumDetailSlice from "./Forum/ForumDetailSlice";
import GroupDetailSlice from "./Group/GroupDetailSlice";
import ProfileSlice from "./User/ProfileSlice";
import FriendRequestSlice from "./Friend/FriendRequestSlice";

const store = configureStore({
  reducer: {
    sidebarToggle: sidebarToggleSlice,
    AuthReducer: AuthSlice,
    UserData: UserDataSlice,
    EventSlice: EventSlice,
    ForumSlice: ForumSlice,
    ForumDetailSlice: ForumDetailSlice,
    GroupSlice: GroupSlice,
    GroupDetailSlice: GroupDetailSlice,
    PostSlice: PostSlice,
    ProfileSlice: ProfileSlice,
    FriendRequestSlice: FriendRequestSlice
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
