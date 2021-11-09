import React, { Component } from 'react';
import  Course  from './API';
import '../css/Category.css';

class Category extends Component{
    render() {
        return(
            <div id="cate">
                <div>Marketing</div>
                <div>Insurance</div>
                <div>Finance</div>
                <div>Banking</div>
                <div>Translator</div>
                <div>Travel</div>
                <div>Developer</div>
                <div>Hotel</div>
                <div>Restaurant</div>
                <div>Accountant</div>
                <div>Consultant</div>
                <div>Logistics</div>
                <div>Medical</div>
                <div>Car</div>
                <div>Architecture</div>
            </div>
        );
    }
}

export default Category