import React, {useEffect} from "react";
import {Employee} from "../../models/employee.interface";
import EmployeeCard from "../components/employee.component";
import '../../scss/_utilities.scss';
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {LoadEmployees} from "../../store/employees-store/actions";
import {getEmployees, getIsLoading} from "../../store/employees-store/selectors";
import classes from './employees.module.scss';
import * as _ from 'lodash';

function Employees() {
    const dispatch = useDispatch();
    const employees = useSelector(getEmployees);
    const isLoading = useSelector(getIsLoading);
    const {heading} = {
        heading: 'O nas',
    }

    useEffect(() => {
        if (!employees.length && !isLoading) {
            dispatch(LoadEmployees());
        }
    }, [dispatch, employees, isLoading])

    return (
        <section id={'employees'} className={['sectionPadding', classes.employees].join(' ')}>
            <Container className={classes.employeesContainer}>
                <div className={classes.title}>
                    <h2>{heading}</h2>
                </div>
                <div className={classes.employeesContainerWrapper}>
                    {
                        _.sortBy(employees, 'order').map((employee: Employee) => (
                            <EmployeeCard
                                key={employee.id}
                                employee={employee}
                                />
                        ))
                    }
                </div>
            </Container>
        </section>);
}

export default Employees;

