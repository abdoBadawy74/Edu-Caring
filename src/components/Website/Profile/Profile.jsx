import React, { useState } from "react";
import personImg from "../../../assets/person.jpeg";

export default function Profile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState("شريف محمد السيد");
  const [phoneNumber, setPhoneNumber] = useState("+966 4654 4556 8742");
  const [dateOfBirth, setDateOfBirth] = useState("25 / 04 / 2006");
  const [gender, setGender] = useState("Male");
  const [country, setCountry] = useState("Saudi Arabia");
  const [city, setCity] = useState("Jeddah");
  const [healthAuthorityNumber, setHealthAuthorityNumber] = useState("5655165");
  const [specialist, setSpecialist] = useState("Nurse");

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
  };

  return (
    <div className="profile p-4 w-75 w-75">
      <div
        className="head d-flex gap-3 align-items-center pb-3"
        style={{ borderBottom: "1px solid #DCDCDC" }}
      >
        <div className="position-relative">
          <img
            src={personImg}
            alt="personImg"
            width={"120px"}
            height={"120px"}
            className="rounded-circle"
          />
          <input type="file" id="img" hidden />
          <label htmlFor="img">
            <i
              className="fa-solid fa-camera p-2 text-white rounded-circle position-absolute bottom-0"
              style={{
                backgroundColor: "#3296D4",
                right: "5px",
                cursor: "pointer",
              }}
            ></i>
          </label>
        </div>
        <div className="text flex-grow-1">
          <h3 className="fs-3">sherif mohamed alsayed</h3>
          <p style={{ color: "#747688" }}>sherif@educaring.com</p>
        </div>
        <div
          className="edit px-3 py-2 text-white rounded d-flex align-items-center"
          style={{ background: "#27AE60", cursor: "pointer" }}
          onClick={isEditMode ? handleSaveClick : handleEditClick}
        >
          <i
            className={
              isEditMode
                ? "fa-regular fa-check-square"
                : "fa-regular fa-pen-to-square"
            }
          ></i>
          <span className="ms-2">{isEditMode ? "Save" : "Edit"}</span>
        </div>
      </div>

      <div
        className="info my-3 d-grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill ,minmax(350px, 1fr))" }}
      >
        <div
          className={`info-item p-2 border rounded d-flex flex-column ${
            isEditMode ? "edit-mode" : ""
          }`}
        >
          {isEditMode ? (
            <input
              type="text"
              className="border-0 mb-1 fs-5"
              style={{ outline: "0" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <span className="fs-5">{name}</span>
          )}
          <span
            style={{ color: "#747688", fontSize: isEditMode ? "12px" : "14px" }}
          >
            الإسم (باللغة العربية)
          </span>
        </div>

        <div
          className={`info-item p-2 border rounded d-flex flex-column ${
            isEditMode ? "edit-mode" : ""
          }`}
        >
          {isEditMode ? (
            <input
              type="text"
              className="border-0 mb-1 fs-5"
              style={{ outline: "0" }}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          ) : (
            <span className="fs-5">{phoneNumber}</span>
          )}
          <span
            style={{ color: "#747688", fontSize: isEditMode ? "12px" : "14px" }}
          >
            phone number
          </span>
        </div>

        <div className="d-flex border rounded p-3 py-2 justify-content-between gap-3">
          <div
            className={`info-item p-2 d-flex flex-column ${
              isEditMode ? "edit-mode" : ""
            }`}
            style={{ borderRight: "1px solid #DCDCDC" }}
          >
            {isEditMode ? (
              <input
                type="text"
                className="border-0 mb-1 fs-5"
                style={{ outline: "0" }}
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            ) : (
              <span className="fs-5">{dateOfBirth}</span>
            )}
            <span
              style={{
                color: "#747688",
                fontSize: isEditMode ? "12px" : "14px",
              }}
            >
              date
            </span>
          </div>
          <div
            className={`info-item p-2 d-flex flex-column flex-grow-1 ${
              isEditMode ? "edit-mode" : ""
            }`}
          >
            {isEditMode ? (
              <input
                type="text"
                className="border-0 mb-1 fs-5"
                style={{ outline: "0" }}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            ) : (
              <span className="fs-5">{gender}</span>
            )}
            <span
              style={{
                color: "#747688",
                fontSize: isEditMode ? "12px" : "14px",
              }}
            >
              gender
            </span>
          </div>
        </div>

        <div className="d-flex border rounded p-3 py-2 justify-content-between gap-3">
          <div
            className={`info-item p-2 d-flex flex-column ${
              isEditMode ? "edit-mode" : ""
            }`}
            style={{ borderRight: "1px solid #DCDCDC" }}
          >
            {isEditMode ? (
              <input
                type="text"
                className="border-0 mb-1 fs-5"
                style={{ outline: "0" }}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            ) : (
              <span className="fs-5">{country}</span>
            )}
            <span
              style={{
                color: "#747688",
                fontSize: isEditMode ? "12px" : "14px",
              }}
            >
              country
            </span>
          </div>
          <div
            className={`info-item p-2 d-flex flex-column flex-grow-1 ${
              isEditMode ? "edit-mode" : ""
            }`}
          >
            {isEditMode ? (
              <input
                type="text"
                className="border-0 mb-1 fs-5"
                style={{ outline: "0" }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            ) : (
              <span className="fs-5">{city}</span>
            )}
            <span
              style={{
                color: "#747688",
                fontSize: isEditMode ? "12px" : "14px",
              }}
            >
              City
            </span>
          </div>
        </div>

        <div
          className={`info-item p-2 border rounded d-flex flex-column ${
            isEditMode ? "edit-mode" : ""
          }`}
        >
          {isEditMode ? (
            <input
              type="text"
              className="border-0 mb-1 fs-5"
              style={{ outline: "0" }}
              value={healthAuthorityNumber}
              onChange={(e) => setHealthAuthorityNumber(e.target.value)}
            />
          ) : (
            <span className="fs-5">{healthAuthorityNumber}</span>
          )}
          <span
            style={{ color: "#747688", fontSize: isEditMode ? "12px" : "14px" }}
          >
            health authority number
          </span>
        </div>

        <div className="d-flex border rounded p-3 py-2 justify-content-between gap-3">
          <div
            className={`info-item p-2 d-flex flex-column flex-grow-1 ${
              isEditMode ? "edit-mode" : ""
            }`}
            style={{ borderRight: "1px solid #DCDCDC" }}
          >
            {isEditMode ? (
              <input
                type="text"
                className="border-0 mb-1 fs-5"
                style={{ outline: "0" }}
                value={specialist}
                onChange={(e) => setSpecialist(e.target.value)}
              />
            ) : (
              <span className="fs-5">{specialist}</span>
            )}
            <span
              style={{
                color: "#747688",
                fontSize: isEditMode ? "12px" : "14px",
              }}
            >
              Specialist
            </span>
          </div>
          <div
            className={`info-item p-2 d-flex flex-column  ${
              isEditMode ? "edit-mode" : ""
            }`}
          >
            <input
              type="text"
              className="border-0 mb-1 fs-5"
              style={{ outline: "0" }}
              value={"----"}
              readOnly
            />
            <span
              style={{
                color: "#747688",
                fontSize: isEditMode ? "12px" : "14px",
              }}
            >
              --
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
