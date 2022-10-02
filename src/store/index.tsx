import { configureStore } from "@reduxjs/toolkit";

import sidebarToggleSlice from "./sidebarToggle";
import AuthSlice from "./Auth/AuthSlice";
import UserDataSlice from "./User/UserData";
import EventSlice from "./Event/EventSlice";
import ForumSlice from "./Forum/ForumSlice";
import GroupSlice from "./Group/GroupSlice";
import PostSlice from "./Post/PostSlice";

const store = configureStore({
  reducer: {
    sidebarToggle: sidebarToggleSlice,
    AuthReducer: AuthSlice,
    UserData: UserDataSlice,
    EventSlice: EventSlice,
    ForumSlice: ForumSlice,
    GroupSlice: GroupSlice,
    PostSlice: PostSlice
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
