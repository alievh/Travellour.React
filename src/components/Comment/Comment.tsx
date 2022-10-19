import React from "react";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteComment } from "../../store/Post/PostActionSlice";

const Comment: React.FC<{
  commentId: string;
  userId: string;
  userImage: string;
  userFirstname: string;
  userLastname: string;
  commentContent: string;
  postId: string | undefined;
  forumId: string | undefined;
}> = (props) => {
  const dispatch = useDispatch();

  const deleteCommentHandler = async () => {
    DeleteComment(dispatch, props.commentId, props.postId , props.forumId);
  };

  return (
    <div className="comment">
      <div className="comment-user">
        <div className="comment-user__avatar">
          {JSON.parse(localStorage.getItem("user") || "{}").user.id !==
          props.userId ? (
            <Link to={`/user/${props.userId}`}>
              <img
                src={`https://localhost:7101/img/${props.userImage}`}
                className="comment-user__avatar-img"
                alt="UserImage"
              />
            </Link>
          ) : (
            <Link to="/profile">
              <img
                src={`https://localhost:7101/img/${props.userImage}`}
                className="comment-user__avatar-img"
                alt="UserImage"
              />
            </Link>
          )}
        </div>
        <div className="comment-user__content">
          {JSON.parse(localStorage.getItem("user") || "{}").user.id !==
          props.userId ? (
            <Link to={`/user/${props.userId}`}>
              {props.userFirstname} {props.userLastname}
            </Link>
          ) : (
            <Link to="/profile">
              {props.userFirstname} {props.userLastname}
            </Link>
          )}
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
            onClick={deleteCommentHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
