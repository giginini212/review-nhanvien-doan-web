import React, { Component } from "react";
import "../css/employ.css";
import "../css/themify-icons-font/themify-icons/themify-icons.css";

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
            <a href="/" style={{ color: "white" }}>
              LOGO
            </a>
          </li>
          <li>
            <a href="/category">CATEGORIES</a>
          </li>
          <li>
            <a href="/CVinfo">BLOG</a>
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
        <a href="/CVinfo">
          <i className="ti-user" style={userButton}></i>
          <p>{prop.username}</p>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
