import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import { useSelector } from "react-redux";
import Button from "../../components/UI/Button";
import Notification from "../../components/Notification/Notification";

const Notifications = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    <div className={`notifications ${!sidebarIsActive && "sidebar-notactive"}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-sm-12">
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
          </div>
          <div className="col-xl-4 col-sm-12">
            <section className="newsfeed-section">
              <ActiveUsers />
              <FriendRequests />
              <AddvertisingBanner />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
