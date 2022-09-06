import React from "react";
import { useSelector } from "react-redux";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import FriendRequests from "../../components/FriendRequests/FriendRequests";

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
                <div className="newsfeed-section__post">
                  <div className="post-owner">
                    <div className="owner-image">
                      <a href="#">
                        <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg" />
                      </a>
                    </div>
                    <div className="owner-info">
                      <a href="#">
                        <p>Marvin McKinney</p>
                      </a>
                      <span>6 hours ago</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <p>Hi Guys!</p>
                    <img src={require("../../assets/images/auth-poster.jpg")} />
                    <div className="post-statistics">
                      <span>
                        2<span>Likes</span>
                      </span>
                      <span>
                        5<span>Comments</span>
                      </span>
                    </div>
                    <div className="post-activity">
                      <a href="#">
                        <i className="fa-regular fa-heart"></i>
                        <span>Like</span>
                      </a>
                      <a href="#">
                        <i className="fa-regular fa-comment-dots"></i>
                        <span>Comment</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="newsfeed-section__post">
                  <div className="post-owner">
                    <div className="owner-image">
                      <a href="#">
                        <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg" />
                      </a>
                    </div>
                    <div className="owner-info">
                      <a href="#">
                        <p>Marvin McKinney</p>
                      </a>
                      <span>6 hours ago</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <p>Hello from the other side!</p>
                    <div className="post-statistics">
                      <span>
                        2<span>Likes</span>
                      </span>
                      <span>
                        5<span>Comments</span>
                      </span>
                    </div>
                    <div className="post-activity">
                      <a href="#">
                        <i className="fa-regular fa-heart"></i>
                        <span>Like</span>
                      </a>
                      <a href="#">
                        <i className="fa-regular fa-comment-dots"></i>
                        <span>Comment</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="newsfeed-section__post">
                  <div className="post-owner">
                    <div className="owner-image">
                      <a href="#">
                        <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg" />
                      </a>
                    </div>
                    <div className="owner-info">
                      <a href="#">
                        <p>Marvin McKinney</p>
                      </a>
                      <span>6 hours ago</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <p>Hi Guys!</p>
                    <img src={require("../../assets/images/auth-poster.jpg")} />
                    <div className="post-statistics">
                      <span>
                        2<span>Likes</span>
                      </span>
                      <span>
                        5<span>Comments</span>
                      </span>
                    </div>
                    <div className="post-activity">
                      <a href="#">
                        <i className="fa-regular fa-heart"></i>
                        <span>Like</span>
                      </a>
                      <a href="#">
                        <i className="fa-regular fa-comment-dots"></i>
                        <span>Comment</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="newsfeed-section__post">
                  <div className="post-owner">
                    <div className="owner-image">
                      <a href="#">
                        <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg" />
                      </a>
                    </div>
                    <div className="owner-info">
                      <a href="#">
                        <p>Marvin McKinney</p>
                      </a>
                      <span>6 hours ago</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <p>Hello from the other side!</p>
                    <div className="post-statistics">
                      <span>
                        2<span>Likes</span>
                      </span>
                      <span>
                        5<span>Comments</span>
                      </span>
                    </div>
                    <div className="post-activity">
                      <a href="#">
                        <i className="fa-regular fa-heart"></i>
                        <span>Like</span>
                      </a>
                      <a href="#">
                        <i className="fa-regular fa-comment-dots"></i>
                        <span>Comment</span>
                      </a>
                    </div>
                  </div>
                </div>
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
