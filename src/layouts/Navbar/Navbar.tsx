import React from "react";
import { useSelector } from "react-redux";
import Input from "../../components/UI/Input";

const Navbar = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    <nav className={`nav-bar ${!sidebarIsActive && "sidebar-notactive"}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="nav-bar__container">
              <div className="nav-bar__search">
                <div className="form-outline">
                  <input
                    type="search"
                    id="seatch"
                    className="form-control"
                    placeholder="Search Here"
                    aria-label="Search"
                  />
                </div>
              </div>
              <div className="nav-bar__navigation">
                <ul>
                  <li>
                    <button className="switch-mode">
                      <i className="fa-solid fa-sun"></i>
                    </button>
                  </li>
                  <li>
                    <button>
                      <i className="fa-solid fa-user-group"></i>
                    </button>
                  </li>
                  <li>
                    <button>
                      <i className="fa-solid fa-envelope"></i>
                    </button>
                  </li>
                  <li>
                    <button>
                      <i className="fa-solid fa-bell"></i>
                    </button>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
