import React, { Component, Profiler } from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../components/Home'
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget';
import Profile from '../components/Profile';
import Reset from '../components/Reset';
import axios from 'axios';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        this.setUser = this.setUser.bind(this);
    }

    componentDidMount() {
        axios.get('/user')
        .then(response => {
            this.setUser(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    setUser = user => {
        this.setState({
            user: user
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Nav user={this.state.user} setUser={this.setUser} />
                    {/* render url-based components  */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={() => <Login user={this.state.user} setUser={this.setUser} />} setUser={this.setUser} />
                        <Route exact path="/register" component={() => <Register user={this.state.user} />} setUser={this.setUser}/>
                        <Route exact path="/forget" component={Forget} />
                        <Route exact path="/reset/:id" component={Reset} />
                        <Route exact path="/profile" component={() => <Profile user={this.state.user} />} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Header
