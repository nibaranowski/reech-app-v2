import React from 'react';
import { connect } from 'react-redux';

export const BackgroundImage = () => (
    <div className="mainB__content__image">
        <img src="/images/main-bck.png" />
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(BackgroundImage);
