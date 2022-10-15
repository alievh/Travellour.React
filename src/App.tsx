import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import EventCreate from "./pages/Events/EventCreate";
import Events from "./pages/Events/Events";
import ForumCreate from "./pages/Forums/ForumCreate";
import ForumDetail from "./pages/Forums/ForumDetail";
import Forums from "./pages/Forums/Forums";
import Friends from "./pages/Friends/Friends";
import Group from "./pages/Group/Group";
import GroupSetting from "./pages/Group/GroupSetting";
import GroupCreate from "./pages/Groups/GroupCreate";
import Groups from "./pages/Groups/Groups";
import Login from "./pages/Login/Login";
import Messages from "./pages/Messages/Messages";
import Newsfeed from "./pages/Newsfeed/Newsfeed";
import Notifications from "./pages/Notifications/Notifications";
import Password from "./pages/Password/Password";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Setting from "./pages/Setting/Setting";
import SinglePost from "./pages/SinglePost/SinglePost";
import User from "./pages/User/User";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/newsfeed" element={<Newsfeed />} />
            <Route path="/post/:id" element={<SinglePost />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/create" element={<EventCreate />} />
            <Route path="/group/:id" element={<Group />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/groups/create" element={<GroupCreate />} />
            <Route path="/group/setting/:id" element={<GroupSetting />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/forum/:id" element={<ForumDetail />} />
            <Route path="/forum/create" element={<ForumCreate />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/password" element={<Password />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/user/:id" element={<User />} />
          </Route>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
