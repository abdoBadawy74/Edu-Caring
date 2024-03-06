import React, { useState } from "react";
import logo from "../../../assets/logo-removebg-preview.png";
import { Link, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function SideBar() {
  // State to track the active link
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();

  // Check the current path to determine the active link
  const handleSetActiveLink = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-between p-1 p-xl-4  h-100 sideBar">
        <Link
          to="home"
          className="d-flex align-items-center"
          onClick={() => handleSetActiveLink("home")}
        >
          <img src={logo} alt="logo" className="mw-100 h-auto" />
        </Link>
        <hr className="opacity-0" />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className={`nav-item my-2 ${activeLink === "home" && "active"}`}>
            <Link
              to="home"
              className="nav-link px-lg-4 text-sm-center d-md-flex  p-sm"
              onClick={() => handleSetActiveLink("home")}
              style={{
                background: activeLink === "home" && "#3296D4",
                color: activeLink === "home" && "#fff",
              }}
            >
              <i className="bi bi-house-door me-lg-2 fs-5"></i>
              <span className="fs-5 d-none d-md-inline">Home</span>
            </Link>
          </li>
          <li
            className={`nav-item my-2 ${activeLink === "myevents" && "active"}`}
          >
            <Link
              to="myevents"
              className="nav-link px-lg-4 text-sm-center d-md-flex "
              onClick={() => handleSetActiveLink("myevents")}
              style={{
                background: activeLink === "myevents" && "#3296D4",
                color: activeLink === "myevents" && "#fff",
              }}
            >
              <i className="bi bi-ticket-perforated me-lg-2 fs-5"></i>
              <span className="fs-5 d-none d-md-inline">My Events</span>
            </Link>
          </li>
          <li
            className={`nav-item my-2 ${
              activeLink === "community" && "active"
            }`}
          >
            <Link
              to="community"
              className="nav-link px-lg-4 text-sm-center d-md-flex "
              onClick={() => handleSetActiveLink("community")}
              style={{
                background: activeLink === "community" && "#3296D4",
                color: activeLink === "community" && "#fff",
              }}
            >
              <i className="bi bi-chat-square-text me-lg-2 fs-5"></i>
              <span className="fs-5 d-none d-md-inline">Community</span>
            </Link>
          </li>
          <li
            className={`nav-item my-2 ${activeLink === "profile" && "active"}`}
          >
            <Link
              to="profile"
              className="nav-link px-lg-4 text-sm-center d-md-flex "
              onClick={() => handleSetActiveLink("profile")}
              style={{
                background: activeLink === "profile" && "#3296D4",
                color: activeLink === "profile" && "#fff",
              }}
            >
              <i className="bi bi-person me-lg-2 fs-5"></i>
              <span className="fs-5 d-none d-md-inline">Profile</span>
            </Link>
          </li>
        </ul>
        <div className="text-danger px-lg-4 text-sm-center d-flex ">
          <i className="fa-solid fa-arrow-right-from-bracket me-lg-2 fs-5 "></i>
          <span className="fs-5 d-none d-md-inline text-cennter">log out</span>
        </div>
      </div>
    </>
  );
}

export default SideBar;
