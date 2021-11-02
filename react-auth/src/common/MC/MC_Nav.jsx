import React, { Component } from 'react'
import '../../css/themify-icons/themify-icons.css';
import '../../css/employ.css';

class MC_Nav extends Component {
    constructor(props) {
        super(props);
        this.userButton = {
            float:'left', 
            marginRight:'10px'
        }
        this.backStyle={
            backgroundColor: '#4C566A',
            borderRadius: '10px 0px 0px 10px'
        }
        this.handleClick = (string)=>{
            alert(string)
        }
    }

    render() {
        return (
            <div id="header">
            <div id="nav">
            <ul>
                <li style={this.backStyle}>
                    <p style={{color:'white'}} >LOGO</p>
                </li>
                <li>
                    <p onClick = {() => this.handleClick("Hello")}>CATEGORIES</p>
                </li>
                <li>
                    <p>BLOG</p>
                </li>
                <li>
                    <lable>
                        <input type="text" id="username" name="username" class="search-bar"/>
                    </lable>
                </li>
                <li className="search-icon"><i className="ti-comment"></i></li>
                <li className="search-icon"><i className="ti-bell" style={{fontSize: '25px'}}></i></li>
            </ul>
            </div>
                <div className="user-account">
                    <i className="ti-user" style={this.userButton}></i>
                    <p>{this.props.username}</p>
                </div>
            </div>
        );
    }

}

export default MC_Nav
