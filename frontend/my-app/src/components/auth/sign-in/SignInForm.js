import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { Redirect } from 'react-router';
import '../../../styles/auth.css';


class SignInForm extends Component {
    state = {
        userEmail: '',
        userPassword: '',

        done: false,
        errors: {}
    }
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        //console.log(e.target.name + " did change: " + e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();

        const { userEmail, userPassword } = this.state;
        let errors = {};

        if (userEmail === '') errors.userEmail = "Cannot be empty";
        if (userPassword === '') errors.userPassword = "Cannot be empty";

        const isValid = Object.keys(errors).length === 0

        if (isValid) {
            //console.log("Login Success");
            this.props.login({
                username: this.state.userEmail,
                password: this.state.userPassword
            }).then(
                () => {
                    this.setState({ done: true })
                },
                (err) => {
                    // this.setState({ errors: err.response.data })
                    console.log({err});
                }

            );
        }
        else {
            console.log({ errors });
            this.setState({ errors });
        }


    }

    render() {
        const { errors } = this.state;
        const form = (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="text-center">
                            <div className="form-group">
                                <h1 className="header"><b>Login Page</b></h1>
                                <h6>Is it really hard?</h6>
                            </div>
                            <div className={classnames('form-group', { 'help-block': errors.userEmail })}>
                                <input type="email"
                                    className="form-control"
                                    id="userEmail"
                                    name="userEmail"
                                    placeholder="Your email"
                                    onChange={this.handleChange}
                                    value={this.state.userEmail}
                                />
                                {errors.userEmail ? <span className="help-block">{errors.userEmail}</span> : ''}
                            </div>
                            <div className={classnames('form-group', { 'help-block': errors.userPassword })}>
                                <input type="password"
                                    className="form-control"
                                    id="userPassword"
                                    name="userPassword"
                                    placeholder="Your password"
                                    onChange={this.handleChange}
                                    value={this.state.userPassword}
                                />
                                {errors.userPassword ? <span className="help-block">{errors.userPassword}</span> : ''}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <button className="btn btn-warning text-left" type="submit">Login</button>
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
        return (
            this.state.done ?
            <Redirect to="/" /> :
            form
        );
    }

}

export default SignInForm;