import React from "react";
import { useDispatch } from "react-redux";
import { GetMessages, GetSelectedUser } from "../../store/Message/MessageSlice";

const MessageUser: React.FC<{
  id: string;
  imageUrl: string;
  userFirstName: string;
  userLastName: string;
}> = (props) => {
  const dispatch = useDispatch();

  const getMessagesHandler = () => {
    GetSelectedUser(dispatch, props.id);
    GetMessages(dispatch, props.id);
  };

  return (
    <li className="message-user" onClick={getMessagesHandler}>
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
