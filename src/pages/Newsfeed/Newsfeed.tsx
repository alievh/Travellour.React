import { useEffect, useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import Post from "../../components/Post/Post";
import Col from "../../components/Bootstrap/Col";
import Button from "../../components/UI/Button";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import { RootState } from "../../store";
import { CreatePost, GetPosts } from "../../store/Post/PostSlice";
import { useDispatch } from "react-redux";
import { AddOnlineUser } from "../../store/Online/OnlineUserSlice";

const Newsfeed = () => {
  const dispatch = useDispatch();
  const [fileUpload, setFileUpload] = useState("");
  const [postContent, setPostContent] = useState("");

  const postContentHandler = (
    event: FormEvent & { target: HTMLTextAreaElement }
  ) => {
    setPostContent(event.target.value);
  };

  const fileUploadHandler = (event: any) => {
    setFileUpload(event.target.files);
  };

  const postCreateHandler = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < fileUpload.length; i++) {
      formData.append("imagefiles", fileUpload[i]);
    }
    formData.append("content", postContent);

    CreatePost(dispatch, formData);

    setPostContent("");
  };

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
              <div className="newsfeed-section__post-create">
                <form onSubmit={postCreateHandler}>
                  <textarea
                    onChange={postContentHandler}
                    value={postContent}
                  ></textarea>
                  <div className="post-create__bottom">
                    <label>
                      <input
                        type="file"
                        accept="image/*"
                        name="imagefiles"
                        multiple
                        onChange={fileUploadHandler}
                      />
                      <i className="fa-solid fa-image"></i>
                      Upload Photo
                    </label>
                    <Button type="submit" className="btn" innerText="Share" />
                  </div>
                </form>
              </div>
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
