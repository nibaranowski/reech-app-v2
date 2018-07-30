import React from 'react';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';

import Fade from 'react-reveal/Fade';

const MainB = () => (
    <div className="mainB">
        <div className="content-container">
            <div className="mainB__content">
                <div className="mainB__content__text">
                    <h1>Any lead, any industry,
anywhere. We find it.</h1>
                    <p>Find the business contact you need among our 350M+ leads database.</p>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainB);
