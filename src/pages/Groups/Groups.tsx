import { useSelector } from "react-redux";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Button from "../../components/UI/Button";
import GroupCard from "../../components/GroupCard/GroupCard";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";

const Groups = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    <section className={`groups ${!sidebarIsActive && "sidebar-notactive"}`}>
      <Container>
        <Row>
          <Col xl="8" sm="12">
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
            <section className="groups-container">
              <Container>
                <div className="row justify-content-center">
                  <div className="groups-container__filter">
                    <div className="filter-left">
                      <ul>
                        <li>All Groups</li>
                        <li>Joined Groups</li>
                        <li>My Groups</li>
                      </ul>
                    </div>
                    <div className="filter-right">
                      <a href="#">Create Group</a>
                    </div>
                  </div>
                  <GroupCard
                    groupImage={require("../../assets/images/event-hiking.jpg")}
                    groupTitle="Hiking Club"
                  />
                  <GroupCard
                    groupImage={require("../../assets/images/event-surfing.jpg")}
                    groupTitle="Surfing Club"
                  />
                  <GroupCard
                    groupImage={require("../../assets/images/event-camping.jpg")}
                    groupTitle="Camping Club"
                  />
                  <GroupCard
                    groupImage={require("../../assets/images/event-hiking.jpg")}
                    groupTitle="Hiking Club"
                  />
                  <GroupCard
                    groupImage={require("../../assets/images/event-surfing.jpg")}
                    groupTitle="Surfing Club"
                  />
                  <GroupCard
                    groupImage={require("../../assets/images/event-camping.jpg")}
                    groupTitle="Camping Club"
                  />
                  <GroupCard
                    groupImage={require("../../assets/images/event-hiking.jpg")}
                    groupTitle="Hiking Club"
                  />
                  <GroupCard
                    groupImage={require("../../assets/images/event-surfing.jpg")}
                    groupTitle="Surfing Club"
                  />
                  <GroupCard
                    groupImage={require("../../assets/images/event-camping.jpg")}
                    groupTitle="Camping Club"
                  />
                </div>
              </Container>
            </section>
          </Col>
          <Col xl="4" sm="12">
            <section className="newsfeed-section">
              <ActiveUsers />
              <FriendRequests />
              <AddvertisingBanner />
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Groups;
