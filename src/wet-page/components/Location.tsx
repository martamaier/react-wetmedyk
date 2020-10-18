import {Location} from "../../models/Location.model";
import React from "react";
import styles from './Location.module.scss';
import {Container, Row, Col} from "react-bootstrap";

const location = (props: Location) => {
    const [hour1, hour2] = props.openHours.split('<br/>');
    return (
        <div className={styles.site}>
            <div className={styles.siteHeading}>
                <h2>{props.name}</h2>
            </div>
            <Container className={styles.siteBody}>
                <Row>
                    <Col md={6} className={styles.siteBodyData}>
                        <h3>Adres</h3>
                        <p>{props.street}<br/>{props.zipCode} {props.city}</p>
                        <h3>Godziny otwarcia</h3>
                        <p>{hour1}<br/>{hour2}</p>
                        <h3>Kontakt</h3>
                        <p>{props.phone}</p>
                    </Col>
                    <Col md={6} className={styles.siteBodyMap}>
                        <iframe
                            title="map"
                            src={props.mapUrl}
                            allowFullScreen={true}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default location;
