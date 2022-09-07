import { useSelector } from "react-redux";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import Button from "../../components/UI/Button";
import UserFriend from "../../components/UserFriend/UserFriend";

const Friends = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    <section className={`friends ${!sidebarIsActive && "sidebar-notactive"}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-sm-12">
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
            <section>
              <div className="friends__container">
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
              </div>
            </section>
          </div>
          <div className="col-xl-4 col-sm-12">
            <section className="newsfeed-section">
              <ActiveUsers />
              <FriendRequests />
              <AddvertisingBanner />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Friends;
