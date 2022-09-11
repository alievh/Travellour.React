import React from "react";
import Button from "../UI/Button";

const GroupMember: React.FC<{
  firstName: string;
  lastName: string;
  imageUrl: string;
}> = (props) => {
  return (
    <div className="group-member">
      <div className="group-member__info">
        <div className="group-member__avatar">
          <a href="#">
            <img src={props.imageUrl} />
          </a>
        </div>
        <div className="group-member__fullname">
          <h5>
            <a href="#">
              {props.firstName} {props.lastName}
            </a>
          </h5>
          <span>Active</span>
        </div>
      </div>
      <div className="group-member__request">
        <Button
          type="submit"
          className="btn"
          innerText="Kick"
        />
      </div>
    </div>
  );
};

export default GroupMember;
