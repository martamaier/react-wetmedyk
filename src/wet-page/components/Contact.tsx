import React from 'react';
import {Location} from '../../models/Location.model';
import {Col, Container, Row} from "react-bootstrap";
import classes from './Contact.module.scss';
import {LocationOn, PhonelinkRing, QueryBuilder} from "@material-ui/icons";
import {stringToStartCase} from "../../utils/content-handlers";

function Contact(
    {name, city, mapUrl, openHours, phone, street, zipCode}: Location,
) {
    const cards = [
        {
            type: 'location',
            content: [street, `${zipCode} ${city}`],
        },
        {
            type: 'contact',
            content: [phone, 'kontakt@wetmedyk.pl'],
        },
        {
            type: 'hour',
            content: openHours.split('<br/>'),
        }
    ];
    return (
        <>
            <iframe className={classes.map}
                    src={mapUrl}
                    title={`${name} map`}/>
            <Container className="sectionPadding">
                <Row>
                    <Col md={12}>
                        <h3 className={classes.heading}>{stringToStartCase(name)}</h3>
                    </Col>
                    {
                        cards.map(({content, type}) => (
                            <Col key={type} md={4} className={classes.wrapper}>
                                <div>
                                    {
                                        type === 'location' ?
                                            <LocationOn /> :
                                            (type === 'contact' ? <PhonelinkRing /> : <QueryBuilder />)
                                    }
                                    {
                                        content.map((text) => (
                                            <div key={String(text)}>{text}</div>
                                        ))
                                    }
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Contact;
