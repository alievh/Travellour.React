import { useCallback, useState, useEffect } from "react";
import Button from "../../components/UI/Button";
import { useSelector } from "react-redux";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Post from "../../components/Post/Post";
import GroupAdmin from "../../components/GroupAdmin/GroupAdmin";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";
import { RootState } from "../../store";

const Group = () => {
  const [groupData, setGroupData] = useState({
    groupName: "",
    groupDescription: "",
    groupImage: "",
  });
  const [error, setError] = useState();
  let { id } = useParams();

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const groupDetailData = useCallback(async () => {
    const groupInfo = await fetch(`${baseUrl}/group/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
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

    console.log(groupInfo);
    setGroupData(groupInfo);
  }, []);

  useEffect(() => {
    groupDetailData();
  }, [groupDetailData]);

  return (
    // Group Section - START
    <section
      className={`group-section ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <div className="profile-section__background">
        <img
          src={require("../../assets/images/auth-poster.jpg")}
          alt="Group Background"
        />
      </div>
      <Container>
        <Row>
          <div className="group">
            <Col lg="2">
              {/* Group Avatar - START */}
              <div className="group__details">
                <div className="group-avatar">
                  <img
                    src={`https://localhost:7101/img/${groupData.groupImage}`}
                    alt="Group Avatar"
                  />
                </div>
              </div>
              {/* Group Avatar - END */}
            </Col>
            {/* Group Decription - START */}
            <Col lg="6">
              <div className="group__description">
                <h5>{groupData.groupName}</h5>
                <p>{groupData.groupDescription}</p>
              </div>
            </Col>
            {/* Group Decription - END */}
            {/* Group Statistics - START */}
            <Col lg="2" className="d-flex">
              <div className="group__statistics">
                <ul>
                  <li>
                    <span>12</span>
                    <span>Post</span>
                  </li>
                  <li>
                    <span>77</span>
                    <span>Members</span>
                  </li>
                </ul>
              </div>
            </Col>
            {/* Group Statistics - END */}
            <Col
              lg="2"
              className="d-flex justify-content-center align-items-center"
            >
              <div className="group__request">
                <form>
                  <Button
                    type="submit"
                    innerText="Join Group"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </Col>
          </div>
        </Row>
        <Row>
          {/* Group Posts - START */}
          <Col xl="8" sm="12">
            <section className="newsfeed-section">
              <div className="newsfeed-section__posts">
                <Post
                  postId="123"
                  userId="123"
                  userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                  userFirstname="Marvin"
                  userLastname="McKinney"
                  createdDate="6 hours"
                  postContent="Hi Guys!"
                  postImages={undefined}
                  likeCount="2"
                  commentCount="4"
                />
                <Post
                  postId="123"
                  userId="123"
                  userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                  userFirstname="Marvin"
                  userLastname="McKinney"
                  createdDate="6 hours"
                  postContent="Hello from the other side!"
                  likeCount="2"
                  commentCount="4"
                />
                <Post
                  postId="123"
                  userId="123"
                  userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                  userFirstname="Marvin"
                  userLastname="McKinney"
                  createdDate="6 hours"
                  postContent="Hi Guys!"
                  postImages={undefined}
                  likeCount="2"
                  commentCount="4"
                />
                <Post
                  postId="123"
                  userId="123"
                  userImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/29/1661833790-bpthumb.jpg"
                  userFirstname="Marvin"
                  userLastname="McKinney"
                  createdDate="6 hours"
                  postContent="Hello from the other side!"
                  likeCount="2"
                  commentCount="4"
                />
              </div>
            </section>
            {/* Group Posts - END */}
          </Col>
          {/* Right SideBar - START */}
          <Col xl="4" sm="12">
            <section className="newsfeed-section">
              <GroupAdmin
                adminImage="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/1/1656590103-bpfull.jpg"
                adminFirstName="Anar"
                adminLastName="Balayan"
                adminUserName="anaryan"
              />
              <FriendRequests />
              <AddvertisingBanner />
            </section>
          </Col>
          {/* Right SideBar - END */}
        </Row>
      </Container>
    </section>
    // Group Section - END
  );
};

export default Group;
