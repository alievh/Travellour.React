import React from "react";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import { useSelector } from "react-redux";

const ForumCreate = () => {
    const sidebarIsActive = useSelector((state:any) => state.sidebarToggle.isActive);

  return (
    <section
      className={`forum-create ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <Container>
        <Row>
          <Col xl="8" sm="12">
            <div className="forum-create-container">
              <div className="forum-create-container__filter">
                <div className="filter-left">
                  <ul>
                    <li>Go Back</li>
                  </ul>
                </div>
              </div>
              <div className="forum-create-container__form">
                <form>
                  <div className="form-title">
                    <Input
                      placeholder="Forum Title"
                      label="Type Forum Title"
                      type="text"
                      id="forum-title"
                    />
                  </div>
                  <div className="form-description">
                    <label>Type Group Description</label>
                    <textarea rows={5} placeholder="Forum Description"></textarea>
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

export default ForumCreate;
