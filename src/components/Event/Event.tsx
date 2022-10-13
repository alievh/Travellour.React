import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { JoinEvent, LeaveEvent } from "../../store/Event/EventSlice";
import { CreateNotification } from "../../store/Notification/NotificationSlice";
import Col from "../Bootstrap/Col";
import Row from "../Bootstrap/Row";
import Slider from "../Slider/Slider";
import Button from "../UI/Button";

const Event: React.FC<{
  eventCreatorId: string;
  eventId: string;
  eventImages: string[];
  eventTitle: string;
  eventContent: string;
  eventMembers: any;
}> = (props) => {
  const dispatch = useDispatch();
  const [isMember, setIsMember] = useState(false);

  const joinEventHandler = () => {
    JoinEvent(dispatch, props.eventId);

    const notification = {
      message: "joined to your event",
      receiverId: props.eventCreatorId,
    };

    CreateNotification(notification);
  };

  const leaveEventHandler = () => {
    LeaveEvent(dispatch, props.eventId);
  };

  const checkIsMember = () => {
    if (props.eventMembers.length > 0) {
      props.eventMembers.map(
        (e: any) =>
          e.id === JSON.parse(localStorage.getItem("user") || "{}").user.id &&
          setIsMember(true)
      );
    }
  };

  useEffect(() => {
    checkIsMember();
  });

  return (
    <div className="events-container__event">
      <Row className="justify-content-between">
        <Col lg="3" className="event-image">
          {props.eventImages.length > 1 ? (
            <Slider images={props.eventImages} />
          ) : (
            <img
              src={`https://localhost:7101/img/${props.eventImages[0]}`}
              alt="EventImage"
            />
          )}
        </Col>
        <Col lg="6" className="event-content">
          <h4>{props.eventTitle}</h4>
          <p>{props.eventContent}</p>
        </Col>
        <Col lg="3" className="event-request">
          {JSON.parse(localStorage.getItem("user") || "{}").user.id !==
          props.eventCreatorId ? (
            isMember === false ? (
              <Button
                type="button"
                className="btn join-event-button"
                innerText="Join Event"
                onClick={joinEventHandler}
              />
            ) : (
              <Button
                type="button"
                className="btn leave-event-button"
                innerText="Leave Event"
                onClick={leaveEventHandler}
              />
            )
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Event;
