import React from "react";
import Button from "../UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { KickFromGroup } from "../../store/Group/GroupSlice";
import { useDispatch } from "react-redux";

const GroupMember: React.FC<{
  userId: string;
  userName: string;
  firstName: string;
  lastName: string;
  groupId: string | undefined;
}> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const kickHandler = () => {
    KickFromGroup(dispatch,navigate, props.userId, props.groupId)
  }

  return (
    <div className="group-member">
      <div className="group-member__info">
        <div className="group-member__fullname">
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
      <div className="group-member__request">
        <Button type="submit" className="btn" innerText="Kick" onClick={kickHandler} />
      </div>
    </div>
  );
};

export default GroupMember;
