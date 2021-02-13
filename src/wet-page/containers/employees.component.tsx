import React from "react";
import {Employee} from "../../models/employee.interface";
import EmployeeCard from "../components/employee.component";
import '../../scss/_utilities.scss';
import {Container} from "react-bootstrap";
import {LoadEmployees} from "../../store/employees-store/actions";
import {getEmployees, getIsLoading} from "../../store/employees-store/selectors";
import classes from './employees.module.scss';
import withDataFetch from "../../wet-manager/shared/hoc/with-data-fetch.component";
import {DataFetchInterface} from "../../wet-manager/models/data-fetch.interface";
import {DataFetchProps} from "../../wet-manager/models/data-fetch-props.interface";

function Employees({ data }: DataFetchProps<Employee>) {
    const heading =  'O nas';

    return (
        <section id={'employees'} className={['sectionPadding', classes.employees].join(' ')}>
            <Container className={classes.employeesContainer}>
                <div className={classes.title}>
                    <h2>{heading}</h2>
                </div>
                <div className={classes.employeesContainerWrapper}>
                    {
                        (data || []).map((employee: Employee) => (
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

const options: DataFetchInterface<Employee> = {
    dataSelector: getEmployees,
    loadingSelector: getIsLoading,
    dataLoader: LoadEmployees,
}

export default withDataFetch(Employees, options);

