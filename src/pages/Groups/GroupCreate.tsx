import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";

const GroupCreate = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    <section
      className={`group-create ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <Container>
        <Row>
          <Col xl="8" sm="12">
            <div className="group-create-container">
              <div className="group-create-container__filter">
                <div className="filter-left">
                  <ul>
                    <li>All Groups</li>
                    <li>Joined Groups</li>
                    <li>My Groups</li>
                  </ul>
                </div>
              </div>
              <div className="group-create-container__form">
                <form>
                  <div className="form-title">
                    <Input
                      placeholder="Group Title"
                      label="Type Group Title"
                      type="text"
                      id="group-title"
                    />
                  </div>
                  <div className="form-description">
                    <label>Type Group Description</label>
                    <textarea placeholder="Group Description"></textarea>
                  </div>
                  <div className="form-image">
                    <Input
                      type="file"
                      label="Upload Group Image"
                      id="group-image"
                      placeholder="Choose Image"
                    />
                  </div>
                  <Button type="submit" className="btn" innerText="Create" />
                </form>
              </div>
            </div>
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

export default GroupCreate;
