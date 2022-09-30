import React from "react";
import ForumUser from "../ForumUser/ForumUser";
import { Link } from "react-router-dom";

const ForumCard: React.FC<{
  id: string;
  title: string;
  commentCount: string;
  userImages?: string[];
}> = (props) => {
  return (
    <div className="forum">
        <div className="forum__title">
          <Link to={`/forum/${props.id}`}>{props.title}</Link>
        </div>
        <div className="forum__statistics">
          <span>{props.commentCount}</span>
          <span>Comments</span>
        </div>
        <div className="forum__users">
          {props.userImages?.map((url) => (
            <ForumUser userImages={url} />
          ))}
        </div>
    </div>
  );
};

export default ForumCard;
