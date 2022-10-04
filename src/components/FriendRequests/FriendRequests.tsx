import { useState, useEffect } from "react";
import FriendRequest from "./FriendRequest";
import { GetFriendRequests } from "../../store/Friend/FriendRequestSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const FriendRequests = () => {
  const dispatch = useDispatch();

  const friendRequests = useSelector((state: any) => state.FriendRequestSlice);

  useEffect(() => {
    GetFriendRequests(dispatch);
  }, []);

  return (
    <div className="friend-requests">
      <h5>Friends Requests</h5>
      <div className="active-user">
        <ul>
          {friendRequests.friendRequests.map((f:any) => <FriendRequest userId={f.id} userFirstName={f.firstname} userLastName={f.lastname} userName={f.userName} imageUrl={f.profileImage} />)}
        </ul>
      </div>
    </div>
  );
};

export default FriendRequests;
