import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import GroupMember from "../../components/GroupMember/GroupMember";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";

const GroupSetting = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    // Group Setting Section - START
    <section
      className={`group-setting ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <Container>
        <Row>
          <Col xl="8" sm="12">
            <div className="group-setting-container">
              {/* Group Setting Filter - START */}
              <div className="group-setting-container__title">
                <h4>Group Setting</h4>
              </div>
              {/* Group Setting Filter - END */}
              {/* Group Setting Form - START */}
              <div className="group-setting-container__form">
                <form>
                  <div className="form-name">
                    <Input
                      placeholder="Group Name"
                      label="Change Group Name"
                      type="text"
                      id="group-name"
                    />
                  </div>
                  <div className="form-description">
                    <label>Change Group Description</label>
                    <textarea placeholder="Group Description"></textarea>
                  </div>
                  <div className="form-image">
                    <Input
                      type="file"
                      label="Change Group Image"
                      id="group-image"
                      placeholder="Choose Image"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="btn"
                    innerText="Save Changes"
                  />
                </form>
              </div>
              {/* Group Setting Form - END */}
            </div>
            <div className="group-members__container">
              {/* Friends Filter - START */}
              <div className="group-members__title">
                <h4>Group Members</h4>
              </div>
              {/* Friends Filter - END */}
              {/* Friends - START */}
              <div className="group-members">
                <GroupMember
                  firstName="Huseyn"
                  lastName="Quliyev"
                  imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/33/1656654204-bpfull.jpg"
                />
                <GroupMember
                  firstName="Anar"
                  lastName="Balacayev"
                  imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/33/1656654204-bpfull.jpg"
                />
                <GroupMember
                  firstName="Aysel"
                  lastName="Abilov"
                  imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/21/1656593693-bpfull.jpg"
                />
                <GroupMember
                  firstName="Anar"
                  lastName="Balacayev"
                  imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/33/1656654204-bpfull.jpg"
                />
                <GroupMember
                  firstName="Aysel"
                  lastName="Abilov"
                  imageUrl="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/21/1656593693-bpfull.jpg"
                />
              </div>
              {/* Friends - END */}
            </div>
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
    // Group Setting Section - END
  );
};

export default GroupSetting;
