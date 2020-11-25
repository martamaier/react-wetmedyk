import React from 'react';
import logo from '../../images/logo.png';
import styles from './Header.module.scss';
import { Col, Container, Row } from "react-bootstrap";
import { Route } from "../../models/Route.model";
import { routes } from "../../static/Routes";

function Header() {
    const scrollToElement = (element: string) => window.scrollTo(
        {
            top: (document.getElementById(element) as any).offsetTop,
            behavior: 'smooth',
        },
    );
    return (
        <header>
            <Container>
                <Row>
                    <Col lg={12} className={styles.headerWrapper}>
                        <img className={styles.logo}
                             src={logo}
                             alt="wetmedyk-logo"/>
                        <ul className={styles.navigationItems}>
                            {
                                routes.map((route: Route) => (
                                    <li key={route.path}
                                        className={styles.navigationItem}
                                        onClick={() => scrollToElement(route.path)}>
                                        { route.displayName }
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;
