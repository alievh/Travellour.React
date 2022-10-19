import { useEffect, useState } from "react";
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
import { GetAllFriend, SearchFriend } from "../../store/Friend/FriendSlice";

const Friends = () => {
  const dispatch = useDispatch();
  const [searchFriend, setSearchFriend] = useState();

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const allFriends = useSelector((state: any) => state.FriendSlice);

  const searchInputHandler = (event: any) => {
    setSearchFriend(event.target.value);
  }

  const searchHandler = (event: any) => {
    event.preventDefault();
    SearchFriend(dispatch, searchFriend);
  }

  useEffect(() => {
    GetAllFriend(dispatch);
  }, [dispatch]);

  return (
    // Friends Section - START
    <section className={`friends ${!sidebarIsActive && "sidebar-notactive"}`}>
      <Container>
        <Row>
          <Col xl="8" sm="12">
            {/* Friends Search - START*/}
            <section className="friends__search-section">
              <div className="friends__search">
                <form onSubmit={searchHandler}>
                  <input type="text" placeholder="Search Friend" onChange={searchInputHandler}></input>
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
                {/* Friends - START */}
                <div className="user-friends">
                  {allFriends.friends.length > 0 ? allFriends.friends.map((f: any) => (
                    <UserFriend
                      key={f.id}
                      userId={f.id}
                      firstName={f.firstname}
                      lastName={f.lastname}
                      imageUrl={f.profileImage}
                      userName={f.userName}
                    />
                  )) : <p>No friend found!</p>}
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
