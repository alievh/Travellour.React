import React from "react";
import Button from "../UI/Button";

const Comment: React.FC<{
  userId: string;
  userImage: string;
  userFirstname: string;
  userLastname: string;
  commentContent: string;
}> = (props) => {
  return (
    <div className="comment">
      <div className="comment-user">
        <div className="comment-user__avatar">
          <a href="#">
            <img
              src={`https://localhost:7101/img/${props.userImage}`}
              className="comment-user__avatar-img"
              alt="User Avatar"
            />
          </a>
        </div>
        <div className="comment-user__content">
          <a href="#">
            {props.userFirstname} {props.userLastname}
          </a>
          <p>{props.commentContent}</p>
        </div>
      </div>
      <div className="comment__remove">
        {props.userId ===
          JSON.parse(localStorage.getItem("user") || "{}").user.id && (
          <Button
            type="button"
            className="btn remove"
            buttonIcon="fa-solid fa-trash"
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
