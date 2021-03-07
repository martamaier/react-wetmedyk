import React from 'react';
import {Location} from '../../models/location.interface';
import {Col, Container, Row} from "react-bootstrap";
import classes from './contact.module.scss';
import {LocationOn, Payment, PhonelinkRing, QueryBuilder} from "@material-ui/icons";
import {stringToStartCase} from "../../utils/content-handlers";

function Contact(
    {name, city, mapUrl, openHours, phone, street, zipCode}: Location,
) {
    const cards = [
        {
            type: 'location',
            content: [street, `${zipCode} ${city}`],
            icon: <LocationOn />,
        },
        {
            type: 'contact',
            content: [phone, 'kontakt@wetmedyk.pl'],
            icon: <PhonelinkRing />,
        },
        {
            type: 'hour',
            content: openHours.split('<br/>'),
            icon: <QueryBuilder />,
        },
        {
            type: 'account-details',
            content: ['Alior Bank', '30 2490 0005 0000 4530 5323 7410'],
            icon: <Payment />
        }
    ];
    return (
        <>
            <iframe className={classes.map}
                    src={mapUrl}
                    title={`${name} map`}/>
            <Container className="sectionPadding">
                <Row className={classes.iconsWrapper}>
                    <Col md={12}>
                        <h3 className={classes.heading}>{stringToStartCase(name)}</h3>
                    </Col>
                    {
                        cards.map(({content, type, icon }) => (
                            <Col key={type} md={4} className={classes.wrapper}>
                                <div>
                                    {icon}
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
