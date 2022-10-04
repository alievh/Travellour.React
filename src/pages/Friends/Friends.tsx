import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Col from "../../components/Bootstrap/Col";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import Button from "../../components/UI/Button";
import UserFriend from "../../components/UserFriend/UserFriend";
import { RootState } from "../../store";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";

const Friends = () => {
  const [allFriends, setAllFriends] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const getAllFriends = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`${baseUrl}/friend/getallfriend`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
      },
    }).then((res) => {
      if (res.ok) {
        setLoading(false);
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });

    console.log(response);
    setAllFriends(response);
  }, []);

  useEffect(() => {
    getAllFriends();
  }, []);

  return (
    // Friends Section - START
    <section className={`friends ${!sidebarIsActive && "sidebar-notactive"}`}>
      <Container>
        <Row>
          <Col xl="8" sm="12">
            {/* Friends Search - START*/}
            <section className="friends__search-section">
              <div className="friends__search">
                <form>
                  <input type="text" placeholder="Search Friend"></input>
                  <Button
                    buttonIcon="fa-solid fa-magnifying-glass"
                    type="submit"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </section>
            {/* Friends Search - END*/}
            <section>
              <div className="friends__container">
                {/* Friends Filter - START */}
                <div className="friends__filter">
                  <ul>
                    <li>My Friends</li>
                    <li>Friend Requests</li>
                  </ul>
                  <form>
                    <label>Show By:</label>
                    <select>
                      <option>Active</option>
                      <option>Alphabetical</option>
                    </select>
                  </form>
                </div>
                {/* Friends Filter - END */}
                {/* Friends - START */}
                <div className="user-friends">
                  {allFriends.map((f:any) => <UserFriend firstName={f.firstname} lastName={f.lastname} imageUrl={f.profileImage} />)}
                </div>
                {/* Friends - END */}
              </div>
            </section>
          </Col>
          {/* Right SideBar - START */}
          <Col xl="4" sm="12">
            <section className="newsfeed-section">
              <FriendRequests />
              <FriendSuggestions />
              <AddvertisingBanner />
            </section>
          </Col>
          {/* Right SideBar - END */}
        </Row>
      </Container>
    </section>
    // Friends Section - END
  );
};

export default Friends;
