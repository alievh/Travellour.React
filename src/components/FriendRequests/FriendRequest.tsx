import React from "react";
import Button from "../UI/Button";
import {
  AcceptFriendRequest,
  RejectFriendRequest,
} from "../../store/Friend/FriendRequestSlice";
import { useDispatch } from "react-redux";
import { GetAllFriend } from "../../store/Friend/FriendSlice";

const FriendRequest: React.FC<{
  userId: string;
  imageUrl: string;
  userFirstName: string;
  userLastName: string;
  userName: string;
}> = (props) => {
  const dispatch = useDispatch();

  const acceptFriendHandler = () => {
    AcceptFriendRequest(dispatch, props.userId);
    
  };

  const rejectFriendHandler = () => {
    RejectFriendRequest(dispatch, props.userId);
  };

  return (
    <li className="friend-request">
      <div className="friend-request__info">
        <div className="friend-request__user-avatar">
          <a href="#">
            <img src={`https://localhost:7101/img/${props.imageUrl}`} />
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
      <div className="friend-request__action">
        <Button
          type="button"
          className="btn accept-friend"
          buttonIcon="fa-solid fa-plus"
          onClick={acceptFriendHandler}
        />
        <Button
          type="button"
          className="btn reject-friend"
          buttonIcon="fa-solid fa-minus"
          onClick={rejectFriendHandler}
        />
      </div>
    </li>
  );
};

export default FriendRequest;
