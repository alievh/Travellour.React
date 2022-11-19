import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import Post from "../../components/Post/Post";
import Col from "../../components/Bootstrap/Col";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import { RootState } from "../../store";
import { GetPosts } from "../../store/Post/PostSlice";
import { useDispatch } from "react-redux";
import { AddOnlineUser } from "../../store/Online/OnlineUserSlice";
import PostCreate from "../../components/Post/PostCreate";

const Newsfeed = () => {
  const dispatch = useDispatch();

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const posts = useSelector((state: any) => state.PostSlice);

  useEffect(() => {
    GetPosts(dispatch);
    AddOnlineUser(dispatch);
  }, [dispatch]);

  return (
    // Newsfeed Section - START
    <section className={`newsfeed ${!sidebarIsActive && "sidebar-notactive"}`}>
      <Container>
        <Row>
          <Col xl="8" sm="12">
            <section className="newsfeed-section">
              {/* Post Create - START */}
              <PostCreate />
              {/* Post Create - END */}
              {/* Newsfeed Posts - START */}
              <div className="newsfeed-section__posts">
                {/* {posts.loading && <p className="loading">Loading...</p>} */}
                {posts.posts.map((p: any) =>
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
                      postOwnerId={undefined}
                      group={p.group}
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
                      postOwnerId={undefined}
                      group={p.group}
                    />
                  )
                )}
              </div>
              {/* Newsfeed Posts - END */}
            </section>
          </Col>
          <Col xl="4" sm="12">
            <section className="newsfeed-section">
              <FriendRequests />
              <FriendSuggestions />
              <AddvertisingBanner />
            </section>
          </Col>
        </Row>
      </Container>
    </section>
    // Newsfeed Section - END
  );
};

export default Newsfeed;
