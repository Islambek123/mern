import React, { Component } from 'react';
import SignInForm from './SignInForm';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';
import PropTypes from 'prop-types';

class SignInPage extends Component {
    render() {
        const { login } = this.props;
        return (
            <SignInForm login={login} />
        );
    }
}
SignInPage.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, {login})(SignInPage);