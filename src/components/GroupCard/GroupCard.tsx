import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";
import { GetGroups } from "../../store/Group/GroupSlice";
import { useDispatch } from "react-redux";

const GroupCard: React.FC<{
  groupImage: string;
  groupTitle: string;
  groupId: string;
}> = (props) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();

  const joinGroupHandler = async () => {
    await fetch(`${baseUrl}/group/groupjoin/${props.groupId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
        "Content-Type": "application/json",
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

    GetGroups(dispatch);
  };

  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src={`https://localhost:7101/img/${props.groupImage}`}
        alt="Card image cap"
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
