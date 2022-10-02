import React, { useState } from "react";
import Slider from "../Slider/Slider";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import Input from "../UI/Input";
import Col from "../Bootstrap/Col";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";
import { DeletePost } from "../../store/Post/PostSlice";

const Post: React.FC<{
  postId: string;
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
  const [commentIsActive, setCommentIsActive] = useState(false);

  const commentActiveHandler = () => {
    setCommentIsActive(!commentIsActive);
  };

  const postDeleteHandler = async () => {
    DeletePost(props.postId)
  };

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
              onClick={postDeleteHandler}
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
          <Button
            type="button"
            innerText="Like"
            buttonIcon="fa-regular fa-heart"
            className="comment"
          />
          <Button
            type="button"
            innerText="Comment"
            buttonIcon="fa-regular fa-comment-dots"
            className="comment"
            onClick={commentActiveHandler}
          />
        </div>
        <div className="post-comments"></div>
        {commentIsActive && (
          <div className="post-input">
            <form>
              <Col lg="10" sm="10">
                <Input
                  type="text"
                  id="post-comment-input"
                  placeholder="Type..."
                  mainDivClass="d-flex align-items-center"
                />
              </Col>
              <Col
                lg="2"
                sm="2"
                className="d-flex justify-content-center align-items-center"
              >
                <Button type="submit" className="btn" innerText="Share" />
              </Col>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
