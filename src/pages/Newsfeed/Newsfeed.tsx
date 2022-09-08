import React from "react";
import { useSelector } from "react-redux";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import Post from "../../components/Post/Post";

const Newsfeed = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    <div className={`newsfeed ${!sidebarIsActive && "sidebar-notactive"}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-sm-12">
            <section className="newsfeed-section">
              <div className="newsfeed-section__stories">
                <div className="stories-add"></div>
              </div>
              <div className="newsfeed-section__posts">
                <Post
                  userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                  userFirstname="Marvin"
                  userLastname="McKinney"
                  createdDate="6 hours"
                  postContent="Hi Guys!"
                  postImage={require('../../assets/images/auth-poster.jpg')}
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
                  postImage={require('../../assets/images/auth-poster.jpg')}
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
    </div>
  );
};

export default Newsfeed;
