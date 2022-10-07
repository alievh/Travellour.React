import React from "react";
import ForumUser from "../ForumUser/ForumUser";
import { Link } from "react-router-dom";
import Col from "../Bootstrap/Col";

const ForumCard: React.FC<{
  id: string;
  title: string;
  commentCount: string;
  userImages?: string[];
}> = (props) => {
  return (
    <div className="forum">
      <Col lg="6">
        <div className="forum__title">
          <Link to={`/forum/${props.id}`}>{props.title}</Link>
        </div>
      </Col>
      <Col lg="3">
        <div className="forum__statistics">
          <span>{props.commentCount}</span>
          <span>Comments</span>
        </div>
      </Col>
      <Col lg="3">
        <div className="forum__users">
          {props.userImages?.map((url) => (
            <ForumUser userImages={url} />
          ))}
        </div>
      </Col>
    </div>
  );
};

export default ForumCard;
