import { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/UI/Button";
import Event from "../../components/Event/Event";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { GetEvents, GetJoinedEvents } from "../../store/Event/EventSlice";
import { useDispatch } from "react-redux";

const Events = () => {
  const dispatch = useDispatch();

  const sidebarIsActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  const events = useSelector((state: any) => state.EventSlice);

  const allEventsHandler = () => {
    GetEvents(dispatch);
  }

  const joinedEventsHandler = () => {
    GetJoinedEvents(dispatch);
  }

  useEffect(() => {
    GetEvents(dispatch);
  }, []);

  return (
    // Events Section - START
    <section className={`events ${!sidebarIsActive && "sidebar-notactive"}`}>
      <Container>
        <Row>
          <Col xl="12" sm="12">
            {/* Events Search - START */}
            <div className="friends__search-section">
              <div className="friends__search">
                <form>
                  <input type="text" placeholder="Search Event"></input>
                  <Button
                    buttonIcon="fa-solid fa-magnifying-glass"
                    type="submit"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </div>
            {/* Events Search - END */}
            <div className="events-container">
              {/* Events Filter - START */}
              <div className="events-container__filter">
                <div className="filter-left">
                  <ul>
                    <li>
                      <Button
                        type="button"
                        innerText="All Events"
                        className="all-events"
                        onClick={allEventsHandler}
                      />
                    </li>
                    <li>
                      <Button
                        type="button"
                        innerText="Joined Events"
                        className="joined-events"
                        onClick={joinedEventsHandler}
                      />
                    </li>
                  </ul>
                </div>
                <div className="filter-right">
                  <Link to="/events/create">Create Event</Link>
                </div>
              </div>
              {/* Events Filter - END */}
              {/* Events - START */}
              <div className="events-container__events">
                {events.loading && <p className="loading">Loading...</p>}
                {events.events.map((e: any) => (
                  <Event
                    key={e.id}
                    eventId={e.id}
                    eventContent={e.eventDescription}
                    eventTitle={e.eventTitle}
                    eventImages={e.imageUrls}
                    eventMembers={e.eventMembers}
                    eventCreatorId={e.eventCreatorId}
                  />
                ))}
              </div>
              {/* Events - END */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    // Events Section - END
  );
};

export default Events;
