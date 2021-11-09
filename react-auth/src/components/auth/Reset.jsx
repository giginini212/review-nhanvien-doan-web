import axios from 'axios';
import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"; // Link for react-router

class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            email: '',
            password: '',
            password_confirmation: '',
            message: ''
        }
    }

    // reset form submit
    formSubmit = (e) => {
        e.preventDefault();

        const data = {
            token: this.state.token,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        }

        axios.post('/reset/password', data)
        .then(response => {
            this.setState({
                'message': response.data.message,
            });
            document.getElementById('reset-form').reset();
        })
        .catch(err => {
            this.setState({
                'message': err.response.data.message,
            });
        })

    }

    render() {
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

        return (
            <div>
                <br />
                <br />
                <div class="row">
                    <div class="jumbotron col-lg-4 offset-lg-4">
                        <h3 class="text-center">New Password</h3>
                        <form onSubmit={this.formSubmit} id="reset-form">
                            {error}
                            <div class="form-group">
                                <label>Pincode</label>
                                <input type="name" name="token" class="form-control" required onChange={(e) => {this.setState({token: e.target.value})}} />
                            </div>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" class="form-control" required onChange={(e) => {this.setState({email: e.target.value})}} />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" name="password" class="form-control" required onChange={(e) => {this.setState({password: e.target.value})}} />
                            </div>
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input type="password" name="password_confirmation" class="form-control" required onChange={(e) => {this.setState({password_confirmation: e.target.value})}} />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Reset Password</button>
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

export default Reset
