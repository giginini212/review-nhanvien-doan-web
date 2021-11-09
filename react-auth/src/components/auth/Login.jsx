import axios from 'axios';
import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"; // Link for react-router

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: '',
            loggedIn: false,
        }
    }

    formSubmit = (e) => {
        e.preventDefault();
        const data = {
            'email': this.state.email,
            'password': this.state.password,
        }

        // call API to validate log in user
        axios.post('/login', data)
          .then((response) => {
            // store token
            localStorage.setItem('token', response.data.token);
            this.setState({
                'loggedIn': true,
            });
            // store user state
            this.props.setUser(response.data.user);
          })
          .catch((err) => {
            this.setState({
                message: err.response.data.message
            })
          });
    }

    render() {
        // After Login in redirect to Profile
        if (this.state.loggedIn) {
            return <Redirect to='/profile' />
        }

        // show error message
        let error = "";
        if (this.state.message) {
            error = (
                <div>
                    <div className="alert alert-danger" role="alert">
                        {this.state.message}
                    </div>
                </div>
            );
        } // end error message

        // not allow user to access login page when authenticated
        if (localStorage.getItem('token')) {
            return <Redirect to="/profile" />
        }

        return (
            <div>
                <br />
                <br />
                <div class="row">
                    <div class="jumbotron col-lg-4 offset-lg-4">
                        <h3 class="text-center">Login Account</h3>
                        <form onSubmit={this.formSubmit}>
                            <div class="form-group">
                                {error}
                                <label>Email address</label>
                                <input type="email" name="email" class="form-control" aria-describedby="emailHelp" required onChange={(e) => {this.setState({email: e.target.value})}}/>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" name="password" class="form-control" required onChange={(e) => {this.setState({password: e.target.value})}} />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                            <br />
                            Forget Password <Link to="/forget">Click Here</Link>                        
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default Login
