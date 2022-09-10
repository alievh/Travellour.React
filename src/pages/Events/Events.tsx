import { useSelector } from "react-redux";
import Button from "../../components/UI/Button";
import Event from "../../components/Event/Event";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import { Link } from "react-router-dom";

const Events = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    <section className={`events ${!sidebarIsActive && "sidebar-notactive"}`}>
      <Container>
        <Row>
          <Col xl="12" sm="12">
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
            <div className="events-container">
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
              <div className="events-container__events">
                <Event
                  eventImage={require("../../assets/images/event-hiking.jpg")}
                  eventTitle="Hiking"
                  eventContent="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa, ad. Quam praesentium magni voluptate asperiores
                        sed provident facilis dolor deleniti?"
                />
                <Event
                  eventImage={require("../../assets/images/event-surfing.jpg")}
                  eventTitle="Surfing"
                  eventContent="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa, ad. Quam praesentium magni voluptate asperiores
                        sed provident facilis dolor deleniti?"
                />
                <Event
                  eventImage={require("../../assets/images/event-camping.jpg")}
                  eventTitle="Camping"
                  eventContent="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa, ad. Quam praesentium magni voluptate asperiores
                        sed provident facilis dolor deleniti?"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Events;
