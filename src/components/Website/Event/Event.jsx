import React from "react";
import eventImg1 from "../../../assets/event-img1.jpeg";
import eventImg2 from "../../../assets/event-img2.jpeg";
import eventImg3 from "../../../assets/event-img3.jpeg";
import Carousel from "react-bootstrap/Carousel";

export default function Event() {
  return (
    <>
      <div className="event-comp">
        <Carousel data-bs-theme="dark" className="coursel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={eventImg1}
              alt="First slide"
              style={{ height: "55vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={eventImg2}
              alt="Second slide"
              style={{ height: "55vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={eventImg3}
              alt="Third slide"
              style={{ height: "55vh" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
