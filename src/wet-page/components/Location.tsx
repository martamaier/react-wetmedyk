import {Location} from "../../models/Location.model";
import React from "react";
import classes from './Location.module.scss';
import {Col, Container, Row} from "react-bootstrap";
import Button from './../../shared/Button';
import logo2 from './../../images/logo2.png';
import {useDispatch} from "react-redux";
import {SelectLocations} from "../../store/locations-store/actions";
import {scrollToElement} from "../../utils/scroller";

const [cat, dog] = [
    'http://wetmedyk.pl/wp-content/uploads/2015/01/41.png',
    'http://wetmedyk.pl/wp-content/uploads/2015/01/WetMedyk-14.jpg',
];

function LocationItem (props: Location) {
    const dispatch = useDispatch();
    const displayImage = props.id === 1 ? dog : cat;
    const imageStyling = {
        backgroundImage: `linear-gradient(to right bottom, ${classes.primaryGreen}, ${classes.primaryGreen}), url(${displayImage})`,
        backgroundSize: 'cover',
    }
    const handleMoreClick = () => {
        dispatch(SelectLocations(props.id));
        scrollToElement('contact');
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
                                <h2>{props.name}</h2>
                                <h3>Adres</h3>
                                <p>{props.street}<br/>{props.zipCode} {props.city}</p>
                                <h3>Kontakt</h3>
                                <p>{props.phone}</p>
                                <Button text={'Wiecej'} type={'button'} onClick={handleMoreClick} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    );
}


export default LocationItem;
