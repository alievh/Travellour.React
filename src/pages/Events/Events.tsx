import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import AddvertisingBanner from "../../components/AdvertisingBanner/AddvertisingBanner";
import { useSelector } from "react-redux";
import Button from "../../components/UI/Button";

const Events = () => {
  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return (
    <section className={`events ${!sidebarIsActive && "sidebar-notactive"}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-sm-12">
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
                <div className="filter-right">Create Event</div>
              </div>
              <div className="events-container__events">
                <div className="events-container__event">
                  <div className="col-lg-3 event-image">
                      <img
                        src={require("../../assets/images/event-hiking.jpg")}
                      />
                  </div>
                  <div className="col-lg-6 event-content">
                      <h4>Hiking</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa, ad. Quam praesentium magni voluptate asperiores
                        sed provident facilis dolor deleniti?
                      </p>
                  </div>
                  <div className="col-lg-3 event-request">
                      <button type="button" className="btn join-event-button">
                        Join Event
                      </button>
                  </div>
                </div>
                <div className="events-container__event">
                  <div className="col-lg-3 event-image">
                      <img
                        src={require("../../assets/images/event-camping.jpg")}
                      />
                  </div>
                  <div className="col-lg-6 event-content">
                      <h4>Camping</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa, ad. Quam praesentium magni voluptate asperiores
                        sed provident facilis dolor deleniti?
                      </p>
                  </div>
                  <div className="col-lg-3 event-request">
                      <button type="button" className="btn join-event-button">
                        Join Event
                      </button>
                  </div>
                </div>
                <div className="events-container__event">
                  <div className="col-lg-3 event-image">
                      <img
                        src={require("../../assets/images/event-surfing.jpg")}
                      />
                  </div>
                  <div className="col-lg-6 event-content">
                      <h4>Surfing</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa, ad. Quam praesentium magni voluptate asperiores
                        sed provident facilis dolor deleniti?
                      </p>
                  </div>
                  <div className="col-lg-3 event-request">
                      <button type="button" className="btn join-event-button">
                        Join Event
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
