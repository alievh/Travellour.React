import React from "react";

const GroupAdmin: React.FC<{
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
          <a href="#">
            <img src={props.adminImage} />
          </a>
        </div>
        <div className="admin-details">
          <a href="#">
            <h6>
              {props.adminFirstName} {props.adminLastName}
            </h6>
          </a>
          <span>@{props.adminUserName}</span>
        </div>
      </div>
    </div>
  );
};

export default GroupAdmin;
