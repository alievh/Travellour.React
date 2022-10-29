import React, { useEffect, useState } from "react";
import Col from "../../components/Bootstrap/Col";
import ContainerFluid from "../../components/Bootstrap/ContainerFluid";
import Row from "../../components/Bootstrap/Row";
import { Link } from "react-router-dom";
import SearchUser from "../../components/SearchUser/SearchUser";
import FriendMessage from "../../components/Message/FriendMessage";
import UserMessage from "../../components/Message/UserMessage";
import MessageUser from "../../components/Message/MessageUser";
import { GetAllFriend } from "../../store/Friend/FriendSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SendMessages } from "../../store/Message/MessageSlice";
import SelectedUser from "../../components/Message/SelectedUser";

const Messages = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const messageInputHandler = (event: any) => {
    setMessage(event.target.value);
  };

  const messageSubmitHandler = (event: any) => {
    event.preventDefault();
    const messageSubmit = {
      content: message,
      sendUserId: messages.sendUserId,
    };

    SendMessages(dispatch, messages.sendUserId, messageSubmit);
    setMessage("");
  };

  const userFriends = useSelector((state: any) => state.FriendSlice);

  const messages = useSelector((state: any) => state.MessageSlice);

  useEffect(() => {
    GetAllFriend(dispatch);
  }, [dispatch]);

  if (messages.sendUserId === null) {
    return (
      <section className="messages-section">
        <ContainerFluid className="messages-section__container">
          <Row>
            <Col lg="3" md="4" sm="4" className="nopadding">
              <div className="messages-section__users-container">
                <div className="users-container__header">
                  <div className="users-container__title">
                    <h4>Messages</h4>
                    <div className="home-link">
                      <Link to="/newsfeed">Home</Link>
                    </div>
                  </div>
                  <div className="users-container__search">
                    <input placeholder="Search"></input>
                  </div>
                </div>
                <div className="users-container__users">
                  <ul>
                    {userFriends.friends.length > 0 ? (
                      userFriends.friends.map((f: any) => (
                        <MessageUser
                          key={f.id}
                          id={f.id}
                          imageUrl={f.profileImage}
                          userFirstName={f.firstname}
                          userLastName={f.lastname}
                        />
                      ))
                    ) : (
                      <p>You don't have any friend to talk</p>
                    )}
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="9" md="8" sm="8" className="nopadding no-message">
              <div className="no-message-container">
                <img src="https://www.kindpng.com/picc/m/341-3415527_transparent-message-icon-png-love-message-png-png.png" />
                <p>Select user to talk</p>
              </div>
            </Col>
          </Row>
        </ContainerFluid>
      </section>
    );
  } else {
    return (
      <section className="messages-section">
        <ContainerFluid className="messages-section__container">
          <Row>
            <Col lg="3" md="4" sm="4" className="nopadding">
              <div className="messages-section__users-container">
                <div className="users-container__header">
                  <div className="users-container__title">
                    <h4>Messages</h4>
                    <div className="home-link">
                      <Link to="/newsfeed">Home</Link>
                    </div>
                  </div>
                  <div className="users-container__search">
                    <input placeholder="Search"></input>
                  </div>
                </div>
                <div className="users-container__users">
                  <ul>
                    {userFriends.friends.length > 0 ? (
                      userFriends.friends.map((f: any) => (
                        <MessageUser
                          key={f.id}
                          id={f.id}
                          imageUrl={f.profileImage}
                          userFirstName={f.firstname}
                          userLastName={f.lastname}
                        />
                      ))
                    ) : (
                      <p>You don't have any friend to talk</p>
                    )}
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="9" md="8" sm="8" className="nopadding">
              <div className="messages-section__messages-container">
                <div className="messages-container__header">
                  {JSON.stringify(messages.selectedUser) !== "{}" ? (
                    <SelectedUser
                      id={messages.selectedUser.id}
                      imageUrl={messages.selectedUser.profileImage}
                      userFirstName={messages.selectedUser.firstname}
                      userLastName={messages.selectedUser.lastname}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="messages-container__body">
                  {messages.messages.length > 0
                    ? messages.messages.map((m: any) =>
                        m.user.id ===
                        JSON.parse(localStorage.getItem("user") || "{}").user
                          .id ? (
                          <UserMessage key={m.id} message={m.content} date={m.senderDate} />
                        ) : (
                          <FriendMessage
                            key={m.id}
                            friendImage={m.user.profileImage}
                            friendName={m.firstname}
                            friendSurname={m.lastname}
                            message={m.content}
                            date={m.senderDate}
                          />
                        )
                      )
                    : ""}
                </div>
                <div className="messages-container__footer">
                  <div className="text-area">
                    <form onSubmit={messageSubmitHandler}>
                      <textarea
                        rows={1}
                        placeholder="Type your message here.."
                        value={message}
                        onChange={messageInputHandler}
                      ></textarea>
                      {message === "" ? (
                        <button disabled type="submit" className="send-message">
                          Send Message
                        </button>
                      ) : (
                        <button type="submit" className="send-message">
                          Send Message
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </ContainerFluid>
      </section>
    );
  }
};

export default Messages;
