import React, { Component, Profiler } from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import Main from '../components/Main';
import CVinfo from '../components/CVinfo'
import Form from '../components/Form'



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/cv-info" component={CVinfo} />
                        <Route exact path="/form" component={Form} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Header
