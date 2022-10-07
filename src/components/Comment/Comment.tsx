import React, { useState } from "react";
import Button from "../UI/Button";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";
import { GetPosts } from "../../store/Post/PostSlice";
import { useDispatch } from "react-redux";
import { GetForumDetail } from "../../store/Forum/ForumDetailSlice";
import { Link } from "react-router-dom";

const Comment: React.FC<{
  commentId: string;
  userId: string;
  userImage: string;
  userFirstname: string;
  userLastname: string;
  commentContent: string;
  forumId?: string;
}> = (props) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();

  const deleteCommentHandler = async () => {
    await fetch(`${baseUrl}/post/commentdelete/${props.commentId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });

    GetPosts(dispatch);
    GetForumDetail(dispatch, props.forumId);
  };

  return (
    <div className="comment">
      <div className="comment-user">
        <div className="comment-user__avatar">
          {JSON.parse(localStorage.getItem("user") || "{}").user.id !==
          props.userId ? (
            <Link to={`/user/${props.userId}`}>
              <img src={`https://localhost:7101/img/${props.userImage}`} className="comment-user__avatar-img" />
            </Link>
          ) : (
            <Link to="/profile">
              <img src={`https://localhost:7101/img/${props.userImage}`} className="comment-user__avatar-img" />
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
