import React, { useState } from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";

const FriendSuggestion: React.FC<{
  id: string;
  imageUrl: string;
  userFirstName: string;
  userLastName: string;
  userName: string;
}> = (props) => {
  const [error, setError] = useState();

  const friendAddHandler = async () => {
    const response = await fetch(`${baseUrl}/friend/addfriend/${props.id}`, {
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

  return (
    <li className="friend-suggestion">
      <div className="friend-information">
        <div className="user-avatar">
          <Link to={`/user/${props.id}`}>
            <img src={`https://localhost:7101/img/${props.imageUrl}`} />
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
