import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { SendFriendRequest } from "../../store/Friend/FriendSuggestionSlice";
import { useDispatch, useSelector } from "react-redux";

const FriendSuggestion: React.FC<{
  id: string;
  imageUrl: string;
  userFirstName: string;
  userLastName: string;
  userName: string;
}> = (props) => {
  const dispatch = useDispatch();

  const friendAddHandler = async () => {
    SendFriendRequest(dispatch, props.id);
  };

  return (
    <li className="friend-suggestion">
      <div className="friend-information">
        <div className="user-avatar">
          <Link to={`/user/${props.id}`}>
            <img src={`https://localhost:7101/img/${props.imageUrl}`} alt="UserProfileImage" />
          </Link>
        </div>
        <div className="user-details">
          <Link to={`/user/${props.id}`}>
            <h6>
              {props.userFirstName} {props.userLastName}
            </h6>
          </Link>
          <span>@{props.userName}</span>
        </div>
      </div>
      <div className="friend-add">
        <Button
          type="button"
          className="btn"
          buttonIcon="fa-solid fa-user-plus"
          onClick={friendAddHandler}
        />
      </div>
    </li>
  );
};

export default FriendSuggestion;
