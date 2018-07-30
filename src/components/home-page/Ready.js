import React from 'react';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';

import Fade from 'react-reveal/Fade';

const Ready = () => (
    <div className="ready">
        <div className="ready__content">
            <div className="ready__content__text">
                <h1>Ready to start?</h1>
                <p>Browse our database and find the leads that your need to grow your business.</p>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Ready);
