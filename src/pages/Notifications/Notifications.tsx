import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import { useSelector } from "react-redux";
import Button from "../../components/UI/Button";
import Notification from "../../components/Notification/Notification";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";

const Notifications = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    <div className={`notifications ${!sidebarIsActive && "sidebar-notactive"}`}>
      <Container>
        <Row>
          <Col xl="8" sm="12">
            <div className="notifications-container">
              <Notification
                userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/33/1656654204-bpfull.jpg"
                userUsername="marvin"
                notificationContent="added new photo"
              />
              <Notification
                userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/33/1656654204-bpfull.jpg"
                userUsername="anar"
                notificationContent="added new photo"
              />
              <Notification
                userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/33/1656654204-bpfull.jpg"
                userUsername="rafet"
                notificationContent="added new photo"
              />
              <Notification
                userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/33/1656654204-bpfull.jpg"
                userUsername="huseyn"
                notificationContent="added new photo"
              />
              <Notification
                userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/33/1656654204-bpfull.jpg"
                userUsername="marvin"
                notificationContent="added new photo"
              />
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
    </div>
  );
};

export default Notifications;
