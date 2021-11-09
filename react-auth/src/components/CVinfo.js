import React, { Component } from 'react';
import '../css/CV.css';
import '../css/themify-icons/themify-icons.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function CVinfo() {
    return(
        <div id="info">
            {/*Định dạng thông tin bên trái */}
            <div id="left-info">
                <div className="top-info">
                    <div>
                        <i className="ti-face-smile avatar"></i>
                        <div className="avatar-name">
                            <p style={{fontSize:'25px'}}>Huỳnh Bảo Khánh</p>
                            <p>Developer</p>
                        </div>
                    </div>
                    <hr/>
                    <ul className="info-contact">
                        <ol>Date of birth :</ol>
                        <ol>Sex :</ol>
                        <ol>Contact
                            <ul>
                                <ol>Phone number : </ol>
                                <ol>Emails : </ol>
                                <ol>Website : </ol>
                            </ul>
                        </ol>
                        <ol>About</ol>
                    </ul>
                </div>
                <div class="foot-info">
                    <p>Hobby</p>
                    <p>Photos</p>
                </div>
            </div>

            {/**Định dạng thông tin bên phải */}
            <div id="right-info">
                <ul>
                    <ol>Career Goals</ol>
                    <ol>Education</ol>
                    <ol>Experience</ol>
                    <ol>Skill</ol>
                    <ol>Language</ol>
                    <ol>Certification</ol>
                </ul>
                <div><Link to="/form"><i class="ti-plus plus-button"></i></Link></div>
            </div>
            
           
        </div>
    )
}

export default CVinfo