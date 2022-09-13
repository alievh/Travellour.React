import React from "react";

const Post: React.FC<{
  userImage: string;
  userFirstname: string;
  userLastname: string;
  createdDate: string;
  postContent?: string;
  postImage?: string;
  likeCount: string;
  commentCount: string;
}> = (props) => {
  return (
    <div className="post">
      <div className="post-owner">
        <div className="owner-image">
          <a href="#">
            <img src={props.userImage} />
          </a>
        </div>
        <div className="owner-info">
          <a href="#">
            {props.userFirstname} {props.userLastname}
          </a>
          <span>{props.createdDate} ago</span>
        </div>
      </div>
      <div className="post-content">
        {props.postContent !== null ? <p>{props.postContent}</p> : ""}
        {props.postImage !== undefined ? (
          <img src={props.postImage} />
        ) : (
          <img src={props.postImage} className="d-none" />
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
