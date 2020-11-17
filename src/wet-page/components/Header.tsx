import React from 'react';
import logo from '../../images/logo.png';
import styles from './Header.module.scss';
import { Col, Container, Row } from "react-bootstrap";

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
                {/*<div/>*/}
                <Row>
                    <Col lg={12} className={styles.headerWrapper}>
                        <img className={styles.logo} src={logo} alt="wetmedyk-logo"/>
                        <ul className={styles.navigationItems}>
                            <li className={styles.navigationItem}
                                onClick={() => scrollToElement('services')}>usługi</li>
                            <li className={styles.navigationItem}>lecznice</li>
                            <li className={styles.navigationItem}
                                onClick={() => scrollToElement('employees')}>o nas</li>
                            <li className={styles.navigationItem}>kontakt</li>
                        </ul>
                    </Col>
                </Row>

                {/*<div className={styles.navigation}>*/}
                {/*    <span className={[styles.navigationIcon, styles.menu].join(' ')}>&nbsp;</span>*/}
                {/*</div>*/}
            </Container>
        </header>
    )
}

export default Header;
