import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/UI/Button";
import Event from "../../components/Event/Event";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import { Link } from "react-router-dom";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  const getEvents = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`${baseUrl}/event/eventgetall`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
      },
    }).then((res) => {
      if (res.ok) {
        setLoading(false);
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });

    setEvents(response);
    console.log(response);
  }, []);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

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
                    <li>All Events</li>
                    <li>Joined Events</li>
                  </ul>
                </div>
                <div className="filter-right">
                  <Link to="/events/create">Create Event</Link>
                </div>
              </div>
              {/* Events Filter - END */}
              {/* Events - START */}
              <div className="events-container__events">
                {loading && <p>Loading...</p>}
                {events.map((e: any) => (
                  <Event
                    eventContent={e.eventDescription}
                    eventTitle={e.eventTitle}
                    eventImages={e.imageUrls}
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
