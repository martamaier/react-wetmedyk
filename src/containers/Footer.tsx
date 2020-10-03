import React from "react";
import logo from "./../images/logo.png";
import styles from './Footer.module.scss';
import {Container, Row, Col} from "react-bootstrap";
import {Location} from "../models/Location.model";
import {FaFacebookSquare, FaTwitterSquare, FaEnvelopeSquare} from 'react-icons/fa';
import * as _ from 'lodash';
import {locations} from "../data/locations";

class Footer extends React.Component<any, any> {
    state = {
        copyrights: '@ 2020 Wetmedyk. All rights reserved.',
        locations: _.cloneDeep(locations),
    }
    render() {
        return (
        <footer>
            <Container className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <Row>
                        <Col md={6} className={styles.footerWrapperIcons}>
                            <FaFacebookSquare className={styles.icons} />
                            <FaTwitterSquare className={styles.icons} />
                            <FaEnvelopeSquare className={styles.icons} />
                        </Col>
                        <Col md={6} className={styles.footerWrapperLocations}>
                            <img src={logo} alt="" />
                            {
                                this.state.locations.map((location: Location) => (
                                    <div key={location.id} className={styles.location}>
                                        <h3>{location.name}</h3>
                                        <span>{location.street}, {location.zipCode} {location.city}</span>
                                        <span>{location.phone}</span>
                                    </div>
                                ))
                            }
                        </Col>
                    </Row>
                </div>
                <span className={styles.copyrights}>{this.state.copyrights}</span>
            </Container>
        </footer>);
    }
}

export default Footer;
