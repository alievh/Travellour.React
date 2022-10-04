import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import Button from "../../components/UI/Button";
import UserFriend from "../../components/UserFriend/UserFriend";
import { RootState } from "../../store";
import { GetAllFriend } from "../../store/Friend/FriendSlice";

const Friends = () => {
  const dispatch = useDispatch();

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const allFriends = useSelector((state: any) => state.FriendSlice);

  useEffect(() => {
    GetAllFriend(dispatch);
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
                  {allFriends.friends.map((f: any) => (
                    <UserFriend
                      userId={f.id}
                      firstName={f.firstname}
                      lastName={f.lastname}
                      imageUrl={f.profileImage}
                    />
                  ))}
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
