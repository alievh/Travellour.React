import Button from "../../components/UI/Button";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Post from "../../components/Post/Post";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [error, setError] = useState();
  const [userPosts, setUserPosts] = useState([]);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    userName: "",
    profileImage: "",
    coverImage: "",
    friendCount: 0,
    postCount: 0,
  });
  const navigate = useNavigate();


  const profilePhotoHandler = (event: any) => {
    profilePhotoChangeHandler(event.target.files[0]);
  };

  const coverPhotoHandler = (event: any) => {
    coverPhotoChangeHandler(event.target.files[0]);
  };

  const userPost = useCallback(async () => {
    const postInfo = await fetch(
      `${baseUrl}/post/userpost/${JSON.parse(localStorage.getItem("user") || "{}").user.id}`,
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

    console.log(postInfo);
    setUserPosts(postInfo);
  }, []);

  const userData = useCallback(async () => {
    console.log(JSON.parse(localStorage.getItem("user") || "{}").user.id);
    const userInformation = await fetch(
      `${baseUrl}/user/userprofile/${
        JSON.parse(localStorage.getItem("user") || "{}").user.id
      }`,
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

    setUser(userInformation);
  }, []);

  useEffect(() => {
    userData();
    userPost();
  }, [userData, userPost]);

  const profilePhotoChangeHandler = async (photo: any) => {
    const formData = new FormData();
    formData.append("imagefile", photo);

    const response = await fetch(`${baseUrl}/user/changeprofilephoto`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user") || "{}").token}`,
        Accept: "*/*",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data?.error?.message?.toString());
        });
      }
    });

    navigate("/profile");
  };

  const coverPhotoChangeHandler = async (photo: any) => {
    const formData = new FormData();
    formData.append("imagefile", photo);

    const response = await fetch(`${baseUrl}/user/changecoverphoto`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user") || "{}").token}`,
        Accept: "*/*",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data?.error?.message?.toString());
        });
      }
    });

    navigate("/profile");
  };

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    // Profile Section - START
    <section
      className={`profile-section ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <div className="profile-section__background">
        <img
          src={`https://localhost:7101/img/${user.coverImage}`}
          alt="Profile Background"
        />
        <form>
          <label className="backgroundphoto-label">
            <input
              type="file"
              accept="image/*"
              name="imagefile"
              onChange={coverPhotoHandler}
            />
            <i className="fa-solid fa-camera"></i>
          </label>
        </form>
      </div>
      <Container>
        <Row>
          {/* Profile - START */}
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
                <form>
                  <label className="profilphoto-label">
                    <input
                      type="file"
                      accept="image/*"
                      name="imagefile"
                      onChange={profilePhotoHandler}
                    />
                    <i className="fa-solid fa-camera"></i>
                  </label>
                </form>
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
          {/* Profile - END */}
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
    // Profile Section - END
  );
};

export default Profile;
