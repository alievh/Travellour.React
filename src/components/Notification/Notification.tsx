import React from "react";
import Col from "../Bootstrap/Col";
import Button from "../UI/Button";

const Notification: React.FC<{
  userImage: string;
  userUsername: string;
  notificationContent: string;
}> = (props) => {
  return (
    <div className="notification">
      <Col lg="2" className="d-flex justify-content-center">
        <div className="notification__avatar">
          <a href="#">
            <img src={props.userImage} />
          </a>
        </div>
      </Col>
      <Col lg="8">
        <div className="notification__message">
          <p>
            <a href="#">@{props.userUsername}</a> {props.notificationContent}
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
