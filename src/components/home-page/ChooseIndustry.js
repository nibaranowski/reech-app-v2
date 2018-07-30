import React from 'react';
import { connect } from 'react-redux';
import StyleActualLinkMod from '../general/StyleActualLinkMod';

import Fade from 'react-reveal/Fade';

export const ChooseIndustry = () => (
    <div className="chooseIndustry">
        <div className="content-container">
            <div className="chooseIndustry__content">
                <h3 className="chooseIndustry__content__phrase">Choose an industry</h3>
                <div className="chooseIndustry__content__industries">
                    <h4 className="chooseIndustry__content__industries__industry">Accounting</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Airlines</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Apparel</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Banking</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Building</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Computer</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Hardware</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Defense</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Design</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Education</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Facilities</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Fine Art</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Fundraising</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Health</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Hospitality</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Information</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Judiciary</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Media</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Medical</h4>
                    <h4 className="chooseIndustry__content__industries__industry">Textiles</h4>                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(ChooseIndustry);
