import React from "react";
import { Link } from "react-router-dom";

const EventMember: React.FC<{
  userId: string;
  userName: string;
  firstName: string;
  lastName: string;
}> = (props) => {
  return (
    <div className="event-member">
      <div className="event-member__info">
        <div className="event-member__fullname">
          <h5>
            {JSON.parse(localStorage.getItem("user") || "{}").user.id !==
            props.userId ? (
              <Link to={`/user/${props.userId}`}>
                {props.firstName} {props.lastName}
              </Link>
            ) : (
              <Link to="/profile">
                {props.firstName} {props.lastName}
              </Link>
            )}
          </h5>
          <span>@{props.userName}</span>
        </div>
      </div>
    </div>
  );
};

export default EventMember;
