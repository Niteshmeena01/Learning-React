import React, { useState } from "react";
import './index.css';

const Sign = () => {
  const [Name, NState] = useState("");
  const [Email, EState] = useState("");
  const [Number, NUState] = useState("");
  const [Password, PState] = useState("");
  const [CPassword, CPState] = useState("");

  const [xName, setXName] = useState("");
  const [xEmail, setXEmail] = useState("");
  const [xNumber, setXNumber] = useState("");
  const [xPassword, setXPassword] = useState("");
  const [xCPassword, setXCPassword] = useState("");

  const nameData = (name) => {
    NState(name.target.value);
  };
  const emailData = (email) => {
    EState(email.target.value);
  };
  const numberData = (number) => {
    NUState(number.target.value);
  };
  const passwordData = (password) => {
    PState(password.target.value);
  };
  const CPasswordData = (cPassword) => {
    CPState(cPassword.target.value);
  };

  const DataPush = () => {
    setXName(Name);
    setXEmail(Email);
    setXNumber(Number);
    setXPassword(Password);
    setXCPassword(CPassword);
  };

  return (
    <>
      <div className="inputDiv">
        <center>
          <div className="centerDiv">
            <center>
              <h1>Sign up </h1>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                onChange={nameData}
                style={{ width: "300px", height: "30px" }}
              />
              <br />
              <br />
              <input
                type="Text"
                placeholder="Enter Your Email"
                onChange={emailData}
                style={{ width: "300px", height: "30px" }}
              />
              <br />
              <br />
              <input
                type="number"
                placeholder="Enter Your Mobile Number"
                onChange={numberData}
                style={{ width: "300px", height: "30px" }}
              />
              <br />
              <br />
              <input
                type="Password"
                placeholder="Enter Your Password"
                onChange={passwordData}
                style={{ width: "300px", height: "30px" }}
              />
              <br />
              <br />
              <input
                type="Password"
                placeholder="Enter Your Confirm Password"
                onChange={CPasswordData}
                style={{ width: "300px", height: "30px" }}
              />
              <br />
              <br />

              <button
                style={{ width: "150px", height: "30px" }}
                onClick={DataPush}
              >
                Click me
              </button>
            </center>
          </div>
        </center>
      </div>
      <div style={{ width: "100%", height: "200px", backgroundColor: "green", marginTop: '100px' }}>
        <div className="dataBox">
          <ul>
            <h1>Name</h1>
            <li>{xName}</li>
          </ul>
        </div>
        <div className="dataBox">
          <ul>
            <h1>Email</h1>
            <li>{xEmail}</li>
          </ul>
        </div>
        <div className="dataBox">
          <ul>
            <h1>Mobile Number</h1>
            <li>{xNumber}</li>
          </ul>
        </div>
        <div className="dataBox">
          <ul>
            <h1>Password</h1>
            <li>{xPassword}</li>
          </ul>
        </div>
        <div className="dataBox">
          <ul>
            <h1>Confirm Password</h1>
            <li>{xCPassword}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sign;
