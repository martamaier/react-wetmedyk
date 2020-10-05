import React from "react";
import {Employee} from "../models/Employee.model";
import styles from './Employee.module.scss';
import {Col, Row} from "react-bootstrap";

const employee = (props: { toggleModal: Function, employee: Employee }) => (
    <Row className={styles.person}>
        <Col md={5} className={styles.personContent}>
            <h3>{props.employee.firstName} {props.employee.lastName}</h3>
            <span>{props.employee.title}</span>
            <button onClick={() => props.toggleModal(props.employee.id)}>Więcej</button>
        </Col>
        <Col md={7} className={styles.personImage}>
            <img src={props.employee.photo} alt={props.employee.lastName} />
        </Col>
    </Row>
);

export default employee;
