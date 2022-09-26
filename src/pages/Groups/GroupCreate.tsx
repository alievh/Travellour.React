import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";

const GroupCreate = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    // Group Create Section - START
    <section
      className={`group-create ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <Container>
        <Row>
          <Col xl="8" sm="12">
            <div className="group-create-container">
              {/* Group Create Filter - START */}
              <div className="group-create-container__filter">
                <div className="filter-left">
                  <ul>
                    <li>All Groups</li>
                    <li>Joined Groups</li>
                    <li>My Groups</li>
                  </ul>
                </div>
              </div>
              {/* Group Create Filter - END */}
              {/* Group Create Form - START */}
              <div className="group-create-container__form">
                <form>
                  <div className="form-name">
                    <Input
                      placeholder="Group Name"
                      label="Type Group Name"
                      type="text"
                      id="group-name"
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
              {/* Group Create Form - END */}
            </div>
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
    // Group Create Section - END
  );
};

export default GroupCreate;
