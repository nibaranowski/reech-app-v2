import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class StyleActualLink extends React.Component {
    render() {
        return (
            <Link target="_blank" style={{color: this.props.color}}  to={this.props.link}>
                <img className="linkArrow" style={{paddin: this.props.color}} src={"/images/" + this.props.image} />
                <span className="styleActualLink__text">{this.props.title}</span>
            </Link>
        );
    }
}
