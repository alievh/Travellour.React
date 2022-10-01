import React from "react";
import Slider from "../Slider/Slider";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Post: React.FC<{
  userId: string;
  userImage: string;
  userFirstname: string;
  userLastname: string;
  createdDate: string;
  postContent?: string;
  postImages?: string[];
  likeCount: string;
  commentCount: string;
}> = (props) => {
  return (
    <div className="post">
      <div className="post-owner-information">
        <div className="post-owner">
          <div className="owner-image">
            {JSON.parse(localStorage.getItem("user") || "{}").user.id !==
            props.userId ? (
              <Link to={`/user/${props.userId}`}>
                <img src={props.userImage} />
              </Link>
            ) : (
              <Link to="/profile">
                <img src={props.userImage} />
              </Link>
            )}
          </div>
          <div className="owner-info">
            {JSON.parse(localStorage.getItem("user") || "{}").user.id !== props.userId ? <Link to={`/user/${props.userId}`}>
              {props.userFirstname} {props.userLastname}
            </Link> : <Link to="/profile">
              {props.userFirstname} {props.userLastname}
            </Link>}
            <span>{props.createdDate} ago</span>
          </div>
        </div>
        {JSON.parse(localStorage.getItem("user") || "{}").user.id ===
        props.userId ? (
          <div className="post-delete">
            <Button
              type="button"
              className="btn"
              buttonIcon="fa-solid fa-trash"
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="post-content">
        {props.postContent !== null ? <p>{props.postContent}</p> : ""}
        {props.postImages !== undefined && props.postImages.length !== 0 ? (
          props.postImages.length > 1 ? (
            <Slider images={props.postImages} />
          ) : (
            <img src={`https://localhost:7101/img/${props.postImages[0]}`} />
          )
        ) : (
          ""
        )}
        <div className="post-statistics">
          <span>
            {props.likeCount}
            <span>Likes</span>
          </span>
          <span>
            {props.commentCount}
            <span>Comments</span>
          </span>
        </div>
        <div className="post-activity">
          <a href="#">
            <i className="fa-regular fa-heart"></i>
            <span>Like</span>
          </a>
          <a href="#">
            <i className="fa-regular fa-comment-dots"></i>
            <span>Comment</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
