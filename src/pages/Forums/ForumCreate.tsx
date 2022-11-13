import { FormEvent, useState } from "react";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import { RootState } from "../../store";
import { CreateForum } from "../../store/Forum/ForumSlice";
import { useDispatch } from "react-redux";

const ForumCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [forumTitle, setForumTitle] = useState("");
  const [forumContent, setForumContent] = useState("");

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const forumTitleHandler = (
    event: FormEvent & { target: HTMLInputElement }
  ) => {
    setForumTitle(event.target.value);
  };

  const forumContentHandler = (
    event: FormEvent & { target: HTMLTextAreaElement }
  ) => {
    setForumContent(event.target.value);
  };

  const forumCreateHandler = async () => {
    const forumCreate = {
      forumTitle,
      forumContent,
    };

    CreateForum(dispatch, forumCreate);
    navigate("/forums");
  };

  return (
    // Forum Create Section - START
    <section
      className={`forum-create ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <Container>
        <Row>
          <Col xl="8" sm="12">
            <div className="forum-create-container">
              {/* Forum Create Filter - START */}
              <div className="forum-create-container__filter">
                <div className="filter-left">
                  <ul>
                    <li>
                      <Link to="/forums">Go Back</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Forum Create Filter - END */}
              {/* Forum Create Form - START */}
              <div className="forum-create-container__form">
                <form onSubmit={forumCreateHandler} autoComplete="off">
                  <div className="form-title">
                    <Input
                      placeholder="Forum Title"
                      label="Type Forum Title"
                      type="text"
                      id="forum-title"
                      onChange={forumTitleHandler}
                    />
                  </div>
                  <div className="form-description">
                    <label>Type Group Description</label>
                    <textarea
                      rows={5}
                      placeholder="Forum Description"
                      onChange={forumContentHandler}
                    ></textarea>
                  </div>
                  <Button type="submit" className="btn" innerText="Create" />
                </form>
              </div>
              {/* Forum Create Form - END */}
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
    // Forum Create Section - END
  );
};

export default ForumCreate;
