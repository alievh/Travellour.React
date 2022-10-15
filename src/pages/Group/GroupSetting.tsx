import { useEffect, useState } from "react";
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
import { RootState } from "../../store";
import { useParams } from "react-router-dom";
import { GetGroupDetail } from "../../store/Group/GroupDetailSlice";
import { useDispatch } from "react-redux";
import { ChangeGroup } from "../../store/Group/GroupSlice";

const GroupSetting = () => {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");

  const dispatch = useDispatch();
  const { id } = useParams();

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const groupTitleHandler = (event: any) => {
    setGroupName(event.target.value);
  };

  const groupDescriptionHandler = (event: any) => {
    setGroupDescription(event.target.value);
  };

  const changeGroupInfoHandler = () => {
    const groupUpdate = {
      id: id,
      groupName: groupName,
      groupDescription: groupDescription,
    };

    ChangeGroup(dispatch, groupUpdate);
    setGroupName("");
    setGroupDescription("");
  };

  const group = useSelector((state: any) => state.GroupDetailSlice);
  console.log(group);

  useEffect(() => {
    GetGroupDetail(dispatch, id);
  }, [dispatch, id]);

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
                <form onSubmit={changeGroupInfoHandler}>
                  <div className="form-name">
                    <Input
                      placeholder="Group Name"
                      label="Change Group Name"
                      type="text"
                      id="group-name"
                      value={groupName}
                      onChange={groupTitleHandler}
                    />
                  </div>
                  <div className="form-description">
                    <label>Change Group Description</label>
                    <textarea
                      placeholder="Group Description"
                      onChange={groupDescriptionHandler}
                      value={groupDescription}
                    ></textarea>
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
                {JSON.stringify(group.group) !== "{}"
                  ? group.group.groupMembers.map((gm: any) => (
                      <GroupMember
                        groupId={id}
                        userId={gm.id}
                        firstName={gm.firstname}
                        lastName={gm.lastname}
                        userName={gm.userName}
                      />
                    ))
                  : ""}
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
