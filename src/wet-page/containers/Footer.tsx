import React, {useEffect, useState} from "react";
import logo from "../../images/logo.png";
import styles from './Footer.module.scss';
import {Container, Row, Col} from "react-bootstrap";
import {Location} from "../../models/Location.model";
import {FaFacebookSquare, FaTwitterSquare, FaEnvelopeSquare} from 'react-icons/fa';
import axios, {AxiosResponse} from 'axios';

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
                            <FaFacebookSquare className={styles.icons}/>
                            <FaTwitterSquare className={styles.icons}/>
                            <FaEnvelopeSquare className={styles.icons}/>
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
        axios.get('http://localhost:8080/locations').then((res:AxiosResponse<Location[]>) => {
            setLocations(res.data);
        })
    }

}

export default Footer;
