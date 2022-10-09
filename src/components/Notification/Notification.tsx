import React from "react";
import Col from "../Bootstrap/Col";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Notification: React.FC<{
  userId: string;
  userImage: string;
  userUsername: string;
  notificationContent: string;
  notificationStatus: string;
  postId: string;
}> = (props) => {
  return (
    <div className={`notification ${props.notificationStatus === "1" && "unchecked"}`}>
      <Col lg="2" className="d-flex justify-content-center">
        <div className="notification__avatar">
          <a href="#">
            <img src={`https://localhost:7101/img/${props.userImage}`} />
          </a>
        </div>
      </Col>
      <Col lg="8">
        <div className="notification__message">
          <p>
            <Link to={`/user/${props.userId}`}>@{props.userUsername}</Link> {props.notificationContent} <Link to={`/post/${props.postId}`}>post</Link>
          </p>
        </div>
      </Col>
      <Col lg="2">
        <div className="notification__remove">
          <Button type="button" innerText="Remove" className="btn" />
        </div>
      </Col>
    </div>
  );
};

export default Notification;
