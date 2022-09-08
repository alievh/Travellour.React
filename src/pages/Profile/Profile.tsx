import React from "react";
import Button from "../../components/UI/Button";
import { useSelector } from "react-redux";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Post from "../../components/Post/Post";

const Profile = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    <section
      className={`profile-section ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <div className="profile-section__background">
        <img src={require("../../assets/images/auth-poster.jpg")} />
      </div>
      <div className="container">
        <div className="row">
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
                <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1662179897-bpfull.jpg" />
              </div>
              <h5>Marvin McKinney</h5>
              <span>@marvin</span>
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
        </div>
        <div className="row">
          <div className="col-xl-8 col-sm-12">
            <section className="newsfeed-section">
              <div className="newsfeed-section__posts">
                <Post
                  userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                  userFirstname="Marvin"
                  userLastname="McKinney"
                  createdDate="6 hours"
                  postContent="Hi Guys!"
                  postImage={require("../../assets/images/auth-poster.jpg")}
                  likeCount="2"
                  commentCount="4"
                />
                <Post
                  userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                  userFirstname="Marvin"
                  userLastname="McKinney"
                  createdDate="6 hours"
                  postContent="Hello from the other side!"
                  likeCount="2"
                  commentCount="4"
                />
                <Post
                  userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                  userFirstname="Marvin"
                  userLastname="McKinney"
                  createdDate="6 hours"
                  postContent="Hi Guys!"
                  postImage={require("../../assets/images/auth-poster.jpg")}
                  likeCount="2"
                  commentCount="4"
                />
                <Post
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
          </div>
          <div className="col-xl-4 col-sm-12">
            <section className="newsfeed-section">
              <ActiveUsers />
              <FriendRequests />
              <AddvertisingBanner />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
