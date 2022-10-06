import React, { useState } from "react";
import Button from "../UI/Button";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";
import { Link } from "react-router-dom";
import { GetAllFriend } from "../../store/Friend/FriendSlice";
import { useDispatch } from "react-redux";

const UserFriend: React.FC<{
  userId: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
}> = (props) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();

  const removeFriendHandler = async () => {
    const response = await fetch(
      `${baseUrl}/friend/deletefriend/${props.userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user") || "{}").token
          }`,
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });

    GetAllFriend(dispatch);
  };

  return (
    <div className="user-friend">
      <div className="user-friend__info">
        <div className="user-friend__avatar">
          <Link to={`/user/${props.userId}`}>
            <img src={`https://localhost:7101/img/${props.imageUrl}`} />
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
