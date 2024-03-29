import React, { useState } from "react";
import Slider from "../Slider/Slider";
import Button from "../UI/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import Col from "../Bootstrap/Col";
import { DeletePost } from "../../store/Post/PostSlice";
import { useDispatch } from "react-redux";
import Comment from "../Comment/Comment";
import {
  AddComment,
  AddLike,
  DeleteLike,
} from "../../store/Post/PostActionSlice";
import { CreateNotification } from "../../store/Notification/NotificationSlice";

const Post: React.FC<{
  postId: string;
  userId: string;
  userImage?: string | null;
  userFirstname: string;
  userLastname: string;
  createdDate: string;
  postContent?: string;
  postImages?: string[];
  likeCount: string;
  commentCount: string;
  likes: Array<any>;
  comments: Array<any>;
  groupId: string | undefined;
  postOwnerId: string | undefined;
  group?: any | null;
}> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [commentIsActive, setCommentIsActive] = useState(false);
  const [commentContent, setCommentContent] = useState("");

  const addLikeHandler = async () => {
    AddLike(dispatch, navigate, props.postId, props.userId, props.groupId);

    if (
      JSON.parse(localStorage.getItem("user") || "{}").user.id !== props.userId
    ) {
      const notification = {
        message: "liked your",
        receiverId: props.userId,
        postId: props.postId,
      };

      CreateNotification(notification);
    }
  };

  const deleteLikeHandler = async () => {
    DeleteLike(dispatch, navigate, props.postId, props.userId, props.groupId);
  };

  const commentContentHandler = (event: any) => {
    setCommentContent(event.target.value);
  };

  const addCommentHandler = async (event: any) => {
    event.preventDefault();
    if (commentContent.length > 0) {
      const comment = {
        postId: props.postId,
        content: commentContent,
      };

      AddComment(
        dispatch,
        navigate,
        comment,
        undefined,
        props.userId,
        props.groupId
      );

      if (
        JSON.parse(localStorage.getItem("user") || "{}").user.id !==
        props.userId
      ) {
        const notification = {
          message: "commented to your",
          receiverId: props.userId,
          postId: props.postId,
        };

        CreateNotification(notification);
      }
    }

    setCommentContent("");
  };

  const commentActiveHandler = () => {
    setCommentIsActive(!commentIsActive);
  };

  const postDeleteHandler = async () => {
    DeletePost(dispatch, props.postId);
  };

  return (
    <div className="post">
      <div className="post-owner-information">
        <div className="post-owner">
          <div className="owner-image">
            {JSON.parse(localStorage.getItem("user") || "{}").user.id !==
            props.userId ? (
              <Link to={`/user/${props.userId}`}>
                {props.userImage === null ? (
                  <img
                    src={require("../../assets/images/defaultprofilephoto.jpg")}
                    alt="PostImage"
                  />
                ) : (
                  <img src={props.userImage} alt="PostImage" />
                )}
              </Link>
            ) : (
              <Link to="/profile">
                {props.userImage === null ? (
                  <img
                    src={require("../../assets/images/defaultprofilephoto.jpg")}
                    alt="PostImage"
                  />
                ) : (
                  <img src={props.userImage} alt="PostImage" />
                )}
              </Link>
            )}
          </div>
          <div className="owner-info">
            <div className="">
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
              {props.group !== null && props.group !== undefined ? (
                <span> - from {props.group.groupName}</span>
              ) : (
                ""
              )}
            </div>
            <span>{props.createdDate}</span>
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
            <img
              src={`https://localhost:7101/img/${props.postImages[0]}`}
              alt="PostImage"
              className="post-image"
            />
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
          {props.likes.some(
            (n) =>
              n.userId ===
              JSON.parse(localStorage.getItem("user") || "{}").user.id
          ) ? (
            <Button
              type="button"
              innerText="Like"
              buttonIcon="fa-solid fa-heart"
              className="like  liked"
              onClick={deleteLikeHandler}
            />
          ) : (
            <Button
              type="button"
              innerText="Like"
              buttonIcon="fa-regular fa-heart"
              className="like"
              onClick={addLikeHandler}
            />
          )}
          <Button
            type="button"
            innerText="Comment"
            buttonIcon="fa-regular fa-comment-dots"
            className="comment"
            onClick={commentActiveHandler}
          />
        </div>
        <div className="post-comments">
          {props.comments.length > 0 &&
            props.comments.map((c) => (
              <Comment
                key={c.id}
                commentId={c.id}
                userId={c.user.id}
                userImage={c.user.profileImage === null ? null : c.user.profileImage.imageUrl}
                userFirstname={c.user.firstname}
                userLastname={c.user.lastname}
                commentContent={c.content}
                postId={c.postId}
                forumId={undefined}
                groupId={props.groupId}
                postOwnerId={props.postOwnerId}
              />
            ))}
        </div>
        {commentIsActive && (
          <div className="post-input">
            <form onSubmit={addCommentHandler}>
              <Col lg="10" sm="10">
                <Input
                  type="text"
                  id="post-comment-input"
                  placeholder="Type..."
                  mainDivClass="d-flex align-items-center"
                  onChange={commentContentHandler}
                  value={commentContent}
                  autoComplete="off"
                />
              </Col>
              <Col
                lg="2"
                sm="2"
                className="d-flex justify-content-end align-items-center"
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
