import React from "react";
import Button from "../../components/UI/Button";
import { useSelector } from "react-redux";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Post from "../../components/Post/Post";
import GroupAdmin from "../../components/GroupAdmin/GroupAdmin";

const Profile = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    <section
      className={`group-section ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <div className="profile-section__background">
        <img src={require("../../assets/images/auth-poster.jpg")} />
      </div>
      <div className="container">
        <div className="row">
          <div className="group">
            <div className="col-lg-2">
              <div className="group__details">
                <div className="group-avatar">
                  <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1662179897-bpfull.jpg" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="group__description">
                <h5>Wombo Comno</h5>
                <p>
                  Revolves around Frank, an American tourist visiting Italy to
                  mend a broken heart. Elise is an extraordinary woman who
                  deliberately crosses
                </p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="group__statistics">
                <ul>
                  <li>
                    <span>12</span>
                    <span>Post</span>
                  </li>
                  <li>
                    <span>77</span>
                    <span>Members</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 d-flex justify-content-center align-items-center">
              <div className="group__request">
                <form>
                  <Button
                    type="submit"
                    innerText="Join Group"
                    className="btn btn-primary"
                  />
                </form>
              </div>
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
              <GroupAdmin
                adminImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/1/1656590103-bpfull.jpg"
                adminFirstName="Anar"
                adminLastName="Balayan"
                adminUserName="anaryan"
              />
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
