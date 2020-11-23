import React, {useEffect} from "react";
import logo from "../../images/logo.png";
import styles from './Footer.module.scss';
import {Container, Row, Col} from "react-bootstrap";
import {Location} from "../../models/Location.model";
import {FaFacebookSquare, FaTwitterSquare, FaEnvelopeSquare} from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { LoadLocations } from "../../store/locations-store/actions";
import { getIsLoading, getLocations } from "../../store/locations-store/selectors";

function Footer() {
    const copyrights = '@ 2020 Wetmedyk. All rights reserved.';
    const locations = useSelector(getLocations);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!locations.length && !isLoading) {
            dispatch(LoadLocations());
        }
    }, [dispatch, locations, isLoading])

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
}

export default Footer;
