import React from "react";

const UserMessage: React.FC<{
  message: string;
}> = (props) => {
  return (
    <div className="user-message-container">
      <div className="user-message">
        <div className="message-content">
          <p>{props.message}</p>
          <span>14:00PM</span>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
