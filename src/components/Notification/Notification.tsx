import React from "react";
import Button from "../UI/Button";

const Notification: React.FC<{
  userImage: string;
  userUsername: string;
  notificationContent: string;
}> = (props) => {
  return (
    <div className="notification">
      <div className="col-lg-2 d-flex justify-content-center">
        <div className="notification__avatar">
          <a href="#">
            <img src={props.userImage} />
          </a>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="notification__message">
          <p>
            <a href="#">@{props.userUsername}</a> {props.notificationContent}
          </p>
        </div>
      </div>
      <div className="col-lg-2">
        <div className="notification__remove">
          <Button type="button" innerText="Remove" className="btn" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
