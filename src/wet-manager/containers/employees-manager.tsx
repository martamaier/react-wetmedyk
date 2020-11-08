import React, {useEffect, useReducer, useState} from 'react';
import {AxiosResponse} from "axios";
import {CURRENT_ENV} from "../../environment";
import {Employee} from "../../models/Employee.model";
import DataTable from "../../shared/table";
import {LinearProgress} from "@material-ui/core";
import EmployeeForm from "../components/EmployeeForm";
import * as _ from 'lodash';
import axiosInstance from "../../services/interceptor";


function employeeReducer(
    state: Employee[],
    action: { type: string, payload: Employee },
): Employee[] {
    const newState = _.cloneDeep(state);
    switch (action.type) {
        case 'AddOne':
            return [...newState, action.payload];
        case 'Delete':
            return newState
                .filter((employee: Employee) => employee.id !== action.payload.id);
        case 'Update':
            const filteredArray = newState
                .filter((employee: Employee) => employee.id !== action.payload.id)
            return [...filteredArray, action.payload];
        default:
            return newState;
    }
}

function EmployeesManager() {
    const [employees, setEmployees] = useReducer(employeeReducer, []);
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | undefined>(undefined);

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <>
            {employees.length ?
            <DataTable
                data={employees}
                onAdd={addEmployee}
                onDelete={deleteEmployee}
                onEdit={editEmployee}/> : <LinearProgress/>}
            {
                !_.isUndefined(selectedEmployee) ? <EmployeeForm employee={selectedEmployee} onCreate={setEmployees} /> : null

            }
        </>

    );

    function getEmployees() {
        axiosInstance.get(`${CURRENT_ENV}/employees`)
            .then((res: AxiosResponse<Employee[]>) => {
                res.data.forEach((employee: Employee) => {
                    setEmployees({type: 'AddOne', payload: employee});
                });

            });
    }
    function addEmployee() {
        console.log('should add employee');
        setSelectedEmployee({} as Employee);
    }

    function deleteEmployee(id: number) {
        axiosInstance.delete(`${CURRENT_ENV}/employees/${id}`).then((res: AxiosResponse) => {
            setEmployees({ type: 'Delete', payload: employees.find((emp: Employee) => emp.id === id) as Employee })
        })
    }

    function editEmployee(id: number) {
        const employee: Employee = employees.find((emp: Employee) => emp.id === id) as Employee;
        setSelectedEmployee({ ...employee });
    }
}

export default EmployeesManager;
