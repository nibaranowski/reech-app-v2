import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class SeachBar extends React.Component {
    render() {
        return (
            <div className="searchBar">
                <div className="searchBar__content">
                    <div className="searchBar__content__actualSearchBar">
                        <div className="search-bar__textbar">
                            <img src="/images/search-icon.png" />
                            <p>Enter a name, a company or an email…</p>
                        </div>
                        <div className="search-bar__button">
                            <img src="/images/arrow-right.png" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
