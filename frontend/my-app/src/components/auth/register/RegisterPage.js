import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { register } from '../../../actions/authActions'
import PropTypes from 'prop-types';

class RegisterPage extends Component {
    render() {
        const { register } = this.props;
        return (
            <RegisterForm register={register} />
        );
    }
}

RegisterPage.propTypes = {
    register: PropTypes.func.isRequired
}

export default connect(null, { register })(RegisterPage);