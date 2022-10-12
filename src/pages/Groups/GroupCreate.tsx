import { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { CreateGroup } from "../../store/Group/GroupSlice";
import { useDispatch } from "react-redux";

const GroupCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const groupNameHandler = (
    event: FormEvent & { target: HTMLInputElement }
  ) => {
    setGroupName(event.target.value);
  };

  const groupDescriptionHandler = (
    event: FormEvent & { target: HTMLTextAreaElement }
  ) => {
    setGroupDescription(event.target.value);
  };

  const groupCreateHandler = async () => {
    const groupCreate = {
      groupName: groupName,
      groupDescription: groupDescription
    }

    CreateGroup(dispatch, groupCreate);
    navigate("/groups");
  };

  return (
    // Group Create Section - START
    <section
      className={`group-create ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <Container>
        <Row>
          <Col xl="8" sm="12">
            <div className="group-create-container">
              {/* Group Create Filter - START */}
              <div className="group-create-container__filter">
                <div className="filter-left">
                  <Link to="/groups">Back</Link>
                </div>
              </div>
              {/* Group Create Filter - END */}
              {/* Group Create Form - START */}
              <div className="group-create-container__form">
                <form onSubmit={groupCreateHandler}>
                  <div className="form-name">
                    <Input
                      placeholder="Group Name"
                      label="Type Group Name"
                      type="text"
                      id="group-name"
                      name="groupname"
                      onChange={groupNameHandler}
                    />
                  </div>
                  <div className="form-description">
                    <label>Type Group Description</label>
                    <textarea
                      placeholder="Group Description"
                      name="groupdescription"
                      onChange={groupDescriptionHandler}
                    ></textarea>
                  </div>
                  <Button type="submit" className="btn" innerText="Create" />
                </form>
              </div>
              {/* Group Create Form - END */}
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
    // Group Create Section - END
  );
};

export default GroupCreate;
