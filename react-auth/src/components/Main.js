import React, { Component } from "react";
import Content from "./Content";
import "../App.css";
import "../css/themify-icons/themify-icons.css";
import Slider from "./Slider";

class Main extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Content />
      </div>
    );
  }
}

export default Main;
