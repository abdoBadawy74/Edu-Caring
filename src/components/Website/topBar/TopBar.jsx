import React, { useState, useEffect } from "react";
import Language from "./Language";
import Support from "./Support";
import Notification from "./Notification";
import Person from "./Person";
import { useLocation } from "react-router-dom";

export default function TopBar() {
  const location = useLocation();
  const [routeText, setRouteText] = useState("Home");
  const [iconsVisible, setIconsVisible] = useState(false);

  // Use the useEffect hook to change the text when the route changes
  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setRouteText("Home");
        break;
      case "/myevents":
        setRouteText("My Events");
        break;
      case "/community":
        setRouteText("Community");
        break;
      case "/profile":
        setRouteText("Profile");
        break;
      default:
        setRouteText("Home");
        break;
    }
  }, [location]);

  const toggleIconsVisibility = () => {
    setIconsVisible(!iconsVisible);
  };

  return (
    <>
      <div className="topbar d-flex justify-content-between align-items-center px-2 pt-2">
        <span>{routeText}</span>

        <i
          className="fa-solid fa-caret-down d-md-none p-4 fs-4 arrow"
          role="button"
          onClick={toggleIconsVisibility}
        ></i>
        <div
          className={`icons  align-items-center gap-4 ${
            iconsVisible ? "d-flex" : "d-sm-none"
          }`}
        >
          <Language />
          <Support />
          <Notification />
          <Person />
        </div>
      </div>
    </>
  );
}
