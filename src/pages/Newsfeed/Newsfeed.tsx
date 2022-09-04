import React from "react";
import { useSelector } from "react-redux";

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
              <div className="newsfeed-section__active-users">
                <h5>Active User</h5>
                <div className="active-user">
                  <ul>
                    <li>
                      <div className="user-avatar">
                        <a href="#">
                          <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg" />
                        </a>
                      </div>
                      <div className="user-details">
                        <a href="#">
                          <h6>Marvin McKinney</h6>
                        </a>
                        <span>Active</span>
                      </div>
                    </li>
                    <li>
                      <div className="user-avatar">
                        <a href="#">
                          <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg" />
                        </a>
                      </div>
                      <div className="user-details">
                        <a href="#">
                          <h6>Anar Balacayev</h6>
                        </a>
                        <span>Active</span>
                      </div>
                    </li>
                    <li>
                      <div className="user-avatar">
                        <a href="#">
                          <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg" />
                        </a>
                      </div>
                      <div className="user-details">
                        <a href="#">
                          <h6>Huseyn Aliyev</h6>
                        </a>
                        <span>Active</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="newsfeed-section__friend-request">
                <h5>Friends Requests</h5>
                <div className="active-user">
                  <ul>
                    <li>
                      <div className="user-avatar">
                        <a href="#">
                          <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg" />
                        </a>
                      </div>
                      <div className="user-details">
                        <a href="#">
                          <h6>Marvin McKinney</h6>
                        </a>
                        <span>@marvin</span>
                      </div>
                    </li>
                    <li>
                      <div className="user-avatar">
                        <a href="#">
                          <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg" />
                        </a>
                      </div>
                      <div className="user-details">
                        <a href="#">
                          <h6>Anar Balacayev</h6>
                        </a>
                        <span>@anar</span>
                      </div>
                    </li>
                    <li>
                      <div className="user-avatar">
                        <a href="#">
                          <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg" />
                        </a>
                      </div>
                      <div className="user-details">
                        <a href="#">
                          <h6>Huseyn Aliyev</h6>
                        </a>
                        <span>@huseyn</span>
                      </div>
                      <div className="friend-add"></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="newsfeed-section__banner">
                <img src={require("../../assets/images/banner.jpg")} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
