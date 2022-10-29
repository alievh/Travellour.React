import React from "react";

const UserMessage: React.FC<{
  message: string;
  date: string;
}> = (props) => {
  return (
    <div className="user-message-container">
      <div className="user-message">
        <div className="message-content">
          <p>{props.message}</p>
          <span>{props.date}</span>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
