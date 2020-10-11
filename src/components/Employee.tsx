import React from "react";
import {Employee} from "../models/Employee.model";
import styles from './Employee.module.scss';

const employee = (props: { toggleModal: Function, employee: Employee }) => (
    <div className={styles.person}>
        <div className={styles.personContent}>
            <h3>{props.employee.firstName} {props.employee.lastName}</h3>
            <span>{props.employee.title}</span>
            <button onClick={() => props.toggleModal(props.employee.id)}>Więcej</button>
        </div>
        <div className={styles.personImage}>
            <img src={props.employee.photo} alt={props.employee.lastName} />
        </div>
    </div>
);

export default employee;
