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
  const dispatch = useDispatch();
  const { id } = useParams();

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const forumDetail = useSelector((state: any) => state.ForumDetailSlice);

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
                <p>
                  {forumDetail.forum.forumContent}
                </p>
              </div>
              <div className="forum-detial-container__comments">
                <div className="forum-comments">
                  <Comment
                    userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                    userFirstname="Huseyn"
                    userLastname="Aliyev"
                    commentContent="dslkalkdsjblaksfdlbkahdflkbhlakdfhbhalkdfhlblaldhfbhalhdflblahdflhbhadlhflbhaldfb"
                  />
                  <Comment
                    userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                    userFirstname="Huseyn"
                    userLastname="Aliyev"
                    commentContent="dslkalkdsjblaksfdlbkahdflkbhlakdfhbhalkdfhlblaldhfbhalhdflblahdflhbhadlhflbhaldfb"
                  />
                  <Comment
                    userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                    userFirstname="Huseyn"
                    userLastname="Aliyev"
                    commentContent="dslkalkdsjblaksfdlbkahdflkbhlakdfhbhalkdfhlblaldhfbhalhdflblahdflhbhadlhflbhaldfb"
                  />
                </div>
              </div>
              <div className="forum-detail-container__input">
                <form>
                  <textarea rows={5}></textarea>
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
