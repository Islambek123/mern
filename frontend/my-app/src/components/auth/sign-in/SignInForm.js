import React from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        //console.log(e.target.name + " did change: " + e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        //alert('A name was submitted: ' + this.state.userEmail);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-3 offset-md-4">
                        <div className="text-center">
                            <div className="form-group">
                                <h1 className="header">Login Page</h1>
                                <h6>Is it really hard?</h6>
                            </div>
                            <div className="form-group">
                                <input type="email"
                                    className="form-control"
                                    id="userEmail"
                                    name="userEmail"
                                    placeholder="Your email"
                                    onChange={this.handleChange}
                                    value={this.state.userEmail}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password"
                                    className="form-control"
                                    id="userPassword"
                                    name="userPassword"
                                    placeholder="Your password"
                                    onChange={this.handleChange}
                                    value={this.state.userPassword}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <button className="btn btn-warning text-left" type="submit" >Login</button>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                                <div className="form-group">
                                    <Link to="/register">Create my profile!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        );
    }

}

export default SignInForm;