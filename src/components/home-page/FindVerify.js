import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../../actions/auth';

export const Track = () => (
    <div className="track">
        <div className="content-container">
            <div className="track__content">
                <div className="text-box">
                    <h2 className="text-box__title">
                        Find & verify business emails
                    </h2>
                    <p className="text-box__text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                    </p>
                    <button className="button-big-green" onClick={startLogin}><span>GET STARTED</span></button>
                </div>
                <div className="image-box">
                    <img src="images/find-verify.png" alt="Track" />
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Track);
