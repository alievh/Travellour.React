import { useEffect, useState } from "react";
import Button from "../../components/UI/Button";
import { useSelector } from "react-redux";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Post from "../../components/Post/Post";
import GroupAdmin from "../../components/GroupAdmin/GroupAdmin";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store";
import {
  GetGroupDetail,
  GroupCoverPhotoChanger,
  GroupProfilePhotoChanger,
} from "../../store/Group/GroupDetailSlice";
import { useDispatch } from "react-redux";
import { CreatePost } from "../../store/Post/PostSlice";
import { JoinGroup, LeaveGroup } from "../../store/Group/GroupSlice";
import { CreateNotification } from "../../store/Notification/NotificationSlice";
import { GetGroupPosts } from "../../store/Group/GroupPostSlice";

const Group = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMember, setIsMember] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [fileUpload, setFileUpload] = useState("");
  
  const { id } = useParams();

  const postCreateHandler = () => {
    const formData = new FormData();
    for (let i = 0; i < fileUpload.length; i++) {
      formData.append("imagefiles", fileUpload[i]);
    }
    formData.append("content", postContent);
    if (id !== undefined) {
      formData.append("groupId", id);
    }

    CreatePost(dispatch, formData);
  };

  const postContentHandler = (event: any) => {
    setPostContent(event.target.value);
  };

  const fileUploadHandler = (event: any) => {
    setFileUpload(event.target.files);
  };

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const groupDetail = useSelector((state: any) => state.GroupDetailSlice);

  const groupPosts = useSelector((state: any) => state.GroupPostSlice);

  const joinGroupHandler = async () => {
    JoinGroup(dispatch, id);

    const notification = {
      message: "joined to your group",
      receiverId: groupDetail.group.groupAdmin.id,
    };

    CreateNotification(notification);
  };

  const leaveGroupHandler = async () => {
    LeaveGroup(dispatch, id);
  };

  const profilePhotoHandler = (event: any) => {
    profilePhotoChangeHandler(event.target.files[0]);
  };

  const coverPhotoHandler = (event: any) => {
    coverPhotoChangeHandler(event.target.files[0]);
  };

  const profilePhotoChangeHandler = async (photo: any) => {
    const formData = new FormData();
    formData.append("imagefile", photo);

    GroupProfilePhotoChanger(dispatch,navigate, formData, id);
  };

  const coverPhotoChangeHandler = async (photo: any) => {
    const formData = new FormData();
    formData.append("imagefile", photo);

    GroupCoverPhotoChanger(dispatch,navigate, formData, id);
  };

  useEffect(() => {
    GetGroupDetail(dispatch,navigate, id);
    GetGroupPosts(dispatch, id);
  }, [dispatch,navigate, id]);

  useEffect(() => {
    if (groupDetail.group.groupMembers !== undefined) {
      setIsMember(
        groupDetail.group.groupMembers.some(
          (n: any) =>
            n.id === JSON.parse(localStorage.getItem("user") || "{}").user.id
        )
      );
    } else {
      setIsMember(false);
    }
  }, [groupDetail.group.groupMembers]);

  return (
    // Group Section - START
    <section
      className={`group-section ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <div className="group-section__background">
        {JSON.stringify(groupDetail.group) !== "{}" &&
        groupDetail.group.coverImage !== null ? (
          <img
            src={`https://localhost:7101/img/${groupDetail.group.coverImage}`}
            alt="Group Avatar"
          />
        ) : (
          <img
            src={`https://localhost:7101/img/defaultbackground.jpg`}
            alt="Group Avatar"
          />
        )}
        {JSON.stringify(groupDetail.group) !== "{}" &&
        JSON.parse(localStorage.getItem("user") || "{}").user.id ===
          groupDetail.group.groupAdmin.id ? (
          <form>
            <label className="backgroundphoto-label">
              <input
                type="file"
                accept="image/*"
                name="imagefile"
                onChange={coverPhotoHandler}
              />
              <i className="fa-solid fa-camera"></i>
            </label>
          </form>
        ) : (
          ""
        )}
      </div>
      <Container>
        <Row>
          <div className="group">
            <Col lg="2">
              {/* Group Avatar - START */}
              <div className="group__details">
                <div className="group-avatar">
                  {JSON.stringify(groupDetail.group) !== "{}" &&
                  groupDetail.group.profileImage !== null ? (
                    <img
                      src={`https://localhost:7101/img/${groupDetail.group.profileImage}`}
                      alt="Group Avatar"
                    />
                  ) : (
                    <img
                      src={`https://localhost:7101/img/noprofilephoto.jpg`}
                      alt="Group Avatar"
                    />
                  )}
                  {JSON.stringify(groupDetail.group) !== "{}" &&
                  JSON.parse(localStorage.getItem("user") || "{}").user.id ===
                    groupDetail.group.groupAdmin.id ? (
                    <form>
                      <label className="profilphoto-label">
                        <input
                          type="file"
                          accept="image/*"
                          name="imagefile"
                          onChange={profilePhotoHandler}
                        />
                        <i className="fa-solid fa-camera"></i>
                      </label>
                    </form>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {/* Group Avatar - END */}
            </Col>
            {/* Group Decription - START */}
            <Col lg="6">
              <div className="group__description">
                <h5>{groupDetail.group.groupName}</h5>
                <p>{groupDetail.group.groupDescription}</p>
              </div>
            </Col>
            {/* Group Decription - END */}
            {/* Group Statistics - START */}
            <Col lg="2" className="d-flex">
              <div className="group__statistics">
                <ul>
                  <li>
                    <span>{groupDetail.group.postCount}</span>
                    <span>Post</span>
                  </li>
                  <li>
                    <span>{groupDetail.group.memberCount}</span>
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
                {JSON.stringify(groupDetail.group) !== "{}" ? (
                  groupDetail.group.groupAdmin.id !==
                  JSON.parse(localStorage.getItem("user") || "{}").user.id ? (
                    <form>
                      {isMember === false ? (
                        <Button
                          type="submit"
                          innerText="Join Group"
                          className="btn btn-primary"
                          onClick={joinGroupHandler}
                        />
                      ) : (
                        <Button
                          type="submit"
                          innerText="Leave Group"
                          className="btn btn-danger"
                          onClick={leaveGroupHandler}
                        />
                      )}
                    </form>
                  ) : (
                    <Link
                      to={`/group/setting/${id}`}
                      className="btn btn-primary"
                    >
                      <i className="fa-solid fa-gear"></i> Setting
                    </Link>
                  )
                ) : (
                  ""
                )}
              </div>
            </Col>
          </div>
        </Row>
        <Row>
          {/* Group Posts - START */}
          <Col xl="8" sm="12">
            <section className="newsfeed-section">
              <div className="newsfeed-section__post-create">
                <form onSubmit={postCreateHandler}>
                  <textarea onChange={postContentHandler}></textarea>
                  <div className="post-create__bottom">
                    <label>
                      <input
                        type="file"
                        accept="image/*"
                        name="imagefiles"
                        multiple
                        onChange={fileUploadHandler}
                      />
                      <i className="fa-solid fa-image"></i>
                      Upload Photo
                    </label>
                    <Button type="submit" className="btn" innerText="Share" />
                  </div>
                </form>
              </div>
              <div className="newsfeed-section__posts">
                {groupPosts.error && <p>{groupPosts.error}</p>}
                {groupPosts.groupPosts.length > 0
                  ? groupPosts.groupPosts.map((p: any) =>
                      p.images !== null ? (
                        <Post
                          postId={p.id}
                          userId={p.user.id}
                          userImage={p.user.profileImage === null ? null :`https://localhost:7101/img/${p.user.profileImage.imageUrl}`}
                          userFirstname={p.user.firstname}
                          userLastname={p.user.lastname}
                          createdDate="6 hours"
                          postContent={p.content}
                          postImages={p.imageUrls}
                          likeCount={p.likeCount}
                          commentCount={p.commentCount}
                          likes={p.likes}
                          comments={p.comments}
                          groupId={id}
                          postOwnerId={undefined}
                        />
                      ) : (
                        <Post
                          postId={p.id}
                          userId={p.user.id}
                          userImage={p.user.profileImage === null ? null :`https://localhost:7101/img/${p.user.profileImage.imageUrl}`}
                          userFirstname={p.user.firstname}
                          userLastname={p.user.lastname}
                          createdDate="6 hours"
                          postContent={p.content}
                          likeCount={p.likeCount}
                          commentCount={p.commentCount}
                          likes={p.likes}
                          comments={p.comments}
                          groupId={id}
                          postOwnerId={undefined}
                        />
                      )
                    )
                  : ""}
              </div>
            </section>
            {/* Group Posts - END */}
          </Col>
          {/* Right SideBar - START */}
          <Col xl="4" sm="12">
            <section className="newsfeed-section">
              {groupDetail.group.groupAdmin !== undefined ? (
                <GroupAdmin
                  adminId={groupDetail.group.groupAdmin.id}
                  adminImage={
                    groupDetail.group.groupAdmin.profileImage === null ? null : groupDetail.group.groupAdmin.profileImage.imageUrl
                  }
                  adminFirstName={groupDetail.group.groupAdmin.firstname}
                  adminLastName={groupDetail.group.groupAdmin.lastname}
                  adminUserName={groupDetail.group.groupAdmin.userName}
                />
              ) : (
                ""
              )}
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
