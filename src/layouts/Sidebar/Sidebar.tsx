import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <div className="sidebar-section__header">
          <div className="sidebar-section__logo">
            <h2>Travellour</h2>
          </div>
        </div>
        <div className="sidebar-section__main">
          <div className="sidebar-section__profile">
            <div className="profile-avatar">
              <a href="#">
                <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg" />
              </a>
            </div>
            <div className="profile-userinfo">
              <a href="#">Marvin McKinney</a>
              <p>@marvin</p>
            </div>
          </div>
          <div className="sidebar-section__menu">
            <div className="menu-label">Menu</div>
            <ul>
              <li>
                <a href="#">Newsfeed</a>
              </li>
              <li>
                <a href="#">Members</a>
              </li>
              <li>
                <a href="#">Groups</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Memories</a>
              </li>
            </ul>
          </div>
          <div className="sidebar-section__forum">
            <div className="menu-label">Forum</div>
            <ul>
              <li>
                <a href="#">All Forums</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-section__footer">
          <div className="sidebar-section__settings">
            <ul>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
            </ul>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
