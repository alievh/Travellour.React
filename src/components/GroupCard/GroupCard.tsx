import React from "react";

const GroupCard: React.FC<{ groupImage: string, groupTitle: string }> = (props) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src={props.groupImage}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.groupTitle}</h5>
        <a href="#" className="btn btn-primary">
          Join Group
        </a>
      </div>
    </div>
  );
};

export default GroupCard;
