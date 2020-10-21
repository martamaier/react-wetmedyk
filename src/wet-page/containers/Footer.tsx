import React, {useEffect, useState} from "react";
import logo from "../../images/logo.png";
import styles from './Footer.module.scss';
import {Container, Row, Col} from "react-bootstrap";
import {Location} from "../../models/Location.model";
import {FaFacebookSquare, FaTwitterSquare, FaEnvelopeSquare} from 'react-icons/fa';
import axios, {AxiosResponse} from 'axios';
import {CURRENT_ENV} from "../../environment";

function Footer() {
    const copyrights = '@ 2020 Wetmedyk. All rights reserved.';
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        getLocations();
    }, [])

    return (
        <footer>
            <Container className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <Row>
                        <Col md={6} className={styles.footerWrapperIcons}>
                            <a className={styles.icons} target="_blank"
                               href="https://pl-pl.facebook.com/pages/category/Veterinarian/WetMedyk-390130391162994/"
                               rel="noopener noreferrer">
                                <FaFacebookSquare/>
                            </a>
                            <a className={styles.icons} href="https://twitter.com/wetmedyk?lang=en"
                               target="_blank"
                               rel="noopener noreferrer">
                                <FaTwitterSquare/>
                            </a>
                            <a className={styles.icons} href="mailto:kontakt@wetmedyk.pl">
                                <FaEnvelopeSquare/>
                            </a>
                        </Col>
                        <Col md={6} className={styles.footerWrapperLocations}>
                            <img src={logo} alt=""/>
                            {
                                locations.map((location: Location) => (
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
                <span className={styles.copyrights}>{copyrights}</span>
            </Container>
        </footer>);

    function getLocations() {
        axios.get(`${CURRENT_ENV}/locations`).then((res:AxiosResponse<Location[]>) => {
            setLocations(res.data);
        })
    }

}

export default Footer;
