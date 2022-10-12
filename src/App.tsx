import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
import GroupSetting from "./pages/Group/GroupSetting";
import ForumCreate from "./pages/Forums/ForumCreate";
import ForumDetail from "./pages/Forums/ForumDetail";
import User from "./pages/User/User";
import SinglePost from "./pages/SinglePost/SinglePost";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/newsfeed" element={<PrivateRoute><Newsfeed /></PrivateRoute>} />
            <Route path="/post/:id" element={<PrivateRoute><SinglePost /></PrivateRoute>} />
            <Route path="/friends" element={<PrivateRoute><Friends /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/events" element={<PrivateRoute><Events /></PrivateRoute>} />
            <Route path="/events/create" element={<PrivateRoute><EventCreate /></PrivateRoute>} />
            <Route path="/group/:id" element={<PrivateRoute><Group /></PrivateRoute>} />
            <Route path="/groups" element={<PrivateRoute><Groups /></PrivateRoute>} />
            <Route path="/groups/create" element={<PrivateRoute><GroupCreate /></PrivateRoute>} />
            <Route path="/group/setting/:id" element={<PrivateRoute><GroupSetting /></PrivateRoute>} />
            <Route path="/forums" element={<PrivateRoute><Forums /></PrivateRoute>} />
            <Route path="/forum/:id" element={<PrivateRoute><ForumDetail /></PrivateRoute>} />
            <Route path="/forum/create" element={<PrivateRoute><ForumCreate /></PrivateRoute>} />
            <Route path="/setting" element={<PrivateRoute><Setting /></PrivateRoute>} />
            <Route path="/password" element={<PrivateRoute><Password /></PrivateRoute>} />
            <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
            <Route path="/user/:id" element={<PrivateRoute><User /></PrivateRoute>} />
          </Route>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
