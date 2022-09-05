import React from "react";

const FriendRequest: React.FC<{
  userImg: string;
  userFirstName: string;
  userLastName: string;
  userName: string;
}> = (props) => {
  return (
    <li className="friend-request">
      <div className="friend-request__user-avatar">
        <a href="#">
          <img src={props.userImg} />
        </a>
      </div>
      <div className="user-details">
        <a href="#">
          <h6>
            {props.userFirstName} {props.userLastName}
          </h6>
        </a>
        <span>@{props.userName}</span>
      </div>
    </li>
  );
};

export default FriendRequest;
