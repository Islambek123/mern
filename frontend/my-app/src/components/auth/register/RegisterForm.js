import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import '../../../styles/registration.css';

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
            userPasswordConfirm: '',
            userName: '',

            errors: {}
        }
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

        const   { userEmail, userPassword, userPasswordConfirm, userName } = this.state;

        let errors = {};

        if (userEmail === '') errors.userEmail = "Cant't be empty!";
        if (userPassword === '') errors.userPassword = "Cant't be empty!";
        if (userName === '') errors.userName = "Cant't be empty!";
        if (userPassword.length < 7 && userPasswordConfirm.length < 7) errors.userPassword = "Minimum length is 8!"; errors.userPasswordConfirm = "Minimum length is 8!"
        if (userPassword !== userPasswordConfirm) {
            errors.userPassword = "Passwords do not match";
            errors.userPasswordConfirm = "Passwords do not match"
        }
        const isValid = Object.keys(errors).length === 0

        if (isValid) {
            console.log("Success");
            // this.props.register(
            //     {
            //         Captcha: captcha,
            //         Email: email,
            //         UserName: username,
            //         Password: password,
            //     }).then(
            //         () => {
            //             this.props.addFlashMessage({
            //                 type: 'success',
            //                 text: 'Registration Success'
            //             });
            //             this.setState({ done: true })
            //         },
            //         (err) => this.setState({ errors: err.response.data })
            //     );
        }
        else {
            console.log("Failure");
            console.log({ errors });
            this.setState({ errors });
        }
    }

    render() {
        const { errors } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-3 offset-md-4">
                        <div className="text-center" >
                            <div className="form-group">
                                <h1 className="header">Registration Page</h1>
                                <h6>Easy for you</h6>
                            </div>
                            <div className={classnames('form-group', { 'help-block': !!errors.username })}>
                                <input type="email"
                                    className="form-control"
                                    id="userEmail"
                                    name="userEmail"
                                    placeholder="Your email"
                                    onChange={this.handleChange}
                                    value={this.state.userEmail}
                                />
                                {!!errors.userEmail ? <span className="help-block">{errors.userEmail}</span> : ''}
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                        <div className={{ 'help-block': !!errors.userPassword }}>
                                            <input type="password"
                                                className="form-control"
                                                id="userPassword"
                                                name="userPassword"
                                                placeholder="Your password"
                                                onChange={this.handleChange}
                                                value={this.state.userPassword}
                                            />
                                            {!!errors.userPassword ? <span className="help-block">{errors.userPassword}</span> : ''}
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                        <div className={{ 'help-block': !!errors.userPasswordConfirm }}>
                                            <input type="password"
                                                className="form-control"
                                                id="userPasswordConfirm"
                                                name="userPasswordConfirm"
                                                placeholder="Confirm password"
                                                onChange={this.handleChange}
                                                value={this.state.userPasswordConfirm}
                                            />
                                            {!!errors.userPasswordConfirm ? <span className="help-block">{errors.userPasswordConfirm}</span> : ''}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={classnames('form-group', { 'help-block': !!errors.userName })}>
                                <input type="text"
                                    className="form-control"
                                    id="userName"
                                    name="userName"
                                    placeholder="Your Name"
                                    onChange={this.handleChange}
                                    value={this.state.userName}
                                />
                                {!!errors.userName ? <span className="help-block">{errors.userName}</span> : ''}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <button className="btn btn-warning text-left" type="submit" >Continue</button>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                                <div className="form-group">
                                    <Link to="/register">Forgot password?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        );
    }
}

export default RegisterForm;