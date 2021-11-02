import React, { Component } from 'react'
import MC_Nav from './MC_Nav';
import Content from './Content';
import Slider from './Slider';
import CVinfo from './CV_info';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class MC_Header extends Component {
    render() {
        return (
            <div>
                <MC_Nav />
                {/* render url-based components  */}
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Slider />
                            <Content />
                        </Route>
                        <Route exact path="/cv-info" component={CVinfo} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default MC_Header
