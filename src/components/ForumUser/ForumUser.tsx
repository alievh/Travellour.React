import React from "react";

const ForumUser: React.FC<{ userImages: string }> = (props) => {
  return (
    <div className="forum-user">
      <img src={props.userImages} alt="User Avatar" />
    </div>
  );
};

export default ForumUser;
