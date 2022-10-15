import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { JoinGroup, LeaveGroup } from "../../store/Group/GroupSlice";
import { useDispatch } from "react-redux";
import { CreateNotification } from "../../store/Notification/NotificationSlice";

const GroupCard: React.FC<{
  groupAdminId: string;
  groupImage: string;
  groupTitle: string;
  groupId: string;
  groupMembers: any;
}> = (props) => {
  const [isMember, setIsMember] = useState(false);
  const dispatch = useDispatch();

  const joinGroupHandler = () => {
    JoinGroup(dispatch, props.groupId);

    const notification = {
      message: "joined to your group",
      receiverId: props.groupAdminId,
    };

    CreateNotification(notification);
  };

  const leaveGroupHandler = () => {
    LeaveGroup(dispatch, props.groupId);
  };

  useEffect(() => {
    setIsMember(
      props.groupMembers.some(
        (n: any) =>
          n.id === JSON.parse(localStorage.getItem("user") || "{}").user.id
      )
    );
  }, [props.groupMembers]);

  return (
    <div className="card" style={{ width: "20rem" }}>
      {props.groupImage !== null ? (
        <img
          className="card-img-top"
          src={`https://localhost:7101/img/${props.groupImage}`}
          alt="GroupCardImage"
        />
      ) : (
        <img
          className="card-img-top"
          src={`https://localhost:7101/img/noprofilephoto.jpg`}
          alt="GroupCardImage"
        />
      )}
      <div className="card-body">
        <Link to={`/group/${props.groupId}`}>{props.groupTitle}</Link>
        {JSON.parse(localStorage.getItem("user") || "{}").user.id !==
        props.groupAdminId ? (
          isMember === false ? (
            <Button
              type="button"
              className="btn join-group"
              innerText="Join Group"
              onClick={joinGroupHandler}
            />
          ) : (
            <Button
              type="button"
              className="btn leave-group"
              innerText="Leave Group"
              onClick={leaveGroupHandler}
            />
          )
        ) : (
          <Link
            to={`/group/setting/${props.groupId}`}
            className="btn setting-button"
          >
            <i className="fa-solid fa-gear"></i> Setting
          </Link>
        )}
      </div>
    </div>
  );
};

export default GroupCard;
