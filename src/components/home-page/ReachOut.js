import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../../actions/auth';

export const ReachOut = () => (
    <div className="reachOut">
        <div className="reachOut__content">
            <div className="reachOut__content__text-box">
                <h4 className="reachOut__content__text-box__title">
                    Automatically reach out to your audience.
                </h4>
                <p className="reachOut__content__text-box__text">
                    Pay $99/month (billed annually) and contact up to 2000 leads per month with automated email dripping campaign                    </p>
                <a className="reachOut__content__text-box__link" href="#">TRY OUR FREE PLAN</a>
            </div>
            <div className="reachOut__content__image-box">
                <img src="images/reach-out.png" alt="ReachOut" />
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(ReachOut);
