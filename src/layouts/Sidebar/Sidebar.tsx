import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SidebarItem from "../../components/UI/SidebarItem";
import { sidebarToggleAction } from "../../store/sidebarToggle";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { GetUserData } from "../../store/User/UserData";

const Sidebar = () => {
  const dispatch = useDispatch();

  const isSidebarActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const user = useSelector((state: any) => state.UserDataSlice);

  useEffect(() => {
    GetUserData(dispatch);
  }, [dispatch]);

  const sideBarToggleHandler = () => {
    dispatch(sidebarToggleAction.toggleSidebar());
  };

  return (
    // Sidebar - START
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
      {/* Sidebar Section - START */}
      <section className={`sidebar-section ${!isSidebarActive && "toggle"}`}>
        {/* Sidebar Section Header - START */}
        <div className="sidebar-section__header">
          <div
            className={`sidebar-section__logo ${
              !isSidebarActive && "sidebar-notactive"
            }`}
          >
            <Link to="/newsfeed">
              <img
                src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/themes/socialv-themes/assets/images/logo-mini.svg"
                alt="logo"
              />
              {isSidebarActive && <h2>Travellour</h2>}
            </Link>
          </div>
        </div>
        {/* Sidebar Section Header - END */}
        {/* Sidebar Section Main - START */}
        <div className="sidebar-section__main">
          <div className="sidebar-section__profile">
            <div className="profile-avatar">
              {user.userData.profileImage === null ? (
                <Link to="/profile">
                <img
                  src={require("../../assets/images/defaultprofilephoto.jpg")}
                  alt="User Avatar"
                />
              </Link>
              ) : (
                <Link to="/profile">
                  <img
                    src={`https://localhost:7101/img/${user.userData.profileImage}`}
                    alt="User Avatar"
                  />
                </Link>
              )}
            </div>
            {isSidebarActive && (
              <div className="profile-userinfo">
                <Link to="/profile">
                  {user.userData.firstname} {user.userData.lastname}
                </Link>
                <p>@{user.userData.userName}</p>
              </div>
            )}
          </div>
          <div className="sidebar-section__menu">
            {isSidebarActive && <div className="menu-label">Menu</div>}
            <ul>
              <SidebarItem
                innerText="Newsfeed"
                iconClass="fa-solid fa-file-lines"
                url="/newsfeed"
              />
              <SidebarItem
                innerText="Friends"
                iconClass="fa-solid fa-user"
                url="/friends"
              />
              <SidebarItem
                innerText="Messages"
                iconClass="fa-solid fa-message"
                url="/messages"
              />
              <SidebarItem
                innerText="Groups"
                iconClass="fa-solid fa-user-group"
                url="/groups"
              />
              <SidebarItem
                innerText="Events"
                iconClass="fa-solid fa-person-hiking"
                url="/events"
              />
            </ul>
            <div className="sidebar-section__forum">
              {isSidebarActive && <div className="menu-label">Forum</div>}
              <ul>
                <SidebarItem
                  innerText="All Forums"
                  iconClass="fa-solid fa-comments"
                  url="/forums"
                />
              </ul>
            </div>
          </div>
        </div>
        {/* Sidebar Section Main - END */}
        {/* Sidebar Section Footer - START */}
        <div
          className={
            isSidebarActive
              ? "sidebar-section__footer sidebar-active"
              : "sidebar-section__footer"
          }
        >
          <div className="sidebar-section__settings">
            <ul className={isSidebarActive ? "list" : "list sidebar-notactive"}>
              <SidebarItem iconClass="fa-solid fa-lock" url="/password" />
              <SidebarItem iconClass="fa-solid fa-bell" url="/notifications" />
              <SidebarItem iconClass="fa-solid fa-gear" url="/setting" />
              <SidebarItem iconClass="fa-solid fa-user-group" url="/groups" />
            </ul>
          </div>
        </div>
        {/* Sidebar Section Footer - END */}
      </section>
      {/* Sidebar Section - END */}
    </aside>
    // Sidebar - END
  );
};

export default Sidebar;
