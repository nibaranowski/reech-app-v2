import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../../actions/auth';

export const Track = () => (
    <div className="track">
        <div className="content-container">
            <div className="track__content">
                <div className="track__content__text-box">
                    <h2 className="track__content__text-box__title">
                        Track & measure your campaigns performance.
                    </h2>
                    <p className="track__content__text-box__text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <button className="button-big-green" onClick={startLogin}><span>GET STARTED</span></button>
                </div>
                <div className="track__content__image-box">
                    <img src="images/track.png" alt="Track" />
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Track);
