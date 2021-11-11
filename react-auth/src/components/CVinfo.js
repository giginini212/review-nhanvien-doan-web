import React, { Component, useEffect, useState } from "react";
import "../css/CV.css";
import "../css/themify-icons/themify-icons.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

function CVinfo(props) {
  const [cvData, setCvData] = useState({});

  useEffect(() => {
    const cvId = props.location.pathname.split("/").reverse()[0];

    axios
      .get(`http://127.0.0.1:8000/api/employee/cv-show/${cvId}`)
      .then((response) => {
        setCvData(response.data);
        console.log(cvData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="info">
      {/*Định dạng thông tin bên trái */}
      <div id="left-info">
        <div className="top-info">
          <div>
            <i className="ti-face-smile avatar"></i>
            <div className="avatar-name">
              <p style={{ fontSize: "25px" }}>{cvData.name}</p>
              <p>{cvData.major}</p>
            </div>
          </div>
          <hr />
          <ul className="info-contact">
            <ol>
              Date of birth:&nbsp;
              <span style={{ fontWeight: 100 }}>
                {cvData.date_of_birth &&
                  `${cvData.date_of_birth.split(" ")[0]}`}
              </span>
            </ol>
            <ol>
              Sex:&nbsp;<span style={{ fontWeight: 100 }}>{cvData.sex}</span>
            </ol>
            <ol>
              Contact
              <ul>
                <ol>Phone number: {cvData.phone}</ol>
                <ol>Email: {cvData.email}</ol>
              </ul>
            </ol>
            <ol>
              Major:&nbsp;
              <span style={{ fontWeight: 100 }}>{`${cvData.major}`}</span>
            </ol>
          </ul>
        </div>
        <div class="foot-info">
          <h2>Hobby:</h2>
          <p style={{ fontSize: "20px", fontWeight: 100 }}>{cvData.hobby}</p>
        </div>
      </div>

      {/**Định dạng thông tin bên phải */}
      <div id="right-info">
        <h4>Career Goals:</h4>
        <p>{cvData.career_goals}</p>
        <h4>Education:</h4>
        <p>{cvData.education}</p>
        <h4>Experience:</h4>
        <p>{cvData.experience}</p>
        <h4>Skill:</h4>
        <p>{cvData.skill}</p>
        <h4>Certification:</h4>
        <p>{cvData.certification}</p>
        <div>
          <Link to="/form">
            <i class="ti-plus plus-button"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CVinfo;
