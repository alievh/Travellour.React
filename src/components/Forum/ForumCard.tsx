import React from "react";
import Col from "../Bootstrap/Col";

const ForumCard: React.FC<{
  title: string;
  commentCount: string;
  userImages?: string[];
}> = (props) => {
  return (
    <div className="forum">
      <Col xl="8">
        <div className="forum__title">
          <a href="#">{props.title}</a>
        </div>
      </Col>
      <Col xl="2">
        <div className="forum__statistics">
          <span>{props.commentCount}</span>
          <span>Comments</span>
        </div>
      </Col>
      <Col xl="2">
        <div className="forum__users">
          {props.userImages?.map((url) => (
            <div className="forum-user">
              <img src={url} />
            </div>
          ))}
        </div>
      </Col>
    </div>
  );
};

export default ForumCard;
