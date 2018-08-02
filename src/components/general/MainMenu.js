import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//import { startLogin } from '../../actions/auth';

//export const MainMenu = ({ startLogin }) => (
export const MainMenu = ({ }) => (
    <div>
        <Link className="button-white" to="/login"><span>LOG IN</span></Link>
        <Link className="button-black--mod" to="/login"><span>SIGN UP</span></Link>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(MainMenu);
