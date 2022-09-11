import React from "react";
import Col from "../Bootstrap/Col";
import ForumUser from "../ForumUser/ForumUser";

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
          {props.userImages?.map((url) => (<ForumUser userImages={url} />))}
        </div>
      </Col>
    </div>
  );
};

export default ForumCard;
