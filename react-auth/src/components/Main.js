import React, { Component } from 'react';
import Content from './Content';
import logo from './logo.svg';
import '../App.css';
import '../css/themify-icons/themify-icons.css'
import Slider from './Slider';


class Main extends Component{
    render() {
        return(
            <div>
                <header className="App-header App">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <Slider/>
                <Content/>
            </div>
            
        );
    }
}

export default Main