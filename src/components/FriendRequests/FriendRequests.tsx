import React from "react";
import FriendRequest from "./FriendRequest";

const FriendRequests = () => {
  return (
    <div className="friend-requests">
      <h5>Friends Requests</h5>
      <div className="active-user">
        <ul>
          <FriendRequest
            imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
            userFirstName="Marvin"
            userLastName="McKinney"
            userName="marvin"
          />
          <FriendRequest
            imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
            userFirstName="Anar"
            userLastName="Balacayev"
            userName="anar"
          />
          <FriendRequest
            imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
            userFirstName="Huseyn"
            userLastName="Aliyev"
            userName="whose1n"
          />
          <FriendRequest
            imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
            userFirstName="Aysel"
            userLastName="Abilova"
            userName="aysel"
          />
        </ul>
      </div>
    </div>
  );
};

export default FriendRequests;
