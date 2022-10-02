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
import { RootState } from "../../store";

const User = () => {
  const [error, setError] = useState();
  const [userPosts, setUserPosts] = useState([]);
  const [user, setUser] = useState({
    coverImage: "",
    profileImage: "",
    userName: "",
    lastname: "",
    firstname: "",
    postCount: 0,
    friendCount: 0,
  });
  const { id } = useParams();

  const userPost = useCallback(async () => {
    const postInfo = await fetch(`${baseUrl}/post/userpost/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });

    console.log(postInfo);
    setUserPosts(postInfo);
  }, []);

  const userData = useCallback(async () => {
    const userInfo = await fetch(`${baseUrl}/user/userprofile/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
      },
    }).then((res) => {
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
    userPost();
    userData();
  }, [userData, userPost]);

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
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
                  <span>{user.postCount}</span>
                  <span>Post</span>
                </li>
                <li>
                  <span>{user.friendCount}</span>
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
                {userPosts.map((p: any) =>
                  p.images !== null ? (
                    <Post
                      postId={p.id}
                      userId={p.user.id}
                      userImage={`https://localhost:7101/img/${p.user.profileImage.imageUrl}`}
                      userFirstname={p.user.firstname}
                      userLastname={p.user.lastname}
                      createdDate="6 hours"
                      postContent={p.content}
                      postImages={p.imageUrls}
                      likeCount={p.likes.length}
                      commentCount={p.comments.length}
                    />
                  ) : (
                    <Post
                      postId={p.id}
                      userId={p.user.id}
                      userImage={`https://localhost:7101/img/${p.user.profileImage.imageUrl}`}
                      userFirstname={p.user.firstname}
                      userLastname={p.user.lastname}
                      createdDate="6 hours"
                      postContent={p.content}
                      likeCount={p.likes.length}
                      commentCount={p.comments.length}
                    />
                  )
                )}
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
