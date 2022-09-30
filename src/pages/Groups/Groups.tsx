import { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Button from "../../components/UI/Button";
import GroupCard from "../../components/GroupCard/GroupCard";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import { Link } from "react-router-dom";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  const getGroups = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`${baseUrl}/group/groupgetall`, {
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

    setGroups(response);
  }, []);

  useEffect(() => {
    getGroups();
  }, [getGroups]);

  return (
    // Groups Section - START
    <section className={`groups ${!sidebarIsActive && "sidebar-notactive"}`}>
      <Container>
        <Row>
          <Col xl="8" sm="12">
            {/* Groups Search - START */}
            <section className="friends__search-section">
              <div className="friends__search">
                <form>
                  <input type="text" placeholder="Search Group"></input>
                  <Button
                    buttonIcon="fa-solid fa-magnifying-glass"
                    type="submit"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </section>
            {/* Groups Search - END */}
            <section className="groups-container">
              <Container>
                <div className="row justify-content-center">
                  {/* Groups Filter - START */}
                  <div className="groups-container__filter">
                    <div className="filter-left">
                      <ul>
                        <li>All Groups</li>
                        <li>Joined Groups</li>
                        <li>My Groups</li>
                      </ul>
                    </div>
                    <div className="filter-right">
                      <Link to="/groups/create" className="group-create">Create Group</Link>
                    </div>
                  </div>
                  {/* Groups Filter - END */}
                  {/* Groups - START */}
                  {loading && <p className="loading">Loading...</p>}
                  {groups.map((g: any) => (
                    <GroupCard
                      groupId={g.id}
                      groupTitle={g.groupName}
                      groupImage={g.groupImage}
                    />
                  ))}
                  {/* Groups - END */}
                </div>
              </Container>
            </section>
          </Col>
          {/* Right SideBar - START */}
          <Col xl="4" sm="12">
            <section className="newsfeed-section">
              <FriendRequests />
              <FriendSuggestions />
              <AddvertisingBanner />
            </section>
          </Col>
          {/* Right SideBar - END */}
        </Row>
      </Container>
    </section>
    // Groups Section - END
  );
};

export default Groups;
