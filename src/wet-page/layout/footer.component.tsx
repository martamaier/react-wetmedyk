import React from "react";
import logo from "../../images/logo.png";
import styles from './footer.module.scss';
import {Col, Container, Row} from "react-bootstrap";
import {Location} from "../../models/location.interface";
import {getIsLoading, getLocations} from "../../store/locations-store/selectors";
import CustomExpandLess from "../../shared/custom-expand-less.component";
import {scrollToElement} from "../../utils/scroller";
import {DataFetchInterface} from "../../wet-manager/models/data-fetch.interface";
import withDataFetch from "../../wet-manager/shared/hoc/with-data-fetch.component";
import {LoadLocations} from "../../store/locations-store/actions";
import {DataFetchProps} from "../../wet-manager/models/data-fetch-props.interface";

function Footer({ data }: DataFetchProps<Location>) {
    const copyrights = '@ 2020 Wetmedyk. All rights reserved.';

    return (
        <footer>
            <Container className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <Row>
                        <Col md={4} className={styles.footerWrapperLogo}>
                            <img src={logo} alt=""/>
                        </Col>
                        {
                            (data || []).map((location: Location) => (
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

const options: DataFetchInterface<Location> = {
    dataLoader: LoadLocations,
    dataSelector: getLocations,
    loadingSelector: getIsLoading,
};

export default withDataFetch(Footer, options);
