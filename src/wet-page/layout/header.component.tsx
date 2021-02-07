import React from 'react';
import logo from '../../images/logo.png';
import classes from './header.module.scss';
import {Container, Navbar} from "react-bootstrap";
import {Route} from "../../models/route.interface";
import {routes} from "../../static/routes";
import {scrollToElement} from "../../utils/scroller";

function Header() {
    return (
        <Navbar
            className={classes.navbar}
            collapseOnSelect
            expand="lg"
            id="home">
            <Container className={classes.navbarWrapper}>
                <Navbar.Brand>
                    <img className={classes.logo}
                         src={logo}
                         alt="wetmedyk-logo"/>
                </Navbar.Brand>
                <Navbar.Toggle
                    className={classes.toggle}
                    aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    >
                    <ul className={classes.navbarWrapperItems}>
                        {
                            routes.map((route: Route) => (
                                <li key={route.path}
                                          className={classes.navbarWrapperItemsItem}
                                          onClick={() => scrollToElement(route.path)}>
                                    {route.displayName}
                                </li>
                            ))
                        }
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
