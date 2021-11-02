import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Forget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: ''
        }
    }

    formSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: this.state.email
        };

        // send email to reset password
        axios.post('/forgetpassword', data)
        .then((response) => {
            this.setState({
                message: response.data.message,
            });
            document.getElementById('forget-form').reset();
        })
        .catch((err) => {
            this.setState({
                message: err.response.data.message
            })
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
                        <h3 class="text-center">Reset Password</h3>
                        <form onSubmit={this.formSubmit} id="forget-form">
                            {error}
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" class="form-control" required onChange={(e) => {this.setState({email: e.target.value})}} />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Send To Mail</button>
                            <br />
                            Alreay Have An Account? <Link to="/login">Login here</Link>
                            <br />              
                            Don't Have An Account? <Link to="/register">Register</Link>                       
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default Forget
