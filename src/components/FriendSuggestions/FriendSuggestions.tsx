import { useEffect } from "react";
import FriendSuggestion from "./FriendSuggestion";
import { useSelector } from "react-redux";
import { GetFriendSuggestions } from "../../store/Friend/FriendSuggestionSlice";
import { useDispatch } from "react-redux";

const FriendSuggestions = () => {
  const dispatch = useDispatch();

  const friendSuggestions = useSelector((state: any) => state.FriendSuggestionSlice);


  useEffect(() => {
    GetFriendSuggestions(dispatch);
  }, [dispatch]);

  return (
    <div className="friend-suggestions">
      <h5>Friend Suggestions</h5>
      <div>
        <ul>
          {friendSuggestions.friendSuggestions.length > 0 ? friendSuggestions.friendSuggestions.map((f: any) => (
            <FriendSuggestion
              key={f.id}
              id={f.id}
              imageUrl={f.imageUrl}
              userFirstName={f.firstname}
              userLastName={f.lastname}
              userName={f.userName}
            />
          )) : <p>You don't have any friend suggestion!</p>}
        </ul>
      </div>
    </div>
  );
};

export default FriendSuggestions;
