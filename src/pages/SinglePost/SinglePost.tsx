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
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { GetSinglePost } from "../../store/Post/SinglePostSlice";

const SinglePost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  useEffect(() => {
    GetSinglePost(dispatch, id);
  }, [dispatch, id]);

  const post = useSelector((state: any) => state.SinglePostSlice.post);

  return (
    // Newsfeed Section - START
    <section className={`newsfeed ${!sidebarIsActive && "sidebar-notactive"}`}>
      <Container>
        <Row>
          <Col xl="8" sm="12">
            <section className="newsfeed-section">
              {/* Newsfeed Posts - START */}
              <div className="newsfeed-section__posts">
                {post.loading && <p className="loading">Loading...</p>}
                {JSON.stringify(post) !== "{}" ? (
                  post.images !== null ? (
                    <Post
                      key={post.id}
                      postId={post.id}
                      userId={post.user.id}
                      userImage={`https://localhost:7101/img/${post.user.profileImage.imageUrl}`}
                      userFirstname={post.user.firstname}
                      userLastname={post.user.lastname}
                      createdDate="6 hours"
                      postContent={post.content}
                      postImages={post.imageUrls}
                      likeCount={post.likeCount}
                      commentCount={post.commentCount}
                      likes={post.likes}
                      comments={post.comments}
                      groupId={undefined}
                      postOwnerId={undefined}
                    />
                  ) : (
                    <Post
                      key={post.id}
                      postId={post.id}
                      userId={post.user.id}
                      userImage={`https://localhost:7101/img/${post.user.profileImage.imageUrl}`}
                      userFirstname={post.user.firstname}
                      userLastname={post.user.lastname}
                      createdDate="6 hours"
                      postContent={post.content}
                      likeCount={post.likeCount}
                      commentCount={post.commentCount}
                      likes={post.likes}
                      comments={post.comments}
                      groupId={undefined}
                      postOwnerId={undefined}
                    />
                  )
                ) : (
                  ""
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

export default SinglePost;
