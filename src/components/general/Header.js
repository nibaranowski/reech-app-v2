import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import MainMenu from './MainMenu';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <div className="header__title-content">
                            <Link className="header__title-content__title" to="/">
                                <h1>Reech.io</h1>
                            </Link>
                        </div>
                        <div className="header__title-content__menu">
                            <MainMenu />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
