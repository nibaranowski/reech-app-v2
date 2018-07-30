import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Footer = () => (
    <footer className="footer">
        <div className="footer__content">
            <div className="footer__content__summary">
                <h4 className="footer__content__summary__title">Reech.io is the largest, most reliable B2B leads database and email marketing automation platform.</h4>
                <p className="footer__content__summary__subtitle">Able to deliver any contact from anywhere and any industry, Reech.io is the lead database, email marketing platform, and whatever-you-might-need to accelerate and automate your sales and marketing.<a className="footer__content__summary__subtitle__link">Read More.</a> </p>
            </div>
            <div className="footer__content__actualFooter">
                <div className="footer__content__actualFooter__logo">
                    <a href="#"><img src="/images/logo-footer.png" /></a>
                </div>
                <div className="footer__content__actualFooter__sections">
                    <div className="footer__content__actualFooter__sections__column">
                        <div className="footer__content__actualFooter__sections__column__title">
                            <h2>COMPANY</h2>
                        </div>
                        <Link className="footer__content__actualFooter__sections__column__subtitle" to="/about">
                            <h3>About</h3>
                        </Link>
                        <Link className="footer__content__actualFooter__sections__column__subtitle" to="/careers">
                            <h3>Jobs</h3>
                        </Link>
                        <div className="footer__content__actualFooter__sections__column__subtitle">
                            <h3><a target="_blank" href="https://medium.com/seedbright">Blog</a></h3>
                        </div>
                        <Link className="footer__content__actualFooter__sections__column__subtitle" to="/contact">
                            <h3>Press</h3>
                        </Link>
                    </div>
                    <div className="footer__content__actualFooter__sections__column">
                        <div className="footer__content__actualFooter__sections__column__title">
                            <h2>RESOURCES</h2>
                        </div>
                        <Link className="footer__content__actualFooter__sections__column__subtitle " to="/contact">
                            <h3>Support</h3>
                        </Link>
                        <Link className="footer__content__actualFooter__sections__column__subtitle" to="/contact">
                            <h3>Contact</h3>
                        </Link>
                        <Link className="footer__content__actualFooter__sections__column__subtitle" to="/privacy">
                            <h3>Privacy Policy</h3>
                        </Link>

                    </div>
                    <div className="footer__content__actualFooter__sections__column">
                        <div className="footer__content__actualFooter__sections__column__title">
                            <h2>CONTACT</h2>
                        </div>
                        <div className="footer__content__actualFooter__sections__column__subtitle">
                            <h3><a target="_blank" href="https://www.linkedin.com/company/seedbright">LinkedIn</a></h3>
                        </div>
                        <div className="footer__content__actualFooter__sections__column__subtitle">
                            <h3><a target="_blank" href="https://www.facebook.com/pg/seedbright.apps">Facebook</a></h3>
                        </div>
                        <div className="footer__content__actualFooter__sections__column__subtitle">
                            <h3><a target="_blank" href="https://twitter.com/seedbrighttech">Twitter</a></h3>
                        </div>
                        <div className="footer__content__actualFooter__sections__column__subtitle">
                            <h3><a target="_blank" href="https://www.instagram.com/seedbright">Instagram</a></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__content__lastSection">
                <p>&copy; 2018 REED.IO INC</p>
                <h2><a href="#">TERMS</a></h2>
                <h2><a href="#">PRIVACY</a></h2>
            </div>
        </div>
    </footer>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Footer);
