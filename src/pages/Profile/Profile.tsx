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
import { useDispatch } from "react-redux";
import {
  CoverPhotoChanger,
  GetProfile,
  ProfilePhotoChanger,
} from "../../store/User/ProfileSlice";
import { Link } from "react-router-dom";

const Profile = () => {
  const [error, setError] = useState();
  const [userPosts, setUserPosts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profilePhotoHandler = (event: any) => {
    profilePhotoChangeHandler(event.target.files[0]);
  };

  const coverPhotoHandler = (event: any) => {
    coverPhotoChangeHandler(event.target.files[0]);
  };

  const userPost = useCallback(async () => {
    const postInfo = await fetch(
      `${baseUrl}/post/userpost/${
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

    console.log(postInfo);
    setUserPosts(postInfo);
  }, []);

  useEffect(() => {
    GetProfile(dispatch);
    userPost();
  }, [userPost]);

  const profilePhotoChangeHandler = async (photo: any) => {
    const formData = new FormData();
    formData.append("imagefile", photo);

    ProfilePhotoChanger(formData);

    navigate("/profile");
  };

  const coverPhotoChangeHandler = async (photo: any) => {
    const formData = new FormData();
    formData.append("imagefile", photo);

    CoverPhotoChanger(formData);

    navigate("/profile");
  };

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );
  const profileData = useSelector((state: any) => state.ProfileSlice);

  return (
    // Profile Section - START
    <section
      className={`profile-section ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <div className="profile-section__background">
        <img
          src={`https://localhost:7101/img/${profileData.profile.coverImage}`}
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
            <div className="user__statistics col-lg-2">
              <ul>
                <li>
                  <span>{profileData.profile.postCount}</span>
                  <span>Post</span>
                </li>
                <li>
                  <Link to="/friends">
                    <span>{profileData.profile.friendCount}</span>
                    <span>Friends</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="user__details col-lg-6">
              <div className="user-avatar">
                <img
                  src={`https://localhost:7101/img/${profileData.profile.profileImage}`}
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
                {profileData.profile.firstname} {profileData.profile.lastname}
              </h5>
              <span>@{profileData.profile.userName}</span>
            </div>
            <div className="user__request col-lg-4">
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
                      likeCount={p.likeCount}
                      commentCount={p.commentCount}
                      likes={p.likes}
                      comments={p.comment}
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
                      likeCount={p.likeCount}
                      commentCount={p.commentCount}
                      likes={p.likes}
                      comments={p.comment}
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
