import React from 'react';
import logo from './../images/logo.png';

const header = () => (
    <header>
        <div className="container-fluid header-wrapper">
            <div/>
            <img className="logo" src={logo} alt="wetmedyk-logo"/>
                <div className="navigation">
                    <span className="navigation-icon menu">&nbsp;</span>
                </div>
        </div>
    </header>
);
export default header;
