import React from "react";
import Col from "../Bootstrap/Col";

const Event: React.FC<{
  eventImage: string;
  eventTitle: string;
  eventContent: string;
}> = (props) => {
  return (
    <div className="events-container__event">
      <Col lg="3" className="event-image">
        <img src={props.eventImage} />
      </Col>
      <Col lg="6" className="event-content">
        <h4>{props.eventTitle}</h4>
        <p>{props.eventContent}</p>
      </Col>
      <Col lg="3" className="event-request">
        <button type="button" className="btn join-event-button">
          Join Event
        </button>
      </Col>
    </div>
  );
};

export default Event;
