import React from 'react';
import { connect } from 'react-redux';
import StyleActualLinkMod from '../general/StyleActualLinkMod';

import Fade from 'react-reveal/Fade';

export const OurCustomers = () => (
    <div className="ourCustomers">
        <div className="content-container">
            <div className="ourCustmomers__content">
                <p className="ourCustomers__content__phrase">Hunter is used by <b>10,000+ companies</b> and chosen by the smartest companies.</p>
                <div className="ourCustomers__content__clients">
                    <img src="images/client1.png" alt="Google" />
                    <img src="images/client2.png" alt="IBM" />
                    <img src="images/client3.png" alt="Microsoft" />
                    <img src="images/client4.png" alt="Hubspot" />
                    <img src="images/client5.png" alt="Adobe" />
                    <img src="images/client6.png" alt="inVision" />
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(OurCustomers);
