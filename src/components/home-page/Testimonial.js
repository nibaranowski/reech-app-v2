import React from 'react';
import { connect } from 'react-redux';

export default class Testimonial extends React.Component {
    render() {
        return (
            <div className="testimonial__content__card">
                <div className="testimonial__content__card__image">
                    <img src={"/images/" + this.props.image} />
                </div>
                <h3>{this.props.fullName}</h3>
                <h4>{this.props.jobTitle}</h4>
                <blockquote className="testimonial__content__card__quote">{this.props.quote}</blockquote>
            </div>
        );
    }
}
