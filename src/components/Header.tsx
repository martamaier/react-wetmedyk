import React from 'react';
import logo from './../images/logo.png';
import styles from './Header.module.scss';
import {Container, Row} from "react-bootstrap";

const header = () => (
    <header>
        <Container fluid className={styles.headerWrapper}>
            <Row>
                <div/>
                <img className={styles.logo} src={logo} alt="wetmedyk-logo"/>
                <div className={styles.navigation}>
                    <span className={[styles.navigationIcon, styles.menu].join(' ')}>&nbsp;</span>
                </div>
            </Row>
        </Container>
    </header>
);
export default header;
