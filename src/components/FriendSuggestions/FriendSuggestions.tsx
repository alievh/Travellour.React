import FriendSuggestion from "./FriendSuggestion";
import { useCallback, useState, useEffect } from "react";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";
import { useSelector } from "react-redux";

const FriendSuggestions = () => {
  const [friendSuggestion, setFriendSuggestion] = useState([]);
  const [error, setError] = useState();

  const userToken = useSelector((state: any) => state.AuthReducer.accessToken);

  const friendSuggestions = useCallback(async () => {
    const suggestions = await fetch(`${baseUrl}/user/friendsuggestion`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });

    setFriendSuggestion(suggestions);
  }, []);

  useEffect(() => {
    friendSuggestions();
  }, [friendSuggestions]);

  console.log(friendSuggestion);

  return (
    <div className="friend-suggestions">
      <h5>Friend Suggestions</h5>
      <div>
        <ul>
          {friendSuggestion.map((f : any) => (
            <FriendSuggestion
              userUrl={`https://localhost:7101/img/${f.profileImage.imageUrl}`}
              userFirstName={f.firstname}
              userLastName={f.lastname}
              userName={f.userName}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendSuggestions;
