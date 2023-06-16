import React from "react";
import { Link } from "react-router-dom";

const GroupAdmin: React.FC<{
  adminId: string;
  adminImage: string;
  adminFirstName: string;
  adminLastName: string;
  adminUserName: string;
}> = (props) => {
  return (
    <div className="group-admin">
      <h5>Group Admin</h5>
      <div className="admin">
        <div className="admin-avatar">
          {JSON.parse(localStorage.getItem("user") || "{}").user.id ===
          props.adminId ? (
            <Link to="/profile">
              {props.adminImage === null ? (
                <img
                  src={require("../../assets/images/defaultprofilephoto.jpg")}
                  alt="AdminImage"
                />
              ) : (
                <img
                  src={`https://localhost:7101/img/${props.adminImage}`}
                  alt="AdminImage"
                />
              )}
            </Link>
          ) : (
            <Link to={`/user/${props.adminId}`}>
              {props.adminImage === null ? (
                <img
                  src={require("../../assets/images/defaultprofilephoto.jpg")}
                  alt="AdminImage"
                />
              ) : (
                <img
                  src={`https://localhost:7101/img/${props.adminImage}`}
                  alt="AdminImage"
                />
              )}
            </Link>
          )}
        </div>
        <div className="admin-details">
          {JSON.parse(localStorage.getItem("user") || "{}").user.id ===
          props.adminId ? (
            <Link to="/profile">
              <h6>
                {props.adminFirstName} {props.adminLastName}
              </h6>
            </Link>
          ) : (
            <Link to={`/user/${props.adminId}`}>
              <h6>
                {props.adminFirstName} {props.adminLastName}
              </h6>
            </Link>
          )}
          <span>@{props.adminUserName}</span>
        </div>
      </div>
    </div>
  );
};

export default GroupAdmin;
