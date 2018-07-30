import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../../actions/auth';

export const Automate = () => (
    <div className="automate">
        <div className="content-container">
            <div className="automate__content">
                <div className="image-box">
                    <img src="images/automate.png" alt="Automate" />
                </div>
                <div className="text-box">
                    <h2 className="text-box__title">
                        Automated your email campaigns.
                    </h2>
                    <p className="text-box__text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Automate);
