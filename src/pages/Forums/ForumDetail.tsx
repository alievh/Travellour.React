import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import Comment from "../../components/Comment/Comment";
import Button from "../../components/UI/Button";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";

const ForumDetail = () => {
  const [forumData, setForumData] = useState({
    forumTitle: "",
    forumContent: "",
  });
  const [error, setError] = useState();

  const { id } = useParams();

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  const forumDetailData = useCallback(async () => {
    const forumInfo = await fetch(
      `${baseUrl}/forum/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user") || "{}").token
          }`,
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });

    console.log(forumInfo);
    setForumData(forumInfo);
  }, []);

  useEffect(() => {
    forumDetailData();
  }, [forumDetailData]);

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
                <h4>{forumData.forumTitle}</h4>
              </div>
              <div className="forum-detail-container__content">
                <p>
                  {forumData.forumContent}
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
