import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/UI/Button";

const Navbar = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  const [friendRequestsToggle, setFriendRequestsToggle] = useState(false);
  const [messageToggle, setMessageToggle] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);

  const friendRequestsToggleHandler = () => {
    if (messageToggle === true || notificationToggle === true) {
      setMessageToggle(false);
      setNotificationToggle(false);
    }
    setFriendRequestsToggle(!friendRequestsToggle);
  };

  const messageToggleHandler = () => {
    if (friendRequestsToggle === true || notificationToggle === true) {
      setFriendRequestsToggle(false);
      setNotificationToggle(false);
    }
    setMessageToggle(!messageToggle);
  };

  const notificationToggleHandler = () => {
    if (messageToggle === true || friendRequestsToggle === true) {
      setMessageToggle(false);
      setFriendRequestsToggle(false);
    }
    setNotificationToggle(!notificationToggle);
  };

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
                    <Button
                      type="button"
                      className="switch-mode nav-button"
                      buttonIcon="fa-solid fa-sun"
                    />
                  </li>
                  <li>
                    <Button
                      type="button"
                      className="nav-button"
                      buttonIcon="fa-solid fa-user-group"
                      onClick={friendRequestsToggleHandler}
                    />
                    {friendRequestsToggle ? (
                      <div className="friend-dropdown">
                        <h5>Friend Requests</h5>
                        <div className="friend-dropdown__body">
                          <p>You have no pending friends requests.</p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    <Button
                      type="button"
                      className="nav-button"
                      buttonIcon="fa-solid fa-envelope"
                      onClick={messageToggleHandler}
                    />
                    {messageToggle ? (
                      <div className="message-dropdown">
                        <h5>Messages</h5>
                        <div className="message-dropdown__body">
                          <p>You have no pending friends requests.</p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    <Button
                      type="button"
                      className="nav-button"
                      buttonIcon="fa-solid fa-bell"
                      onClick={notificationToggleHandler}
                    />
                    {notificationToggle ? (
                      <div className="notification-dropdown">
                        <h5>Notifications</h5>
                        <div className="notification-dropdown__body">
                          <p>You have no pending friends requests.</p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
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
