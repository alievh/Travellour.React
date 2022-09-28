import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import Post from "../../components/Post/Post";
import Col from "../../components/Bootstrap/Col";
import Button from "../../components/UI/Button";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";

const Newsfeed = () => {
  const [userPosts, setUserPosts]: any = useState([]);
  const [fileUpload, setFileUpload] = useState("");
  const [postContent, setPostContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const postContentHandler = (event: any) => {
    setPostContent(event.target.value);
  };

  const fileUploadHandler = (event: any) => {
    setFileUpload(event.target.files);
  };

  const postCreateHandler = async (event: any) => {
    const formData = new FormData();
    for (let i = 0; i < fileUpload.length; i++) {
      formData.append("imagefiles", fileUpload[i]);
    }
    formData.append("content", postContent);

    const response = await fetch(`${baseUrl}/post/postcreate`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
        Accept: "*/*",
      },
    }).then((res) => {
      setLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });
  };

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  const getPosts = useCallback(async () => {
    const posts = await fetch(`${baseUrl}/post/postgetall`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
      },
    }).then((res) => {
      setLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });

    setUserPosts(posts);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

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
                  <textarea onChange={postContentHandler}></textarea>
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
                {userPosts.map((p: any) =>
                  p.images !== null ? (
                    <Post
                      userId={p.user.id}
                      userImage={`https://localhost:7101/img/${p.user.profileImage.imageUrl}`}
                      userFirstname={p.user.firstname}
                      userLastname={p.user.lastname}
                      createdDate="6 hours"
                      postContent={p.content}
                      postImages={p.imageUrls}
                      likeCount={p.likes.length}
                      commentCount={p.comments.length}
                    />
                  ) : (
                    <Post
                      userId={p.user.id}
                      userImage={`https://localhost:7101/img/${p.user.profileImage.imageUrl}`}
                      userFirstname={p.user.firstname}
                      userLastname={p.user.lastname}
                      createdDate="6 hours"
                      postContent={p.content}
                      likeCount={p.likes.length}
                      commentCount={p.comments.length}
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
