import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout;