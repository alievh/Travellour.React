import React from "react";

const FriendMessage: React.FC<{
  friendImage: string;
  friendName: string;
  friendSurname: string;
  message: string;
}> = (props) => {
  return (
    <div className="friend-message-container">
      <div className="friend-message">
        <div className="friend-message__avatar">
          <img src={`https://localhost:7101/img/${props.friendImage}`} alt="userImage" />
        </div>
        <div className="message-content">
          <p>{props.message}</p>
          <span>14:00PM</span>
        </div>
      </div>
    </div>
  );
};

export default FriendMessage;
