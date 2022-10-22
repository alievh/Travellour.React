import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../../components/UI/Button";
import ContainerFluid from "../../components/Bootstrap/ContainerFluid";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { GetUserData } from "../../store/User/UserData";
import { RemoveOnlineUser } from "../../store/Online/OnlineUserSlice";
import { GetNotificationPagination } from "../../store/Notification/NotificationPaginationSlice";
import Notification from "../../components/Notification/Notification";
import { GetFriendRequestsPagination } from "../../store/Friend/FriendRequestPaginationSlice";
import FriendRequest from "../../components/FriendRequests/FriendRequest";
import { GetSearchUser } from "../../store/User/SearchUserSlice";
import SearchUser from "../../components/SearchUser/SearchUser";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchResultActive, setSearchResultActive] = useState(false);
  const [friendRequestsToggle, setFriendRequestsToggle] = useState(false);
  const [messageToggle, setMessageToggle] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);

  const friendRequestsToggleHandler = () => {
    if (
      messageToggle === true ||
      notificationToggle === true ||
      profileToggle === true ||
      searchResultActive === true
    ) {
      setMessageToggle(false);
      setNotificationToggle(false);
      setProfileToggle(false);
      setSearchResultActive(false);
    }
    setFriendRequestsToggle(!friendRequestsToggle);
  };

  const messageToggleHandler = () => {
    if (
      friendRequestsToggle === true ||
      notificationToggle === true ||
      profileToggle === true ||
      searchResultActive === true
    ) {
      setFriendRequestsToggle(false);
      setNotificationToggle(false);
      setProfileToggle(false);
      setSearchResultActive(false);

    }
    setMessageToggle(!messageToggle);
  };

  const notificationToggleHandler = () => {
    if (
      messageToggle === true ||
      friendRequestsToggle === true ||
      profileToggle === true ||
      searchResultActive === true
    ) {
      setMessageToggle(false);
      setFriendRequestsToggle(false);
      setProfileToggle(false);
      setSearchResultActive(false);

    }
    setNotificationToggle(!notificationToggle);
  };

  const profileToggleHandler = () => {
    if (
      messageToggle === true ||
      friendRequestsToggle === true ||
      notificationToggle === true ||
      searchResultActive === true
    ) {
      setMessageToggle(false);
      setFriendRequestsToggle(false);
      setNotificationToggle(false);
      setSearchResultActive(false);
    }
    setProfileToggle(!profileToggle);
  };

  const logoutHandler = () => {
    RemoveOnlineUser(dispatch);    
    navigate("/");
  };

  const searchInputHandler = (event: any) => {
    searchHandler(event.target.value);
  };

  const searchHandler = (input: string) => {
    if (input.length > 2) {
      setSearchResultActive(true);
      setMessageToggle(false);
      setFriendRequestsToggle(false);
      setNotificationToggle(false);
      setProfileToggle(false);
      GetSearchUser(dispatch, input);
    } else {
      setSearchResultActive(false);
    }
  };

  useEffect(() => {
    GetUserData(dispatch);
    GetNotificationPagination(dispatch);
    GetFriendRequestsPagination(dispatch);
  }, [dispatch]);

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  const user = useSelector((state: any) => state.UserDataSlice);

  const notifications = useSelector(
    (state: any) => state.NotificationPaginationSlice
  );

  const friendRequests = useSelector(
    (state: any) => state.FriendRequestPaginationSlice
  );

  const searchUsers = useSelector((state: any) => state.SearchUserSlice);


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
                    id="search"
                    name="main-search"
                    className="form-control"
                    placeholder="Search Here"
                    aria-label="Search"
                    onChange={searchInputHandler}
                    autoComplete="off"
                  />
                </div>
                {searchResultActive && (
                  <div className="search-results">
                    {searchUsers.searchUser.length > 0 ? (
                      searchUsers.searchUser.map((u: any) => (
                        <SearchUser
                          key={u.id}
                          id={u.id}
                          imageUrl={u.profileImage}
                          userFirstName={u.firstname}
                          userLastName={u.lastname}
                          userName={u.userName}
                        />
                      ))
                    ) : (
                      <p>No user found!</p>
                    )}
                  </div>
                )}
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
                          {friendRequests.friendRequestsPagination.length >
                          0 ? (
                            friendRequests.friendRequestsPagination.map(
                              (f: any) => (
                                <FriendRequest
                                  key={f.id}
                                  userId={f.id}
                                  userFirstName={f.firstname}
                                  userLastName={f.lastname}
                                  userName={f.userName}
                                  imageUrl={f.profileImage}
                                />
                              )
                            )
                          ) : (
                            <p>You have no pending friends requests.</p>
                          )}
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
                    {JSON.stringify(user.userData) !== "{}" ? (
                      user.userData.notificationCount > 0 ? (
                        <span className="notification-count">
                          {user.userData.notificationCount}
                        </span>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {notificationToggle ? (
                      <div className="notification-dropdown">
                        <h5>Notifications</h5>
                        <div className="notification-dropdown__body">
                          {notifications.notificationPagination.length > 0 ? (
                            notifications.notificationPagination.map((n: any) =>
                              n.post !== null ? (
                                <Notification
                                  key={n.id}
                                  notificationId={n.id}
                                  userId={n.sender.id}
                                  userImage={n.sender.profileImage.imageUrl}
                                  userUsername={n.sender.userName}
                                  notificationContent={n.message}
                                  notificationStatus={n.notificationStatus}
                                  postId={n.post.id}
                                  createDate={n.fromCreateDate}
                                />
                              ) : (
                                <Notification
                                  key={n.id}
                                  notificationId={n.id}
                                  userId={n.sender.id}
                                  userImage={n.sender.profileImage.imageUrl}
                                  userUsername={n.sender.userName}
                                  notificationContent={n.message}
                                  notificationStatus={n.notificationStatus}
                                  createDate={n.fromCreateDate}
                                />
                              )
                            )
                          ) : (
                            <p>You don't have any notification.</p>
                          )}
                        </div>
                        <Link to="/notifications" className="see-more">
                          See More
                        </Link>
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
                      {JSON.stringify(user.userData) === "{}" ? (
                        ""
                      ) : (
                        <img
                          src={`https://localhost:7101/img/${user.userData.profileImage}`}
                          alt="User Avatar"
                        />
                      )}
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
                              <Button
                                className="btn nav-logout"
                                innerText="Log Out"
                                type="button"
                                onClick={logoutHandler}
                              />
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
