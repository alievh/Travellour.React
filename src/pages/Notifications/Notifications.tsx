import { useEffect } from "react";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import { useSelector } from "react-redux";
import Notification from "../../components/Notification/Notification";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import { RootState } from "../../store";
import { GetNotifications } from "../../store/Notification/NotificationSlice";
import { useDispatch } from "react-redux";
import { GetUserData } from "../../store/User/UserData";
import Loading from "../../components/Loading/Loading";

const Notifications = () => {
  const dispatch = useDispatch();

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const notifications = useSelector((state: any) => state.NotificationSlice);

  useEffect(() => {
    GetNotifications(dispatch);
    GetUserData(dispatch);
  }, [dispatch]);

  return (
    // Notifications Section - START
    <section
      className={`notifications ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <Container>
        <Row>
          <Col xl="8" sm="12">
            {/* Notifications - START */}
            <div className="notifications-container">
              {notifications.notifications.length > 0 &&
                notifications.loading && <Loading />}
              {notifications.notifications.length > 0 ? (
                !notifications.loading &&
                notifications.notifications.map((n: any) =>
                  n.post !== null ? (
                    <Notification
                      key={n.id}
                      notificationId={n.id}
                      userId={n.sender.id}
                      userImage={n.sender.profileImage.imageUrl}
                      userUsername={n.sender.userName}
                      notificationContent={n.message}
                      notificationStatus={n.notificationStatus}
                      postId={n.post.id}
                      createDate={n.fromCreateDate}
                    />
                  ) : (
                    <Notification
                      key={n.id}
                      notificationId={n.id}
                      userId={n.sender.id}
                      userImage={n.sender.profileImage.imageUrl}
                      userUsername={n.sender.userName}
                      notificationContent={n.message}
                      notificationStatus={n.notificationStatus}
                      createDate={n.fromCreateDate}
                    />
                  )
                )
              ) : (
                <p className="notification-null">
                  You don't have any notification
                </p>
              )}
            </div>
            {/* Notifications - END */}
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
    // Notifications Section - END
  );
};

export default Notifications;
