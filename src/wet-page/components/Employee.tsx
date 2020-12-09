import React from "react";
import {Employee} from "../../models/Employee.model";
import classes from './Employee.module.scss';

function EmployeeCard(props: { toggleModal: Function, employee: Employee }) {
    const {toggleModal, employee} = props;
    return (
        <div className={classes.person}>
            <img
                onClick={() => toggleModal(employee.id)}
                src={employee.photo}
                alt={employee.lastName}/>
            <h3>{employee.firstName} {employee.lastName}</h3>
            <h4>{employee.title}</h4>
        </div>
    )
}

export default EmployeeCard;
