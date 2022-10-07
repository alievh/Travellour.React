import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { JoinGroup } from "../../store/Group/GroupSlice";
import { useDispatch } from "react-redux";

const GroupCard: React.FC<{
  groupImage: string;
  groupTitle: string;
  groupId: string;
}> = (props) => {
  const dispatch = useDispatch();

  const joinGroupHandler = async () => {
    JoinGroup(dispatch, props.groupId);
  };

  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src={`https://localhost:7101/img/${props.groupImage}`}
        alt="GroupCardImage"
      />
      <div className="card-body">
        <Link to={`/group/${props.groupId}`}>{props.groupTitle}</Link>
        <Button
          type="button"
          className="btn"
          innerText="Join Group"
          onClick={joinGroupHandler}
        />
      </div>
    </div>
  );
};

export default GroupCard;
