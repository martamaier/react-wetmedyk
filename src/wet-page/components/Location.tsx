import {Location} from "../../models/Location.model";
import React from "react";
import classes from './Location.module.scss';
import {Col, Container, Row} from "react-bootstrap";
import logo2 from './../../images/logo2.png';

const [cat, dog] = [
    'http://wetmedyk.pl/wp-content/uploads/2015/01/41.png',
    'http://wetmedyk.pl/wp-content/uploads/2015/01/WetMedyk-14.jpg',
];

function LocationItem (
    { id, name, street, zipCode, city, phone, openHours }: Location
) {
    const displayImage = id === 1 ? dog : cat;
    const [hour1, hour2] = openHours.split('<br/>');
    const imageStyling = {
        backgroundImage: `linear-gradient(to right bottom, ${classes.primaryGreen}, ${classes.primaryGreen}), url(${displayImage})`,
        backgroundSize: 'cover',
    }

    return (
        <div style={imageStyling}>
            <Container fluid>
                <div className={classes.site}>
                    <Container fluid>
                        <Row>
                            <Col sm={3} className={classes.justify}>
                                <img className={classes.bigLogo} src={logo2} alt="wetmedyk big logo"/>
                            </Col>
                            <Col sm={9} className={classes.siteBody}>
                                <h2>{name}</h2>
                                <h3>Adres</h3>
                                <p>{street}<br/>{zipCode} {city}</p>
                                <h3>Kontakt</h3>
                                <p>{phone}</p>
                                <h3>Godziny otwarcia</h3>
                                <p>{hour1}<br/>{hour2}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default LocationItem;
