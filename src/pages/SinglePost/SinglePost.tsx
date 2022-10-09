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
  
  const post = useSelector((state: any) => state.SinglePostSlice);
  console.log(post);

  useEffect(() => {
    GetSinglePost(dispatch, id);
  }, []);

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
                {/* {post.post.images !== null ? (
                  <Post
                    postId={post.post.id}
                    userId={post.post.user.id}
                    userImage={`https://localhost:7101/img/${post.post.user.profileImage.imageUrl}`}
                    userFirstname={post.post.user.firstname}
                    userLastname={post.post.user.lastname}
                    createdDate="6 hours"
                    postContent={post.post.content}
                    postImages={post.post.imageUrls}
                    likeCount={post.post.likeCount}
                    commentCount={post.post.commentCount}
                    likes={post.post.likes}
                    comments={post.post.comments}
                  />
                ) : (
                  <Post
                    postId={post.post.id}
                    userId={post.post.user.id}
                    userImage={`https://localhost:7101/img/${post.post.user.profileImage.imageUrl}`}
                    userFirstname={post.post.user.firstname}
                    userLastname={post.post.user.lastname}
                    createdDate="6 hours"
                    postContent={post.post.content}
                    likeCount={post.post.likeCount}
                    commentCount={post.post.commentCount}
                    likes={post.post.likes}
                    comments={post.post.comments}
                  />
                )} */}
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
