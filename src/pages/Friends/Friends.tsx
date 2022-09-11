import { useSelector } from "react-redux";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Col from "../../components/Bootstrap/Col";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import Button from "../../components/UI/Button";
import UserFriend from "../../components/UserFriend/UserFriend";

const Friends = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    // Friends - START
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
                  <UserFriend
                    firstName="Huseyn"
                    lastName="Quliyev"
                    imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/33/1656654204-bpfull.jpg"
                  />
                  <UserFriend
                    firstName="Anar"
                    lastName="Balacayev"
                    imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/33/1656654204-bpfull.jpg"
                  />
                  <UserFriend
                    firstName="Aysel"
                    lastName="Abilov"
                    imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/21/1656593693-bpfull.jpg"
                  />
                  <UserFriend
                    firstName="Anar"
                    lastName="Balacayev"
                    imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/33/1656654204-bpfull.jpg"
                  />
                  <UserFriend
                    firstName="Aysel"
                    lastName="Abilov"
                    imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/21/1656593693-bpfull.jpg"
                  />
                </div>
                {/* Friends - END */}
              </div>
            </section>
          </Col>
          {/* Right SideBar - START */}
          <Col xl="4" sm="12">
            <section className="newsfeed-section">
              <ActiveUsers />
              <FriendRequests />
              <AddvertisingBanner />
            </section>
          </Col>
          {/* Right SideBar - END */}
        </Row>
      </Container>
    </section>
    // Friends - END
  );
};

export default Friends;
