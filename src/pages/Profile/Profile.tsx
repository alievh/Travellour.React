import { useEffect } from "react";
import { useSelector } from "react-redux";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Post from "../../components/Post/Post";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import { useDispatch } from "react-redux";
import {
  CoverPhotoChanger,
  GetProfile,
  ProfilePhotoChanger,
} from "../../store/User/ProfileSlice";
import { Link, useNavigate } from "react-router-dom";
import { GetUserPosts } from "../../store/Post/UserPostsSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profilePhotoHandler = (event: any) => {
    profilePhotoChangeHandler(event.target.files[0]);
  };

  const coverPhotoHandler = (event: any) => {
    coverPhotoChangeHandler(event.target.files[0]);
  };

  useEffect(() => {
    GetProfile(
      dispatch,
      navigate,
      JSON.parse(localStorage.getItem("user") || "{}").user.id
    );
    GetUserPosts(
      dispatch,
      JSON.parse(localStorage.getItem("user") || "{}").user.id
    );
  }, [dispatch, navigate]);

  const profilePhotoChangeHandler = async (photo: any) => {
    const formData = new FormData();
    formData.append("imagefile", photo);

    ProfilePhotoChanger(
      dispatch,
      navigate,
      formData,
      JSON.parse(localStorage.getItem("user") || "{}").user.id
    );
  };

  const coverPhotoChangeHandler = async (photo: any) => {
    const formData = new FormData();
    formData.append("imagefile", photo);

    CoverPhotoChanger(
      dispatch,
      navigate,
      formData,
      JSON.parse(localStorage.getItem("user") || "{}").user.id
    );
  };

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );
  const profileData = useSelector((state: any) => state.ProfileSlice);

  const userPosts = useSelector((state: any) => state.UserPostsSlice);
  console.log(profileData.profile.coverImage);
  return (
    // Profile Section - START
    <section
      className={`profile-section ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <div className="profile-section__background">
        {JSON.stringify(profileData.profile) !== "{}" ? (
          profileData.profile.coverImage === "" ? (
            <img
              src={require("../../assets/images/defaultbackground.jpg")}
              alt="Profile Background"
            />
          ) : (
            <img
              src={`https://localhost:7101/img/${profileData.profile.coverImage}`}
              alt="Profile Background"
            />
          )
        ) : null}
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
            <div className="user__statistics col-lg-3">
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
            <div className="user__details col-lg-5">
              <div className="user-avatar">
                {JSON.stringify(profileData.profile) !== "{}" ? (
                  profileData.profile.profileImage === "" ? (
                    <img
                      src={require("../../assets/images/defaultprofilephoto.jpg")}
                      alt="User Avatar"
                    />
                  ) : (
                    <img
                      src={`https://localhost:7101/img/${profileData.profile.profileImage}`}
                      alt="User Avatar"
                    />
                  )
                ) : null}
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
                <Link to="/setting" className="btn btn-primary">
                  <i className="fa-solid fa-gear"></i> Setting
                </Link>
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
                {userPosts.userPosts.length > 0
                  ? userPosts.userPosts.map((p: any) =>
                      p.images !== null ? (
                        <Post
                          key={p.id}
                          postId={p.id}
                          userId={p.user.id}
                          userImage={`https://localhost:7101/img/${p.user.profileImage.imageUrl}`}
                          userFirstname={p.user.firstname}
                          userLastname={p.user.lastname}
                          createdDate={p.fromCreateDate}
                          postContent={p.content}
                          postImages={p.imageUrls}
                          likeCount={p.likeCount}
                          commentCount={p.commentCount}
                          likes={p.likes}
                          comments={p.comments}
                          groupId={undefined}
                          postOwnerId={p.user.id}
                        />
                      ) : (
                        <Post
                          key={p.id}
                          postId={p.id}
                          userId={p.user.id}
                          userImage={`https://localhost:7101/img/${p.user.profileImage.imageUrl}`}
                          userFirstname={p.user.firstname}
                          userLastname={p.user.lastname}
                          createdDate={p.fromCreateDate}
                          postContent={p.content}
                          likeCount={p.likeCount}
                          commentCount={p.commentCount}
                          likes={p.likes}
                          comments={p.comments}
                          groupId={undefined}
                          postOwnerId={p.user.id}
                        />
                      )
                    )
                  : ""}
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
