import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <div className="sidebar-section__header">
          <div className="sidebar-section__logo">
            <img />
          </div>
        </div>
        <div className="sidebar-section__main">
          <div className="sidebar-section__profile">
            <div className="profile-avatar">
              <img />
            </div>
            <div className="profile-userinfo">
              <a href="#">Marvin McKinney</a>
              <p>@marvin</p>
            </div>
          </div>
          <div className="sidebar-section__menu"></div>
          <div className="sidebar-section__forum"></div>
        </div>
        <div className="sidebar-section__footer"></div>
      </section>
    </aside>
  );
};

export default Sidebar;
