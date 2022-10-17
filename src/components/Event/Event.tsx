import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteEvent, JoinEvent, LeaveEvent } from "../../store/Event/EventSlice";
import { CreateNotification } from "../../store/Notification/NotificationSlice";
import Col from "../Bootstrap/Col";
import Row from "../Bootstrap/Row";
import Slider from "../Slider/Slider";
import Button from "../UI/Button";
import Modal from "react-modal";
import EventMember from "../EventMember/EventMember";

Modal.setAppElement("#root");

const Event: React.FC<{
  eventCreatorId: string;
  eventId: string;
  eventImages: string[];
  eventTitle: string;
  eventContent: string;
  eventMembers: any;
}> = (props) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isMember, setIsMember] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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

  const deleteEventHandler = () => {
    DeleteEvent(dispatch, props.eventId);
  }

  useEffect(() => {
    setIsMember(
      props.eventMembers.some(
        (n: any) =>
          n.id === JSON.parse(localStorage.getItem("user") || "{}").user.id
      )
    );
  }, [props.eventMembers]);

  return (
    <div className="events-container__event">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="members-modal"
        contentLabel="Example Modal"
      >
        <div className="event-members">
          {props.eventMembers.length > 0 ? (
            props.eventMembers.map((m: any) => (
              <EventMember
                key={m.id}
                userId={m.id}
                userName={m.userName}
                firstName={m.firstname}
                lastName={m.lastname}
              />
            ))
          ) : (
            <p>No members found!</p>
          )}
        </div>
        <button onClick={closeModal} className="btn">
          Close
        </button>
      </Modal>
      <Row className="justify-content-between">
        <Col lg="2" className="event-image">
          {props.eventImages.length > 1 ? (
            <Slider images={props.eventImages} />
          ) : (
            <img
              src={`https://localhost:7101/img/${props.eventImages[0]}`}
              alt="EventImage"
            />
          )}
        </Col>
        <Col lg="5" className="event-content">
          <h4>{props.eventTitle}</h4>
          <p>{props.eventContent}</p>
        </Col>
        <Col lg="4" className="event-request">
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
          <Button
            type="button"
            className="btn members-event-button"
            innerText="Members"
            onClick={openModal}
          />
          {JSON.parse(localStorage.getItem("user") || "{}").user.id ===
          props.eventCreatorId ? (
            <Button
              type="button"
              className="delete-event"
              buttonIcon="fa-solid fa-trash"
              onClick={deleteEventHandler}
            />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Event;
