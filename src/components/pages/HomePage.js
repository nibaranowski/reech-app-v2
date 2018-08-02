import React from 'react';
import { connect } from 'react-redux';
//import { startLogin } from '../../actions/auth';

import BackgroundImage from '../home-page/BackgroundImage';
import MainB from '../home-page/MainB';
import OurCustomers from '../home-page/OurCustomers';
import FindVerify from '../home-page/FindVerify';
import Testimonials from '../home-page/Testimonials';
import ChooseIndustry from '../home-page/ChooseIndustry';
import Automate from '../home-page/Automate';
import ReachOut from '../home-page/ReachOut';
import Track from '../home-page/Track';
import Ready from '../home-page/Ready';

import Header from '../general/Header';
import Footer from '../general/Footer';
import SearchBar from '../general/SearchBar';

//import FullLoginForm from '../loginForm/actualLoginForm/FullLoginForm'
//import ReactSignupLoginComponent from '../login-page/ReactSignupLoginComponent';

//export const HomePage = ({ startLogin }) => (
export const HomePage = ({ }) => (
    <div>
        {/* <ReactSignupLoginComponent /> */}
        <BackgroundImage />
        <Header />
        <MainB />
        <SearchBar />
        <OurCustomers />
        <FindVerify />
        <ChooseIndustry />
        <Automate />
        <ReachOut />
        <Track />
        <Ready />
        <SearchBar />
        <Footer />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(HomePage);
