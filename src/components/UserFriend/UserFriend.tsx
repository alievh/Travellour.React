import React from "react";

import Button from "../UI/Button";

const UserFriend: React.FC<{
  imageUrl: string;
  firstName: string;
  lastName: string;
}> = (props) => {
  return (
    <div className="user-friend">
      <div className="user-friend__info">
        <div className="user-friend__avatar">
          <a href="#">
            <img src={`https://localhost:7101/img/${props.imageUrl}`} />
          </a>
        </div>
        <div className="user-friend__fullname">
          <h5>
            <a href="#">
              {props.firstName} {props.lastName}
            </a>
          </h5>
          <span>Active</span>
        </div>
      </div>
      <div className="user-friend__request">
        <Button
          type="submit"
          className="btn btn-warning"
          innerText="Unfriend"
        />
        <a href="#">
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default UserFriend;
