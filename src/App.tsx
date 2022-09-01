import React from "react";
import Layout from "./Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Newsfeed from "./pages/Newsfeed/Newsfeed";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
           <Route path="/newsfeed" element={<Newsfeed />} />
            {/* <Route path="/landing" element={<Landing />} />
            <Route path="/profile" element={<Profile />} />  */}
          </Route>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
