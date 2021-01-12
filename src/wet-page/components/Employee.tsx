import React from "react";
import {Employee} from "../../models/Employee.model";
import classes from './Employee.module.scss';

function EmployeeCard({ employee }: { employee: Employee }) {
    return (
        <div className={classes.person}>
            <img
                src={employee.photo}
                alt={employee.lastName}/>
            <h3>{employee.firstName} {employee.lastName}</h3>
            <h4>{employee.title}</h4>
        </div>
    )
}

export default EmployeeCard;
