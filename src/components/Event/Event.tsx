import React from "react";
import Col from "../Bootstrap/Col";
import Row from "../Bootstrap/Row";
import Slider from "../Slider/Slider";

const Event: React.FC<{
  eventImages: string[];
  eventTitle: string;
  eventContent: string;
}> = (props) => {
  return (
    <div className="events-container__event">
      <Row>
        <Col lg="3" className="event-image">
        {props.eventImages.length > 1 ? (
            <Slider images={props.eventImages} />
          ) : (
            <img src={`https://localhost:7101/img/${props.eventImages[0]}`} />
          )}
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
      </Row>
    </div>
  );
};

export default Event;
