import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SidebarItem from "../../components/UI/SidebarItem";
import { sidebarToggleAction } from "../../store/sidebarToggle";

const Sidebar = () => {
  const sidebarToggleDispatch = useDispatch();
  const isSidebarActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  const sideBarToggleHandler = () => {
    sidebarToggleDispatch(sidebarToggleAction.toggleSidebar());
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__toggle" onClick={sideBarToggleHandler}>
        <span>
          {isSidebarActive && (
            <i className="fa-sharp fa-solid fa-angle-left"></i>
          )}
          {!isSidebarActive && (
            <i className="fa-sharp fa-solid fa-angle-right"></i>
          )}
        </span>
      </div>
      <section className={`sidebar-section ${!isSidebarActive && "toggle"}`}>
        <div className="sidebar-section__header">
          <div
            className={`sidebar-section__logo ${
              !isSidebarActive && "sidebar-notactive"
            }`}
          >
            <a href="/newsfeed">
              <img
                src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/themes/socialv-theme/assets/images/logo-mini.svg"
                alt="logo"
              />
              {isSidebarActive && <h2>Travellour</h2>}
            </a>
          </div>
        </div>
        <div className="sidebar-section__main">
          <div className="sidebar-section__profile">
            <div className="profile-avatar">
              <a href="#">
                <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg" />
              </a>
            </div>
            {isSidebarActive && (
              <div className="profile-userinfo">
                <a href="#">Marvin McKinney</a>
                <p>@marvin</p>
              </div>
            )}
          </div>
          <div className="sidebar-section__menu">
            {isSidebarActive && <div className="menu-label">Menu</div>}
            <ul>
              <SidebarItem
                innerText="Newsfeed"
                iconClass="fa-solid fa-file-lines"
              />
              <SidebarItem innerText="Members" iconClass="fa-solid fa-user" />
              <SidebarItem
                innerText="Groups"
                iconClass="fa-solid fa-user-group"
              />
              <SidebarItem
                innerText="Events"
                iconClass="fa-solid fa-person-hiking"
              />
              <SidebarItem innerText="Memories" iconClass="fa-solid fa-image" />
            </ul>
          </div>
          <div className="sidebar-section__forum">
            {isSidebarActive && <div className="menu-label">Forum</div>}
            <ul>
              <SidebarItem
                innerText="All Forums"
                iconClass="fa-solid fa-comments"
              />
            </ul>
          </div>
        </div>
        <div className="sidebar-section__footer">
          <div className="sidebar-section__settings">
            <ul className={isSidebarActive ? "list" : "list sidebar-notactive"}>
              <li>
                <a href="#">
                <i className="fa-solid fa-lock"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-bell"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-gear"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-user-group"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
