import logo from "../../../assets/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import React from "react";

function SideBar() {
  return (
    <>
      <div className="d-flex flex-column justify-content-between p-4 sideBar">
        <Link to="home" className="d-flex align-items-center">
          {/* <i className="bi bi-house-door"></i> */}
          <img src={logo} alt="logo" width={"200px"} />
        </Link>
        <hr className="opacity-0" />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item my-2 active">
            <Link to="home" className="nav-link px-4">
              <i className="bi bi-house-door me-2 fs-5"></i>
              <span className="fs-5 ">Home</span>
            </Link>
          </li>
          <li className="nav-item my-2">
            <Link to="myevents" className="nav-link px-4">
              <i className="bi bi-ticket-perforated me-2 fs-5"></i>
              <span className="fs-5 ">My Events</span>
            </Link>
          </li>
          <li className="nav-item my-2">
            <Link to="community" className="nav-link px-4">
              <i className="bi bi-chat-square-text me-2 fs-5"></i>
              <span className="fs-5 ">Community</span>
            </Link>
          </li>
          <li className="nav-item my-2">
            <Link to="profile" className="nav-link px-4">
              <i className="bi bi-person me-2 fs-5"></i>
              <span className="fs-5 ">Profile</span>
            </Link>
          </li>
        </ul>
        <div className="text-danger px-4">
          <i className="fa-solid fa-arrow-right-from-bracket me-2 fs-5 "></i>
          <span className="fs-5 ">log out</span>
        </div>
      </div>
    </>
  );
}

export default SideBar;
