import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../../components/UI/Button";
import ContainerFluid from "../../components/Bootstrap/ContainerFluid";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import { logout } from "../../store/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { clearUserData } from "../../store/User/UserData";

const Navbar = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  const userData = useSelector((state: any) => state.UserData.user);

  const [friendRequestsToggle, setFriendRequestsToggle] = useState(false);
  const [messageToggle, setMessageToggle] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const friendRequestsToggleHandler = () => {
    if (
      messageToggle === true ||
      notificationToggle === true ||
      profileToggle === true
    ) {
      setMessageToggle(false);
      setNotificationToggle(false);
      setProfileToggle(false);
    }
    setFriendRequestsToggle(!friendRequestsToggle);
  };

  const messageToggleHandler = () => {
    if (
      friendRequestsToggle === true ||
      notificationToggle === true ||
      profileToggle === true
    ) {
      setFriendRequestsToggle(false);
      setNotificationToggle(false);
      setProfileToggle(false);
    }
    setMessageToggle(!messageToggle);
  };

  const notificationToggleHandler = () => {
    if (
      messageToggle === true ||
      friendRequestsToggle === true ||
      profileToggle === true
    ) {
      setMessageToggle(false);
      setFriendRequestsToggle(false);
      setProfileToggle(false);
    }
    setNotificationToggle(!notificationToggle);
  };

  const profileToggleHandler = () => {
    if (
      messageToggle === true ||
      friendRequestsToggle === true ||
      notificationToggle === true
    ) {
      setMessageToggle(false);
      setFriendRequestsToggle(false);
      setNotificationToggle(false);
    }
    setProfileToggle(!profileToggle);
  };

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(clearUserData());
    navigate("/");
  }

  return (
    // Navbar - START
    <nav className={`nav-bar ${!sidebarIsActive && "sidebar-notactive"}`}>
      <ContainerFluid>
        <Row>
          <Col lg="12">
            <div className="nav-bar__container">
              {/* Navbar Search - START */}
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
              {/* Navbar Search - END */}
              {/* Navbar Navigation - START */}
              <div className="nav-bar__navigation">
                <ul>
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
                    <div
                      className="nav-bar__user-avatar"
                      onClick={profileToggleHandler}
                    >
                      <img src={`https://localhost:7101/img/${userData.profileImage}`} alt="User Avatar" />
                    </div>
                    {profileToggle ? (
                      <div className="profile-dropdown">
                        <div className="profile-dropdown__body">
                          <ul>
                            <li>
                              <Link to="/profile">
                                <i className="fa-regular fa-user"></i>Profile
                                Info
                              </Link>
                            </li>
                            <li>
                              <Link to="/setting">
                                <i className="fa-solid fa-gear"></i>Account
                                Setting
                              </Link>
                            </li>
                            <li>
                              <Button className="btn nav-logout" innerText="Log Out" type="button" onClick={logoutHandler} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
              {/* Navbar Navigation - END */}
            </div>
          </Col>
        </Row>
      </ContainerFluid>
    </nav>
    // Navbar - END
  );
};

export default Navbar;
