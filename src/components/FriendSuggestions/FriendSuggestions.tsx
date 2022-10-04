import FriendSuggestion from "./FriendSuggestion";
import { useCallback, useState, useEffect } from "react";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";

const FriendSuggestions = () => {
  const [friendSuggestion, setFriendSuggestion] = useState([]);
  const [error, setError] = useState();

  const friendSuggestions = useCallback(async () => {
    const suggestions = await fetch(`${baseUrl}/friend/friendsuggestion`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user") || "{}").token}`,
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

  return (
    <div className="friend-suggestions">
      <h5>Friend Suggestions</h5>
      <div>
        <ul>
          {friendSuggestion.map((f: any) => (
            <FriendSuggestion
              id={f.id}
              imageUrl={f.imageUrl}
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
