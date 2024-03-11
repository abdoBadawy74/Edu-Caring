import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { BASE } from "../../API/Api";
import axios from "axios";

export default function Home() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE}/Event/GetAll`, {
        params: {
          limite: 1000,
          skip: 0,
        },
        // headers: {
        //   UserId: 3,
        // },
      })
      .then((data) => {
        console.log(data);
        setEvents(data.data.responseObject);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(events);
  return (
    <>
      <div className="home-comp">
        <div className="period">
          <h3 className="statement">
            Programming : How to begin your first job! and more details
          </h3>
          <div className="content">
            <div className="nums">
              <h4>02</h4>:<h4>01</h4>:<h4>13</h4>
            </div>

            <div className="text">
              <p>Days</p>
              <p>Hours</p>
              <p>Minutes</p>
            </div>
          </div>
        </div>

        <div className="coming-events">
          <h3 className="fw-bold mb-4">Upcoming Events</h3>
          <div className="events">
            {events.map((event) => (
              <Link key={event.id} className="event" to={`/event/${event.id}`}>
                <img src={event.displayPrimeImageURL} alt="event-Img" />

                <div className="content">
                  <div className="txt">
                    <h5>{event.nameEn}</h5>
                    <div className="info">
                      <div className="location">
                        <i className="bi bi-geo-alt-fill"></i>
                        <span>{event.eventDays[0].address}</span>
                      </div>
                      <div className="money">
                        <i className="bi bi-cash-stack"></i>
                        {event.totalPrice}
                      </div>
                    </div>
                  </div>

                  <div className="date">
                    <p className="day m-0">
                      {new Date(event.startDay).toLocaleDateString("en-US", {
                        day: "numeric",
                      })}
                    </p>
                    <p className="month">
                      {new Date(event.startDay).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="recommend mb-3">
          <h4 className="fw-bold mb-4">Recommendations for you</h4>
          <div className="events d-flex gap-4 flex-wrap justify-content-center align-items-center">
            {events.map((event) => (
              <Link key={event.id} className="event" to={`/event/${event.id}`}>
                <img src={event.displayPrimeImageURL} alt="event-Img" />

                <div className="info">
                  <h6>{event.nameEn}</h6>
                  <p>
                    <i className="fa-solid fa-calendar-days"></i>
                    05 Mars, 2023
                  </p>
                  <p>
                    <i className="bi bi-geo-alt-fill"></i>
                    {event.eventDays[0].address}
                  </p>
                  <div className="btns">
                    {event.isOnline && <span className="online">online</span>}
                    {event.offline && <span className="offline">offline</span>}
                  </div>
                </div>

                {/* <div className="content">
                  <div className="txt">
                    <h5>{event.nameEn}</h5>
                    <div className="info">
                      <div className="location">
                        <i className="bi bi-geo-alt-fill"></i>
                        <span>{event.eventDays[0].address}</span>
                      </div>
                      <div className="money">
                        <i className="bi bi-cash-stack"></i>
                        {event.totalPrice}
                      </div>
                    </div>
                  </div>

                  <div className="date">
                    <p className="day m-0">
                      {new Date(event.startDay).toLocaleDateString("en-US", {
                        day: "numeric",
                      })}
                    </p>
                    <p className="month">
                      {new Date(event.startDay).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </p>
                  </div>
                </div> */}
              </Link>
            ))}

            {/* <Link className="event" to="/event">
              <img src={eventImg3} alt="eventImg" />
              <div className="info">
                <h6>Problem Solving tricks</h6>
                <p>
                  <i className="fa-solid fa-calendar-days"></i>
                  05 Mars, 2023
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  block 5, zori street, tahta,So..
                </p>
                <div className="btns">
                  <span>online</span>
                  <span>offline</span>
                </div>
              </div>
              <div className="price">
                <h6>250</h6>
                <span>SAR</span>
              </div>
            </Link>

            <Link className="event" to="/event">
              <img src={eventImg3} alt="eventImg" />
              <div className="info">
                <h6>Problem Solving tricks</h6>
                <p>
                  <i className="fa-solid fa-calendar-days"></i>
                  05 Mars, 2023
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  block 5, zori street, tahta,So..
                </p>
                <div className="rate">
                  <span>(4 reviews)</span>
                  <span>
                    <i className="bi bi-star-fill"></i>
                    3.2
                  </span>
                </div>
              </div>
              <div className="price">
                <h6>250</h6>
                <span>SAR</span>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
