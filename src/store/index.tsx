import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
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
import FriendSlice from "./Friend/FriendSlice";
import FriendSuggestionSlice from "./Friend/FriendSuggestionSlice";
import PostActionSlice from "./Post/PostActionSlice";
import OnlineUserSlice from "./Online/OnlineUserSlice";
import NotificationSlice from "./Notification/NotificationSlice";
import SinglePostSlice from "./Post/SinglePostSlice";
import UserPostSlice from "./Post/UserPostsSlice";

const store = configureStore({
  reducer: {
    sidebarToggle: sidebarToggleSlice,
    AuthReducer: AuthSlice,
    UserDataSlice: UserDataSlice,
    EventSlice: EventSlice,
    ForumSlice: ForumSlice,
    ForumDetailSlice: ForumDetailSlice,
    GroupSlice: GroupSlice,
    GroupDetailSlice: GroupDetailSlice,
    PostSlice: PostSlice,
    UserPostsSlice: UserPostSlice,
    SinglePostSlice: SinglePostSlice,
    PostActionSlice: PostActionSlice,
    ProfileSlice: ProfileSlice,
    FriendRequestSlice: FriendRequestSlice,
    FriendSuggestionSlice: FriendSuggestionSlice,
    FriendSlice: FriendSlice,
    OnlineUserSlice: OnlineUserSlice,
    NotificationSlice: NotificationSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(thunk),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
