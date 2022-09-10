import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import ForumCard from "../../components/Forum/ForumCard";

const Forums = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    <section className={`forums ${!sidebarIsActive && "sidebar-notactive"}`}>
      <div className="forums-container">
        <Container>
          <Row>
            <Col xl="12">
              <div className="forums-container__title">
                <h4>Forums</h4>
              </div>
              <div className="forums-container__forums">
                <ForumCard
                  title="How can I play CSGO better"
                  commentCount="21"
                  userImages={[
                    "https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg",
                    "https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg",
                    "https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg",
                  ]}
                />
                <ForumCard
                  title="How can I play Valorant better"
                  commentCount="12"
                  userImages={[
                    "https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg",
                    "https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg",
                    "https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg",
                  ]}
                />
                <ForumCard
                  title="How can I play Smite better"
                  commentCount="44"
                  userImages={[
                    "https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg",
                    "https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg",
                    "https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg",
                  ]}
                />
                <ForumCard
                  title="How can I play Civilization better"
                  commentCount="5"
                  userImages={[
                    "https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg",
                    "https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg",
                    "https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg",
                  ]}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Forums;
