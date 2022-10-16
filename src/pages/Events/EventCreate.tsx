import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import FriendSuggestions from "../../components/FriendSuggestions/FriendSuggestions";
import { RootState } from "../../store";
import { CreateEvent } from "../../store/Event/EventSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const EventCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventImages, setEventImages] = useState("");

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const eventNameHandler = (
    event: FormEvent & { target: HTMLInputElement }
  ) => {
    setEventName(event.target.value);
  };

  const eventDescriptionHandler = (event: FormEvent & {target: HTMLTextAreaElement}) => {
    setEventDescription(event.target.value);
  };

  const eventImagesHandler = (event: any) => {
    setEventImages(event.target.files);
  };

  const eventCreateHandler = async () => {
    const formData = new FormData();
    formData.append("eventtitle", eventName);
    formData.append("eventdescription", eventDescription);
    for (let i = 0; i < eventImages.length; i++) {
      formData.append("imagefiles", eventImages[i]);
    }

    CreateEvent(dispatch, formData);
    navigate("/events");
  };

  return (
    // Event Create Section - START
    <section
      className={`event-create ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <Container>
        <Row>
          <Col xl="8" sm="12">
            <div className="event-create-container">
              {/* Event Create Filter - START */}
              <div className="event-create-container__filter">
                <div className="filter-left">
                  <ul>
                    <li>All Events</li>
                    <li>Joined Events</li>
                  </ul>
                </div>
              </div>
              {/* Event Create Filter - END */}
              {/* Event Create Form -START */}
              <div className="event-create-container__form">
                <form onSubmit={eventCreateHandler}>
                  <div className="form-title">
                    <Input
                      placeholder="Event Title"
                      label="Type Event Title"
                      type="text"
                      id="event-title"
                      onChange={eventNameHandler}
                    />
                  </div>
                  <div className="form-description">
                    <label>Type Event Description</label>
                    <textarea
                      placeholder="Event Description"
                      onChange={eventDescriptionHandler}
                    ></textarea>
                  </div>
                  <div className="form-image">
                    <Input
                      type="file"
                      label="Upload Event Image"
                      id="event-image"
                      placeholder="Choose Image"
                      onChange={eventImagesHandler}
                      multiple
                    />
                  </div>
                  <Button type="submit" className="btn" innerText="Create" />
                </form>
                {/* Event Create Form - END */}
              </div>
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
    // Event Create Section - END
  );
};

export default EventCreate;
