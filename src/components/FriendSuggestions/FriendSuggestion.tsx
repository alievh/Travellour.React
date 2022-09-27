import React from "react";
import Button from "../UI/Button";

const FriendSuggestion: React.FC<{
  userUrl: string;
  userFirstName: string;
  userLastName: string;
  userName: string;
}> = (props) => {
  return (
    <li className="friend-suggestion">
      <div className="friend-information">
        <div className="user-avatar">
          <a href="#">
            <img src={props.userUrl} />
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
      </div>
      <div className="friend-add">
        <Button
          type="button"
          className="btn"
          buttonIcon="fa-solid fa-user-plus"
        />
      </div>
    </li>
  );
};

export default FriendSuggestion;
