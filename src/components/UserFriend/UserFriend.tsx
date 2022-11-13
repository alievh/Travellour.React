import React, { useEffect } from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { RemoveFriend } from "../../store/Friend/FriendSlice";
import { useDispatch, useSelector } from "react-redux";
import { AddOnlineUser } from "../../store/Online/OnlineUserSlice";

const UserFriend: React.FC<{
  userId: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
  userName: string;
}> = (props) => {
  const dispatch = useDispatch();

  const removeFriendHandler = async () => {
    RemoveFriend(dispatch, props.userId);
  };

  const onlineUsers = useSelector((state: any) => state.OnlineUserSlice);

  useEffect(() => {
    AddOnlineUser(dispatch);
  }, [dispatch])

  return (
    <div className="user-friend">
      <div className="user-friend__info">
        <div className="user-friend__avatar">
          {onlineUsers.isOnline !== undefined
            ? onlineUsers.isOnline.map((u: any) =>
                u === props.userId ? <span></span> : ""
              )
            : ""}
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
          <span>@{props.userName}</span>
        </div>
      </div>
      <div className="user-friend__request">
        <Button
          type="submit"
          className="btn btn-warning"
          innerText="Unfriend"
          onClick={removeFriendHandler}
        />
        <Link to="/messages">
          <i className="fa-regular fa-envelope"></i>
        </Link>
      </div>
    </div>
  );
};

export default UserFriend;
