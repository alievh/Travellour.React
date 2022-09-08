import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Newsfeed from "./pages/Newsfeed/Newsfeed";
import Profile from "./pages/Profile/Profile";
import Friends from "./pages/Friends/Friends";
import Events from "./pages/Events/Events";
import Groups from "./pages/Groups/Groups";
import Setting from "./pages/Setting/Setting";
import Forums from "./pages/Forums/Forums";

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
            <Route path="/groups" element={<Groups />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
