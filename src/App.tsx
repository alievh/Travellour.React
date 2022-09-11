import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Newsfeed from "./pages/Newsfeed/Newsfeed";
import Profile from "./pages/Profile/Profile";
import Friends from "./pages/Friends/Friends";
import Events from "./pages/Events/Events";
import EventCreate from "./pages/Events/EventCreate";
import Groups from "./pages/Groups/Groups";
import Setting from "./pages/Setting/Setting";
import Forums from "./pages/Forums/Forums";
import Group from "./pages/Group/Group";
import Password from "./pages/Password/Password";
import Notifications from "./pages/Notifications/Notifications";
import GroupCreate from "./pages/Groups/GroupCreate";
import ForumCreate from "./pages/Forums/ForumCreate";
import ForumDetail from "./pages/Forums/ForumDetail";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/newsfeed" element={<Newsfeed />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/create" element={<EventCreate />} />
            <Route path="/group" element={<Group />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/groups/create" element={<GroupCreate />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/forum/detail" element={<ForumDetail />} />
            <Route path="/forum/create" element={<ForumCreate />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/password" element={<Password />} />
            <Route path="/notifications" element={<Notifications />} />
          </Route>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
