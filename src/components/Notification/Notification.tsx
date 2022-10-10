import React from "react";
import Col from "../Bootstrap/Col";
import { Link } from "react-router-dom";
import { SetNotificationsChecked } from "../../store/Notification/NotificationSlice";
import { setUserData } from "../../store/User/UserData";
import { useDispatch } from "react-redux";

const Notification: React.FC<{
  userId: string;
  userImage: string;
  userUsername: string;
  notificationContent: string;
  notificationStatus: number;
  postId?: string;
}> = (props) => {
  const dispatch = useDispatch();

  const setCheckedNotificationHandler = () => {
    SetNotificationsChecked();
    setUserData(dispatch);
  };

  return (
    <div
      className={`notification ${
        props.notificationStatus === 1 && "unchecked"
      }`}
    >
      <Col lg="2" className="d-flex justify-content-center">
        <div className="notification__avatar">
          <a href="#">
            <img src={`https://localhost:7101/img/${props.userImage}`} />
          </a>
        </div>
      </Col>
      <Col lg="10">
        <div className="notification__message">
          <p>
            <Link
              to={`/user/${props.userId}`}
              className="notification__message-username"
            >
              @{props.userUsername}
            </Link>{" "}
            {props.notificationContent}{" "}
            {props.postId !== undefined ? (
              <Link to={`/post/${props.postId}`}>
                <span onClick={setCheckedNotificationHandler}>post</span>
              </Link>
            ) : (
              ""
            )}
          </p>
        </div>
      </Col>
    </div>
  );
};

export default Notification;
