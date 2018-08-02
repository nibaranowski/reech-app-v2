import React from 'react';
import { connect } from 'react-redux';
//import { startLogin } from '../../actions/auth';

//import FullLoginForm from '../loginForm/actualLoginForm/FullLoginForm'
import ReactSignupLoginComponent from '../login-page/ReactSignupLoginComponent';

//export const HomePage = ({ startLogin }) => (
export const LoginPage = ({ }) => (
    <div>
        <ReactSignupLoginComponent />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
