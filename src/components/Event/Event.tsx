import React from "react";

const Event: React.FC<{
  eventImage: string;
  eventTitle: string;
  eventContent: string;
}> = (props) => {
  return (
    <div className="events-container__event">
      <div className="col-lg-3 event-image">
        <img src={props.eventImage} />
      </div>
      <div className="col-lg-6 event-content">
        <h4>{props.eventTitle}</h4>
        <p>
          {props.eventContent}
        </p>
      </div>
      <div className="col-lg-3 event-request">
        <button type="button" className="btn join-event-button">
          Join Event
        </button>
      </div>
    </div>
  );
};

export default Event;
