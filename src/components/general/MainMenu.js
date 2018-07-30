import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogin } from '../../actions/auth';

export const MainMenu = ({ startLogin }) => (
    <div>
        <button className="button-white" onClick={startLogin}><span>LOG IN</span></button>
        <button className="button-black--mod" onClick={startLogin}><span>SIGN UP</span></button>
    </div>
);


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(MainMenu);
