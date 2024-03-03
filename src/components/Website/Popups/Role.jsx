import React, { useState } from "react";
import att from "../../../assets/attendance.png";
import attColored from "../../../assets/attendance-color.png";
import spk from "../../../assets/speaker-icon.png";
import spkColored from "../../../assets/speaker-icon-color.png";

function Role({ onClose }) {
    const [selectedRole, setSelectedRole] = useState(null);
  
    const handleRoleItemClick = (role) => {
      setSelectedRole(role);
    };
  
    const handleCloseClick = () => {
      setSelectedRole(null);
      onClose();
    };
  return (
    <>
      <div className="role">
        <div className="head">
          <h4>Register as a</h4>
          <i className="bi bi-x close" onClick={handleCloseClick}></i>
        </div>
        <div className="roles">
          <div className="role-item" onClick={() => handleRoleItemClick('attendance')}>
            <img src={selectedRole === 'attendance' ? attColored : att}  alt="attendance" />
            <h5 style={{ color: selectedRole === 'attendance' ? '#3296D4' : '' }}>Attendance</h5>
          </div>
          <div className="role-item" onClick={() => handleRoleItemClick('speaker')}>
            <img src={selectedRole === 'speaker' ? spkColored : spk} alt="speaker" />
            <h5 style={{ color: selectedRole === 'speaker' ? '#3296D4' : '' }}>Speaker</h5>
          </div>
        </div>
        <div className="btns">
          <button>ok</button>
          <button onClick={handleCloseClick}>cancel</button>
        </div>
      </div>
    </>
  );
}

export default Role;


