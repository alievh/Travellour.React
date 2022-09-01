import { Outlet } from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";
import Sidebar from "./layouts/Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout;