import React, { Component, useState, useEffect } from "react";
import Course from "./API";
import "../css/employ.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Content = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/employee/all").then((response) => {
      const employeesData = response.data.map((employeeData) => {
        return (
          <CvItem
            id={employeeData.id}
            name={employeeData.name}
            email={employeeData.email}
            photo_path={employeeData.photo_path}
            phone={employeeData.phone}
          />
        );
      });
      setItems([...employeesData]);
    });
  }, []);

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
        <CvList functionName="Category" start={i} end={i + 1} />
      );
    }
    return listArray;
  };

  function CvItem(props) {
    return (
      <Link to={`/cv-info/${props.id}`} className="col col-third CV-item">
        <img src={props.photo_path} alt={props.name} className="CV-img" />
        <p className="CV-name"> {props.name} </p>
        <div className="CV-discr">
          <p className="address"> {props.email} </p>
          <p className="salary"> {props.phone} </p>
        </div>
      </Link>
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
