import React, { useState } from "react";
import Button from "../UI/Button";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";

const FriendRequest: React.FC<{
  userId: string;
  imageUrl: string;
  userFirstName: string;
  userLastName: string;
  userName: string;
}> = (props) => {
  const [error, setError] = useState();

  const acceptFriendHandler = async () => {
    const response = await fetch(`${baseUrl}/friend/acceptfriend/${props.userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });
  };

  const rejectFriendHandler = async () => {
    const response = await fetch(`${baseUrl}/friend/rejectfriend/${props.userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });
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
