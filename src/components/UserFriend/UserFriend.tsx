import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { RemoveFriend } from "../../store/Friend/FriendSlice";
import { useDispatch } from "react-redux";

const UserFriend: React.FC<{
  userId: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
}> = (props) => {
  const dispatch = useDispatch();

  const removeFriendHandler = async () => {
    RemoveFriend(dispatch, props.userId);
  };

  return (
    <div className="user-friend">
      <div className="user-friend__info">
        <div className="user-friend__avatar">
          <Link to={`/user/${props.userId}`}>
            <img
              src={`https://localhost:7101/img/${props.imageUrl}`}
              alt="User ProfilePhoto"
            />
          </Link>
        </div>
        <div className="user-friend__fullname">
          <h5>
            <Link to={`/user/${props.userId}`}>
              {props.firstName} {props.lastName}
            </Link>
          </h5>
          <span>Active</span>
        </div>
      </div>
      <div className="user-friend__request">
        <Button
          type="submit"
          className="btn btn-warning"
          innerText="Unfriend"
          onClick={removeFriendHandler}
        />
        <a href="#">
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default UserFriend;
