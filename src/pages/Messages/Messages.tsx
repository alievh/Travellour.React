import React, { useEffect } from "react";
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

const Messages = () => {
  const dispatch = useDispatch();

  const userFriends = useSelector((state: any) => state.FriendSlice);

  useEffect(() => {
    GetAllFriend(dispatch);
  }, [dispatch]);

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
                <SearchUser
                  id="123"
                  imageUrl="9656be98-5306-4792-a98d-d5f07ed6bbcdppme.jpg"
                  userFirstName="Huseyn"
                  userLastName="Aliyev"
                  userName="whose1n"
                />
              </div>
              <div className="messages-container__body">
                <FriendMessage
                  friendImage="9656be98-5306-4792-a98d-d5f07ed6bbcdppme.jpg"
                  friendName="Huseyn"
                  friendSurname="Quliyev"
                  message="Hello there!"
                />
                <UserMessage message="Salam qaqa" />
                <FriendMessage
                  friendImage="9656be98-5306-4792-a98d-d5f07ed6bbcdppme.jpg"
                  friendName="Huseyn"
                  friendSurname="Quliyev"
                  message="Hello there!"
                />
                <UserMessage message="Salam qaqa" />
                <FriendMessage
                  friendImage="9656be98-5306-4792-a98d-d5f07ed6bbcdppme.jpg"
                  friendName="Huseyn"
                  friendSurname="Quliyev"
                  message="Hello there!"
                />
                <UserMessage message="Salam qaqa" />
                <FriendMessage
                  friendImage="9656be98-5306-4792-a98d-d5f07ed6bbcdppme.jpg"
                  friendName="Huseyn"
                  friendSurname="Quliyev"
                  message="Hello there!"
                />
                <UserMessage message="Salam qaqa" />
                <FriendMessage
                  friendImage="9656be98-5306-4792-a98d-d5f07ed6bbcdppme.jpg"
                  friendName="Huseyn"
                  friendSurname="Quliyev"
                  message="Hello there!"
                />
                <UserMessage message="Salam qaqa" />
                <FriendMessage
                  friendImage="9656be98-5306-4792-a98d-d5f07ed6bbcdppme.jpg"
                  friendName="Huseyn"
                  friendSurname="Quliyev"
                  message="Hello there!"
                />
                <UserMessage message="Salam qaqa" />
                <FriendMessage
                  friendImage="9656be98-5306-4792-a98d-d5f07ed6bbcdppme.jpg"
                  friendName="Huseyn"
                  friendSurname="Quliyev"
                  message="Hello there!"
                />
                <UserMessage message="Salam qaqa" />
                <FriendMessage
                  friendImage="9656be98-5306-4792-a98d-d5f07ed6bbcdppme.jpg"
                  friendName="Huseyn"
                  friendSurname="Quliyev"
                  message="Hello there!"
                />
                <UserMessage message="Salam qaqa" />
                <FriendMessage
                  friendImage="9656be98-5306-4792-a98d-d5f07ed6bbcdppme.jpg"
                  friendName="Huseyn"
                  friendSurname="Quliyev"
                  message="Hello there!"
                />
                <UserMessage message="Salam qaqa" />
              </div>
              <div className="messages-container__footer">
                <div className="text-area">
                  <textarea
                    rows={1}
                    placeholder="Type your message here.."
                  ></textarea>
                  <button className="send-message">Send Message</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </ContainerFluid>
    </section>
  );
};

export default Messages;
