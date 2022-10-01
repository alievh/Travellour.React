import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import Button from "../../components/UI/Button";
import Post from "../../components/Post/Post";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";

const User = () => {
  const [error, setError] = useState();
  const [user, setUser] = useState({
    coverImage: "",
    profileImage: "",
    userName: "",
    lastname: "",
    firstname: ""
  });
  const { id } = useParams();

  const userData = useCallback(async () => {
    const userInfo = await fetch(
      `${baseUrl}/user/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user") || "{}").token
          }`,
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });

    console.log(userInfo);
    setUser(userInfo);
  }, []);

  useEffect(() => {
    userData();
  }, [userData]);

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    // User Section - START
    <section
      className={`profile-section ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <div className="profile-section__background">
        <img
          src={`https://localhost:7101/img/${user.coverImage}`}
          alt="Profile Background"
        />
      </div>
      <Container>
        <Row>
          {/* User - START */}
          <div className="user">
            <div className="user__statistics">
              <ul>
                <li>
                  <span>12</span>
                  <span>Post</span>
                </li>
                <li>
                  <span>77</span>
                  <span>Friends</span>
                </li>
              </ul>
            </div>
            <div className="user__details">
              <div className="user-avatar">
                <img
                  src={`https://localhost:7101/img/${user.profileImage}`}
                  alt="User Avatar"
                />
              </div>
              <h5>
                {user.firstname} {user.lastname}
              </h5>
              <span>@{user.userName}</span>
            </div>
            <div className="user__request">
              <form>
                <Button
                  type="submit"
                  innerText="Add Friend"
                  className="btn btn-primary"
                  buttonIcon="fa-solid fa-user-plus"
                />
                <Button
                  type="submit"
                  innerText="Message"
                  className="btn message"
                  buttonIcon="fa-solid fa-message"
                />
              </form>
            </div>
          </div>
          {/* User - END */}
        </Row>
        <Row>
          {/* User Posts - START */}
          <Col xl="8" sm="12">
            <section className="newsfeed-section">
              <div className="newsfeed-section__posts">
                <Post
                  userId="123"
                  userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                  userFirstname="Marvin"
                  userLastname="McKinney"
                  createdDate="6 hours"
                  postContent="Hi Guys!"
                  postImages={undefined}
                  likeCount="2"
                  commentCount="4"
                />
                <Post
                  userId="123"
                  userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                  userFirstname="Marvin"
                  userLastname="McKinney"
                  createdDate="6 hours"
                  postContent="Hello from the other side!"
                  likeCount="2"
                  commentCount="4"
                />
                <Post
                  userId="123"
                  userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                  userFirstname="Marvin"
                  userLastname="McKinney"
                  createdDate="6 hours"
                  postContent="Hi Guys!"
                  postImages={undefined}
                  likeCount="2"
                  commentCount="4"
                />
                <Post
                  userId="123"
                  userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                  userFirstname="Marvin"
                  userLastname="McKinney"
                  createdDate="6 hours"
                  postContent="Hello from the other side!"
                  likeCount="2"
                  commentCount="4"
                />
              </div>
            </section>
          </Col>
          {/* User Posts - END */}
          {/* Right SideBar - START */}
          <Col xl="4" sm="12">
            <section className="newsfeed-section">
              <FriendRequests />
              <FriendSuggestions />
              <AddvertisingBanner />
            </section>
          </Col>
          {/* Right SideBar - END */}
        </Row>
      </Container>
    </section>
    // User Section - END
  );
};

export default User;
