import React from "react";
import logo from "../../images/logo.png";
import styles from './Footer.module.scss';
import {Col, Container, Row} from "react-bootstrap";
import {Location} from "../../models/Location.model";
import {useSelector} from "react-redux";
import {getLocations} from "../../store/locations-store/selectors";
import CustomExpandLess from "../../shared/CustomExpandLess";
import {scrollToElement} from "../../utils/scroller";

function Footer() {
    const copyrights = '@ 2020 Wetmedyk. All rights reserved.';
    const locations = useSelector(getLocations);

    return (
        <footer>
            <Container className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <Row>
                        <Col md={4} className={styles.footerWrapperLogo}>
                            <img src={logo} alt=""/>
                        </Col>
                        {
                            locations.map((location: Location) => (
                                <Col key={location.id} md={4} className={styles.footerWrapperLocations}>
                                    <div className={styles.location}>
                                        <h3>{location.name}</h3>
                                        <span>{location.street}, {location.zipCode} {location.city}</span>
                                        <span>{location.phone}</span>
                                    </div>
                                </Col>

                            ))
                        }
                    </Row>
                </div>
                <span className={styles.copyrights}>{copyrights}</span>
            </Container>
            <div className={styles.goBack}>
                <CustomExpandLess disabled={false} handleClick={() => scrollToElement('home')} />
            </div>
        </footer>);
}

export default Footer;
