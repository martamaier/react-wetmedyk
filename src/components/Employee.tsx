import React from "react";
import {Employee} from "../models/Employee.model";

const employee = (props: Employee) => (
    <div className="row person">
        <div className="col-md-5 person-content">
            <h3>{props.firstName} {props.lastName}</h3>
            <span>{props.title}</span>
            <button>Więcej</button>
        </div>
        <div className="col-md-7 person-image">
            <img src={props.photo} alt={props.lastName} />
        </div>
    </div>
);

export default employee;
