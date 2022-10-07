import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import Comment from "../../components/Comment/Comment";
import Button from "../../components/UI/Button";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";
import { RootState } from "../../store";
import { GetForumDetail } from "../../store/Forum/ForumDetailSlice";
import { useDispatch } from "react-redux";

const ForumDetail = () => {
  const [commentContent, setCommentContent] = useState();
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const commentContentHandler = (event: any) => {
    setCommentContent(event.target.value);
  };

  const addCommentHandler = async (event: any) => {
    event.preventDefault();
    const comment = {
      forumId: id,
      content: commentContent,
    };

    const response = await fetch(`${baseUrl}/forum/commentadd`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });

    GetForumDetail(dispatch, id);
  };

  const forumDetail = useSelector((state: any) => state.ForumDetailSlice);

  console.log(forumDetail);
  useEffect(() => {
    GetForumDetail(dispatch, id);
  }, []);

  return (
    // Forums Section - START
    <section
      className={`forum-detail ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <div className="forum-detail-container">
        <Container>
          <Row>
            <Col xl="12">
              <div className="forum-detail-container__title">
                <h4>{forumDetail.forum.forumTitle}</h4>
              </div>
              <div className="forum-detail-container__content">
                <p>{forumDetail.forum.forumContent}</p>
              </div>
              <div className="forum-detial-container__comments">
                <div className="forum-comments">
                  {forumDetail.forum.comments !== undefined &&
                    forumDetail.forum.comments.map((c: any) => (
                      <Comment
                        commentId={c.id}
                        userId={c.user.id}
                        userImage={c.user.profileImage.imageUrl}
                        userFirstname={c.user.firstname}
                        userLastname={c.user.lastname}
                        commentContent={c.content}
                        forumId={id}
                      />
                    ))}
                </div>
              </div>
              <div className="forum-detail-container__input">
                <form onSubmit={addCommentHandler}>
                  <textarea
                    rows={5}
                    onChange={commentContentHandler}
                  ></textarea>
                  <Button className="btn" innerText="Send" />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    // Forums Section - END
  );
};

export default ForumDetail;
