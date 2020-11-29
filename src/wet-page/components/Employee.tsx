import React from "react";
import {Employee} from "../../models/Employee.model";
import classes from './Employee.module.scss';
import Button from './../../shared/Button';

function EmployeeCard (props: { toggleModal: Function, employee: Employee }) {
    const { toggleModal, employee } = props;
    return (
        <div className={classes.person}>
            <div className={classes.personContent}>
                <h3>{employee.firstName} {employee.lastName}</h3>
                <span>{employee.title}</span>
                <Button onClick={() => toggleModal(employee.id)}
                        type="button"
                        text="Więcej" />
            </div>
            <div className={classes.personImage}>
                <img src={employee.photo} alt={employee.lastName} />
            </div>
        </div>
    )
}

export default EmployeeCard;
