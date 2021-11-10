import React, { Component, Profiler } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from '../components/Main';
import CVinfo from '../components/CVinfo'
import Form from '../components/Form'
import NavBar from '../components/NavBar';
import Category from '../components/Category';



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
                <NavBar />
                <div>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/cv-info/:id" component={CVinfo} />
                        <Route exact path="/category" component={Category} />
                        <Route exact path="/form" component={Form} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Header
