import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import Comment from "../../components/Comment/Comment";
import Button from "../../components/UI/Button";

const ForumDetail = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    // Forums Section - START
    <section
      className={`forum-detail ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <div className="forums-container">
        <Container>
          <Row>
            <Col xl="12">
              <div className="forum-detail-container__title">
                <h4>How can I play CSGO better?</h4>
              </div>
              <div className="forum-detail-container__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repudiandae ratione harum voluptate! Laborum tenetur
                  reiciendis magni et soluta magnam placeat debitis ducimus nam
                  mollitia vero quos, nesciunt nemo itaque? Perferendis ab
                  maiores obcaecati ea earum consectetur, et maxime amet
                  accusantium ducimus! Esse explicabo, illum alias perferendis
                  culpa aliquid. Quos minus aliquid optio autem aut fugiat,
                  alias incidunt cum iste mollitia commodi ipsam possimus
                  exercitationem culpa in debitis perspiciatis explicabo nostrum
                  blanditiis? Porro enim voluptatum tempore inventore iste!
                  Voluptate, odio! Doloremque, deserunt quisquam adipisci
                  repellat facilis saepe accusamus cupiditate excepturi dolorum
                  aliquam voluptates laboriosam. Sequi ullam molestias rerum
                  itaque. Sapiente, architecto!
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
