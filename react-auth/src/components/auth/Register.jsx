import axios from 'axios';
import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"; // Link for react-router


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            message: '',
            loggedIn: false,
        }
    }

    formSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        }

        axios.post('/register', data)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            this.setState({
                loggedIn: true,
            });
            // store user state
            this.props.setUser(response.data.user)

        })
        .catch(err => {
            console.log(err);
        })

    }

    render() {
        // redirect user after registered
        if (this.state.loggedIn) {
            return <Redirect to='/profile' />
        }
        
        return (
            <div>
                <br />
                <br />
                <div class="row">
                    <div class="jumbotron col-lg-4 offset-lg-4">
                        <h3 class="text-center">Register Account</h3>
                        <form onSubmit={this.formSubmit}>
                            <div class="form-group">
                                <label>User Name</label>
                                <input type="name" class="form-control" required onChange={(e) => {this.setState({name: e.target.value})}} />
                            </div>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" class="form-control" required onChange={(e) => {this.setState({email: e.target.value})}} />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" name="password" class="form-control" required onChange={(e) => {this.setState({password: e.target.value})}} />
                            </div>
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input type="password" name="password_confirmation" class="form-control" required onChange={(e) => {this.setState({password_confirmation: e.target.value})}} />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Register</button>
                            <br />
                            Alreay Have An Account? <Link to="/login">Login here</Link>
                            <br />              
                            Forget Password <Link to="/forget">Click here</Link>                        
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default Register
