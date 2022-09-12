import React from "react";
import Button from "../UI/Button";

const Comment: React.FC<{
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
            <img src={props.userImage} alt="User Avatar" />
          </a>
        </div>
        <div className="comment-user__content">
          <a href="#">
            {props.userFirstname} {props.userLastname}
          </a>
          <p>{props.commentContent}</p>
        </div>
      </div>
      <div className="comment__like">
        <Button
          type="button"
          className="like"
          buttonIcon="fa-regular fa-thumbs-up"
        />
      </div>
    </div>
  );
};

export default Comment;
