import React from "react";
import {Employee} from "../models/Employee.model";
import styles from './Employee.module.scss';
import {Col, Row} from "react-bootstrap";

const employee = (props: Employee) => (
    <Row className={styles.person}>
        <Col md={5} className={styles.personContent}>
            <h3>{props.firstName} {props.lastName}</h3>
            <span>{props.title}</span>
            <button>Więcej</button>
        </Col>
        <Col md={7} className={styles.personImage}>
            <img src={props.photo} alt={props.lastName} />
        </Col>
    </Row>
);

export default employee;
