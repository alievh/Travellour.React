import React from "react";
import { Link } from "react-router-dom";

const SearchUser: React.FC<{
  id: string;
  imageUrl: string;
  userFirstName: string;
  userLastName: string;
  userName: string;
}> = (props) => {
  return (
    <li className="friend-suggestion">
      <div className="friend-information">
        <div className="user-avatar">
          <Link to={`/user/${props.id}`}>
            {props.imageUrl === null ? (
              <img
                src={require("../../assets/images/defaultprofilephoto.jpg")}
                alt="UserProfileImage"
              />
            ) : (
              <img
                src={`https://localhost:7101/img/${props.imageUrl}`}
                alt="UserProfileImage"
              />
            )}
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
    </li>
  );
};

export default SearchUser;
