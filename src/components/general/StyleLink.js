import React from 'react';

import { connect } from 'react-redux';

export default class StyleLink extends React.Component {
    render() {
        return (
            <a target="_blank" style={{color: this.props.color}}  href={this.props.mail}>
                <img className="linkArrow" src={"/images/" + this.props.image} />
                <span className="styleLink__text">{this.props.title}</span>
            </a>
        );
    }
}
