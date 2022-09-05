import React from "react";
import Button from "../../components/UI/Button";
import { useSelector } from "react-redux";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import FriendRequests from "../../components/FriendRequests/FriendRequests";

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
            <div className="user-avatar">
              <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1662179897-bpfull.jpg" />
            </div>
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
              <h5>Marvin McKinney</h5>
              <span>@marvin</span>
            </div>
            <div className="user__request">
              <form>
                <Button
                  type="submit"
                  innerText="Add Friend"
                  className="btn btn-primary"
                />
                <Button
                  type="submit"
                  innerText="Message"
                  className="btn message"
                />
              </form>
            </div>
          </div>
        </div>
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
              </div>
            </section>
          </div>
          <div className="col-xl-4 col-sm-12">
            <section className="newsfeed-section">
              <ActiveUsers />
              <FriendRequests />
              <div className="newsfeed-section__banner">
                <img src={require("../../assets/images/banner.jpg")} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
