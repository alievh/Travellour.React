import React from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

const EventCreate = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    <section
      className={`event-create ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <Container>
        <Row>
          <Col xl="8" sm="12">
            <div className="event-create-container">
              <div className="event-create-container__filter">
                <div className="filter-left">
                  <ul>
                    <li>All Events</li>
                    <li>Joined Events</li>
                  </ul>
                </div>
              </div>
              <div className="event-create-container__form">
                <form>
                  <div className="form-title">
                    <Input
                      placeholder="Event Title"
                      label="Type Event Title"
                      type="text"
                      id="event-title"
                    />
                  </div>
                  <div className="form-description">
                    <label>Type Event Description</label>
                    <textarea placeholder="Event Description"></textarea>
                  </div>
                  <div className="form-image">
                    <Input
                      type="file"
                      label="Upload Event Image"
                      id="event-image"
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

export default EventCreate;
