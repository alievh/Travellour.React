import { useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import Button from "../../components/UI/Button";
import Post from "../../components/Post/Post";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { SendFriendRequest } from "../../store/Friend/FriendSuggestionSlice";
import {
  AcceptFriendRequest,
  RejectFriendRequest,
} from "../../store/Friend/FriendRequestSlice";
import {
  CancelFriendRequest,
  RemoveFriend,
} from "../../store/Friend/FriendSlice";
import { GetUserPosts } from "../../store/Post/UserPostsSlice";
import { GetProfile } from "../../store/User/ProfileSlice";
import { AddOnlineUser } from "../../store/Online/OnlineUserSlice";
import { Link } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const userPosts = useSelector((state: any) => state.UserPostsSlice);

  const userProfile = useSelector((state: any) => state.ProfileSlice);

  const onlineUsers = useSelector((state: any) => state.OnlineUserSlice);

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  useEffect(() => {
    GetProfile(dispatch, navigate, id);
    GetUserPosts(dispatch, id);
    AddOnlineUser(dispatch);
  }, [dispatch, navigate, id]);

  const friendAddHandler = () => {
    SendFriendRequest(dispatch, navigate, id);
  };

  const cancelRequestHandler = () => {
    CancelFriendRequest(dispatch, id);
    GetProfile(dispatch, navigate, id);
  };

  const unfriendHandler = () => {
    RemoveFriend(dispatch, id);
  };

  const rejectRequestHandler = () => {
    RejectFriendRequest(dispatch, id);
  };

  const acceptRequestHandler = () => {
    AcceptFriendRequest(dispatch, id);
  };

  return (
    // User Section - START
    <section
      className={`profile-section ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <div className="profile-section__background">
        {userProfile.profile.coverImage === undefined ? (
          ""
        ) : (
          <img
            src={`https://localhost:7101/img/${userProfile.profile.coverImage}`}
            alt="Profile Background"
          />
        )}
      </div>
      <Container>
        <Row>
          {/* User - START */}
          <div className="user">
            <div className="user__statistics col-lg-3">
              <ul>
                <li>
                  <span>{userProfile.profile.postCount}</span>
                  <span>Post</span>
                </li>
                <li>
                  <span>{userProfile.profile.friendCount}</span>
                  <span>Friends</span>
                </li>
              </ul>
            </div>
            <div className="user__details col-lg-5">
              <div className="user-avatar">
                {userProfile.profile.profileImage === undefined ? (
                  ""
                ) : (
                  <img
                    src={`https://localhost:7101/img/${userProfile.profile.profileImage}`}
                    alt="User Avatar"
                  />
                )}
              </div>
              <h5>
                {userProfile.profile.firstname} {userProfile.profile.lastname}
              </h5>
              <span>@{userProfile.profile.userName}</span>
              {onlineUsers.isOnline !== undefined
                ? onlineUsers.isOnline.map((u: any) =>
                    u === id ? (
                      <p key={u} className="online-user">
                        Online
                      </p>
                    ) : (
                      ""
                    )
                  )
                : ""}
            </div>
            <div className="user__request col-lg-4">
              <form>
                {userProfile.profile.status === 4 ? (
                  <Button
                    type="submit"
                    innerText="Add Friend"
                    className="btn btn-primary"
                    buttonIcon="fa-solid fa-user-plus"
                    onClick={friendAddHandler}
                  />
                ) : userProfile.profile.status === 0 ? (
                  <Button
                    type="submit"
                    innerText="Cancel"
                    className="btn btn-primary"
                    buttonIcon="fa-solid fa-user-slash"
                    onClick={cancelRequestHandler}
                  />
                ) : userProfile.profile.status === 2 ? (
                  <>
                    <Button
                      type="submit"
                      innerText="Accept"
                      className="btn btn-success"
                      buttonIcon="fa-solid fa-user-plus"
                      onClick={acceptRequestHandler}
                    />
                    <Button
                      type="submit"
                      innerText="Reject"
                      className="btn btn-danger"
                      buttonIcon="fa-solid fa-ban"
                      onClick={rejectRequestHandler}
                    />
                  </>
                ) : userProfile.profile.status === 1 ? (
                  <Button
                    type="submit"
                    innerText="Unfriend"
                    className="btn btn-warning"
                    buttonIcon="fa-solid fa-user-minus"
                    onClick={unfriendHandler}
                  />
                ) : (
                  ""
                )}
                <Link to="/messages" className="btn message">
                  <i className="fa-solid fa-message"></i>Message
                </Link>
              </form>
            </div>
          </div>
          {/* User - END */}
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
                          createdDate="6 hours"
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
                          createdDate="6 hours"
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
    // User Section - END
  );
};

export default User;
