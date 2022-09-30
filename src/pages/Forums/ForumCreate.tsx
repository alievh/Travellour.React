import { useState } from "react";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";

const ForumCreate = () => {
  const [forumTitle, setForumTitle] = useState("");
  const [forumContent, setForumContent] = useState("");
  const [error, setError] = useState();

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  const forumTitleHandler = (event: any) => {
    setForumTitle(event.target.value);
  }

  const forumContentHandler = (event: any) => {
    setForumContent(event.target.value);
  }

  const forumCreateHandler = async () => {
    const forumCreate = {
      forumTitle,
      forumContent
    }

    console.log(forumCreate)

    const response = await fetch(`${baseUrl}/forum/forumcreate`, {
      method: "POST",
      body: JSON.stringify(forumCreate),
      headers: {
        "Authorization": `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
        "Content-Type": "application/json",
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
                <form onSubmit={forumCreateHandler}>
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
