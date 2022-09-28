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
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    userName: "",
    profileImage: "",
    coverImage: "",
  });
  const navigate = useNavigate();

  const userToken = useSelector((state: any) => state.AuthReducer.accessToken);

  const profilePhotoHandler = (event: any) => {
    profilePhotoChangeHandler(event.target.files[0]);
  };

  const coverPhotoHandler = (event: any) => {
    coverPhotoChangeHandler(event.target.files[0]);
  };

  const userData = useCallback(async () => {
    console.log(JSON.parse(localStorage.getItem("user") || "{}").user.id);
    const userInformation = await fetch(
      `${baseUrl}/user/${
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
  }, []);

  const profilePhotoChangeHandler = async (photo: any) => {
    const formData = new FormData();
    formData.append("imagefile", photo);

    const response = await fetch(`${baseUrl}/user/changeprofilephoto`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${userToken}`,
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
        Authorization: `Bearer ${userToken}`,
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
    // Profile Section - END
  );
};

export default Profile;
