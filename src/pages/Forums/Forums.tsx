import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import ForumCard from "../../components/ForumCard/ForumCard";
import { Link } from "react-router-dom";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";
import { createModuleResolutionCache } from "typescript";

const Forums = () => {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  const getForums = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`${baseUrl}/forum/forumgetall`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
      },
    }).then((res) => {
      if (res.ok) {
        setLoading(false);
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });

    console.log(response);

    setForums(response);
  }, []);

  useEffect(() => {
    getForums();
  }, [getForums]);

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
                {loading && <p className="loading">Loading...</p>}
                {forums.map((f:any) => <ForumCard id={f.id} title={f.forumTitle} commentCount={f.commentCount} />)}
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
