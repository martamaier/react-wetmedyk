import React, {useEffect, useReducer} from 'react';
import {employeeReducer} from "../../store/employees-store/reducer";
import axios, {AxiosResponse} from "axios";
import {CURRENT_ENV} from "../../environment";
import {Employee} from "../../models/Employee.model";
import DataTable from "../../shared/table";
import {Typography} from "@material-ui/core";

function EmployeesManager() {
    const [employees, setEmployees] = useReducer(employeeReducer, []);

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <>
            <Typography variant="h5" gutterBottom>Employees Manager</Typography>
            {
                employees.length ?
                    (<DataTable data={employees}/>)
                    : (<span>Loading...</span>)
            }
        </>
    )

    function getEmployees() {
        axios.get(`${CURRENT_ENV}/employees`)
            .then((res: AxiosResponse<Employee[]>) => {
                res.data.forEach((employee: Employee) => {
                    setEmployees({type: 'AddOne', payload: employee});
                });

            });
    }
}

export default EmployeesManager;
