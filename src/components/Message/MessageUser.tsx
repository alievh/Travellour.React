import React from "react";

const MessageUser: React.FC<{
  id: string;
  imageUrl: string;
  userFirstName: string;
  userLastName: string;
}> = (props) => {
  return (
    <li className="message-user">
      <div className="user-information">
        <div className="user-avatar">
            <img
              src={`https://localhost:7101/img/${props.imageUrl}`}
              alt="UserProfileImage"
            />
        </div>
        <div className="user-details">
            <h6>
              {props.userFirstName} {props.userLastName}
            </h6>
        </div>
      </div>
    </li>
  );
};

export default MessageUser;
