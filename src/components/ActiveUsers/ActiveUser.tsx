import React from "react";

const ActiveUser: React.FC<{
  userImg: string;
  userFirstName: string;
  userLastName: string;
}> = (props) => {
  return (
    <li className="active-user">
      <div className="user-avatar">
        <a href="#">
          <img src={props.userImg} />
        </a>
      </div>
      <div className="user-details">
        <a href="#">
          <h6>{props.userFirstName} {props.userLastName}</h6>
        </a>
        <span>Active</span>
      </div>
    </li>
  );
};

export default ActiveUser;
