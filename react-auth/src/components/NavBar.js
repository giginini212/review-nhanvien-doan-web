import React, { Component } from "react";
import "../css/employ.css";
import "../css/themify-icons/themify-icons.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar(prop) {
  const userButton = {
    float: "left",
    marginRight: "10px",
  };

  const backStyle = {
    backgroundColor: "#4C566A",
    borderRadius: "10px 0px 0px 10px",
  };

  let handleClick = (string) => {
    alert(string);
  };
  return (
    <div id="header">
      <div id="nav">
        <ul>
          <li style={backStyle}>
            <Link to="/" style={{ color: "white" }}>
              LOGO
            </Link>
          </li>
          <li>
            <Link to="/category">CATEGORIES</Link>
          </li>
          <li>
            <Link to="/cv-info">BLOG</Link>
          </li>
          <li>
            <lable>
              <input
                type="text"
                id="username"
                name="username"
                class="search-bar"
              />
            </lable>
          </li>
          <li className="search-icon">
            <i className="ti-comment"></i>
          </li>
          <li className="search-icon">
            <i className="ti-bell" style={{ fontSize: "25px" }}></i>
          </li>
        </ul>
      </div>
      <div className="user-account">
        <Link to="/cv-info">
          <i className="ti-user" style={userButton}></i>
          <p>{prop.username}</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
