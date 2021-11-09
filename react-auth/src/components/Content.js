import React, { Component, useState, useEffect } from "react";
import Course from "./API";
import getAllUser from "./API/userInfo";
import "../css/employ.css";
import axios from "axios";

const Content = (props) => {
  const [items, setItems] = useState([]);
  const [sendRequest, setSendRequest] = useState(true);

  if (sendRequest) {
    getAllUser().then((response) => {
      const userData = response.data.map((data) => (
        <CvItem name={data.name} address={data.email} />
      ));
      setItems((prevState) => {
        return [...prevState, ...userData];
      });
    });
    setSendRequest(false);
  }

  const range = 5;
  const NewItemList = [items.slice(0, range)];
  let start = range;
  let end = range * 2;
  let theLength = items.length;
  while (true) {
    NewItemList.push(items.slice(start, end));
    start += range;
    end += range;
    if (start >= theLength) {
      break;
    }
  }

  let takeTheList = (start, end) => {
    let a = NewItemList.slice(start, end);
    return a;
  };

  let theImportList = (props) => {
    let listArray = [];
    let listQuantity = Math.ceil(Course.length / 5);
    for (let i = 0; i < listQuantity; i++) {
      listArray.push(
        <CvList functionName="Hello World" start={i} end={i + 1} />
      );
    }
    return listArray;
  };

  function CvItem(props) {
    return (
      <div className="col col-third CV-item">
        <img src={props.link} className="CV-img" />
        <p className="CV-name"> {props.name} </p>
        <div className="CV-discr">
          <p className="address"> {props.address} </p>
          <p className="salary"> {props.salary} </p>
        </div>
      </div>
    );
  }

  function CvList(props) {
    return (
      <div className="content-section">
        {" "}
        {/*Định dạng danh sách đầu tiên */} {/*Định dạng nút bấm */}
        <div className="button">
          <div className="left-button"> {props.functionName} </div>
          <div className="right-button"> See more </div>
        </div>
        {/*Định dạng dãy các danh sách */}
        <div className="row CV-list">{takeTheList(props.start, props.end)}</div>
      </div>
    );
  }

  return <div id="content">{theImportList()}</div>;
};

export default Content;
