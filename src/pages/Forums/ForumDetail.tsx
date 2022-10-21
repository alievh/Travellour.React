import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import Comment from "../../components/Comment/Comment";
import Button from "../../components/UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { GetForumDetail } from "../../store/Forum/ForumDetailSlice";
import { useDispatch } from "react-redux";
import { AddComment } from "../../store/Post/PostActionSlice";

const ForumDetail = () => {
  const [commentContent, setCommentContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

    AddComment(dispatch, navigate, comment, id, undefined, undefined);
    setCommentContent("");
  };

  const forumDetail = useSelector((state: any) => state.ForumDetailSlice);

  useEffect(() => {
    GetForumDetail(dispatch, navigate, id);
  }, [dispatch, navigate, id]);

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
                        key={c.id}
                        commentId={c.id}
                        userId={c.user.id}
                        userImage={c.user.profileImage.imageUrl}
                        userFirstname={c.user.firstname}
                        userLastname={c.user.lastname}
                        commentContent={c.content}
                        postId={undefined}
                        forumId={id}
                        groupId={undefined}
                        postOwnerId={undefined}
                      />
                    ))}
                </div>
              </div>
              <div className="forum-detail-container__input">
                <form onSubmit={addCommentHandler}>
                  <textarea
                    rows={5}
                    value={commentContent}
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
