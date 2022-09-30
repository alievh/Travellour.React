import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const GroupCard: React.FC<{ groupImage: string, groupTitle: string, groupId: string }> = (props) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src={`https://localhost:7101/img/${props.groupImage}`}
        alt="Card image cap"
      />
      <div className="card-body">
        <Link to={`/group/${props.groupId}`}>{props.groupTitle}</Link>
        <Button type="button" className="btn" innerText="Join Group" />
      </div>
    </div>
  );
};

export default GroupCard;
