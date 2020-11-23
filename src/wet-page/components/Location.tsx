import {Location} from "../../models/Location.model";
import React from "react";
import styles from './Location.module.scss';
import {Container, Row, Col} from "react-bootstrap";
import Button from './../../shared/Button';

const image = [
    'http://wetmedyk.pl/wp-content/uploads/2015/01/41.png',
    'http://wetmedyk.pl/wp-content/uploads/2015/01/WetMedyk-14.jpg',
];

const location = (props: Location) => {
    const displayImage = props.id === 1 ? image[props.id] : image[0];
    const imageStyling = {
        backgroundImage: `linear-gradient(to right bottom, ${styles.primaryGreen}, ${styles.primaryGreen}), url(${displayImage})`,
        backgroundSize: 'cover',
    }
    return (
        <div className={styles.site} style={imageStyling}>
            <div className={styles.siteHeading}>
                <h2>{props.name}</h2>
            </div>
            <Container className={styles.siteBody}>
                <Row>
                    <Col md={6} className={styles.siteBodyData}>
                        <h3>Adres</h3>
                        <p>{props.street}<br/>{props.zipCode} {props.city}</p>
                        <h3>Kontakt</h3>
                        <p>{props.phone}</p>
                        <Button text={'Wiecej'} type={'button'} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default location;
