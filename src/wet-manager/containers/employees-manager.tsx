import React, {useEffect, useReducer, useState} from 'react';
import {employeeReducer} from "../../store/employees-store/reducer";
import {AxiosResponse} from "axios";
import {CURRENT_ENV} from "../../environment";
import {Employee} from "../../models/Employee.model";
import DataTable from "../../shared/table";
import {LinearProgress} from "@material-ui/core";
import EmployeeForm from "../components/EmployeeForm";
import * as _ from 'lodash';
import axiosInstance from "../../services/interceptor";

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
                !_.isUndefined(selectedEmployee) ? <EmployeeForm employee={selectedEmployee} /> : null

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
        console.log('should delete employee', id)
    }
    function editEmployee(id: number) {
        console.log('should edit employee', id)
        // axios.get(`${CURRENT_ENV}/employees/${id}`).then((res:AxiosResponse<Employee>) => {
        //     console.log(res.data)
        // })
        const employee: Employee = employees.find((emp: Employee) => emp.id === id) as Employee;
        console.log(employee);
        setSelectedEmployee({ ...employee });
    }
}

export default EmployeesManager;
