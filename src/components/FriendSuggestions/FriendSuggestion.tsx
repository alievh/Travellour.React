import React from 'react';

const FriendSuggestion: React.FC<{
    userUrl: string;
    userFirstName: string;
    userLastName: string;
    userName: string;
  }>  = (props) => {
  return (
    <li className="friend-suggestion">
      <div className="user-avatar">
        <a href="#">
          <img src={props.userUrl} />
        </a>
      </div>
      <div className="user-details">
        <a href="#">
          <h6>{props.userFirstName} {props.userLastName}</h6>
        </a>
        <span>@{props.userName}</span>
      </div>
    </li>
  )
}

export default FriendSuggestion;