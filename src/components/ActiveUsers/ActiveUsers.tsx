import React from "react";

import ActiveUser from "./ActiveUser";

const ActiveUsers = () => {
  return (
    <div className="active-users">
      <h5>Active User</h5>
      <div>
        <ul>
          <ActiveUser
            userImg="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
            userFirstName="Marvin"
            userLastName="McKinney"
          />
          <ActiveUser
            userImg="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
            userFirstName="Anar"
            userLastName="Balacayev"
          />
        </ul>
      </div>
    </div>
  );
};

export default ActiveUsers;
