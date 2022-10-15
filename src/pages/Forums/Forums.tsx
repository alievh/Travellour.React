import { useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import ForumCard from "../../components/ForumCard/ForumCard";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { GetForums } from "../../store/Forum/ForumSlice";
import { useDispatch } from "react-redux";

const Forums = () => {
  const dispatch = useDispatch();

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const forums = useSelector((state: any) => state.ForumSlice);

  useEffect(() => {
    GetForums(dispatch);
  }, [dispatch]);

  return (
    // Forums Section - START
    <section className={`forums ${!sidebarIsActive && "sidebar-notactive"}`}>
      <div className="forums-container">
        <Container>
          <Row>
            <Col xl="12">
              <div className="forums-container__title">
                <h4>Forums</h4>
                <Link to="/forum/create">Create Forum</Link>
              </div>
              {/* Forums - START */}
              <div className="forums-container__forums">
                {forums.loading && <p className="loading">Loading...</p>}
                {forums.forums.map((f: any) => (
                  <ForumCard
                    key={f.id}
                    id={f.id}
                    title={f.forumTitle}
                    commentCount={f.commentCount}
                  />
                ))}
              </div>
              {/* Forums - END */}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    // Forums Section - END
  );
};

export default Forums;
