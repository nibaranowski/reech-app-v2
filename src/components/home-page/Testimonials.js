import React from 'react';
import { connect } from 'react-redux';
import Testimonial from './Testimonial';

import Fade from 'react-reveal/Fade';

export const Testimonials = () => (
    <div className="testimonials">
        <div className="content-container">
            {/* <h1 className="testimonials__title">Some of our great clients</h1> */}
            <div className="testimonials__content">
                <Fade
                    duration={400}
                    delay={0}
                >
                    <Testimonial
                        image="person1-min.jpg"
                        fullName="Jean-Michel Hermange"
                        jobTitle="COO, BNP Cardif Belgium"
                        quote=" Seedbright brought a multi-industry expertise that helped us challenge our ideas about the future of digital insurance."
                    />
                </Fade>
                <Fade
                    duration={400}
                    delay={100}
                >
                    <Testimonial
                        image="person2b-min.jpg"
                        fullName="Benoit Gailly"
                        jobTitle="Prof., Louvain Business School"
                        quote=" Working with Seedbright allowed us to design and develop a multi-platform innovation survey tool for a limited budget."
                    />
                </Fade>
                <Fade
                    duration={400}
                    delay={200}
                >
                    <Testimonial
                        image="person3-min.png"
                        fullName="Michael Krinner"
                        jobTitle="CEO, Krinner Solar"
                        quote=" Seedbright helped us define priorities for the development of new branding projects. I would definitely recommend them."
                    />
                </Fade>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Testimonials);
