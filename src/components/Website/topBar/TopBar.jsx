import React from "react"
import Language from "./Language";
import Support from "./Support";
import Notification from "./Notification";
import Person from './Person';
export default function TopBar() {
  return (
    <>
      <div className="topbar d-flex justify-content-between align-items-center px-2 pt-2" >
        <span>Home</span>

        <div className="d-flex align-items-center gap-4">
          <Language></Language>
          <Support></Support>
          <Notification></Notification>
          <Person></Person>
        </div>
      </div>
    </>
  );
}
