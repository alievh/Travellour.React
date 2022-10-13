import React from "react";
import Col from "../Bootstrap/Col";
import { Link } from "react-router-dom";
import { SetNotificationsChecked } from "../../store/Notification/NotificationSlice";
import { setUserData } from "../../store/User/UserData";
import { useDispatch } from "react-redux";

const Notification: React.FC<{
  notificationId: string;
  userId: string;
  userImage: string;
  userUsername: string;
  notificationContent: string;
  notificationStatus: number;
  postId?: string;
  createDate: string;
}> = (props) => {
  const dispatch = useDispatch();

  const setCheckedNotificationHandler = () => {
    SetNotificationsChecked(props.notificationId);
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
          <Link to={`/user/${props.userId}`}>
            <img
              onClick={setCheckedNotificationHandler}
              src={`https://localhost:7101/img/${props.userImage}`}
              alt="profileImage"
            />
          </Link>
        </div>
      </Col>
      <Col lg="8">
        <div className="notification__message">
          <p>
            <Link
              to={`/user/${props.userId}`}
              className="notification__message-username"
            >
              <span onClick={setCheckedNotificationHandler}>
                @{props.userUsername}
              </span>
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
      <Col lg="2">
        <div className="notification__date">
          <span>{props.createDate}</span>
        </div>
      </Col>
    </div>
  );
};

export default Notification;
