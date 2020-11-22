import React, {useEffect, useState} from 'react';
import {Employee} from "../../models/Employee.model";
import DataTable from "../../shared/table";
import {LinearProgress} from "@material-ui/core";
import EmployeeForm from "../components/EmployeeForm";
import * as _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import { getEmployees, getIsLoading, getSelectedEmployeeId } from "../../store/employees-store/selectors";
import { DeleteEmployee, LoadEmployees, SelectEmployee } from "../../store/employees-store/actions";

function EmployeesManager() {
    const dispatch = useDispatch();
    const employees = useSelector(getEmployees);
    const isLoading = useSelector(getIsLoading);
    const selectedId = useSelector(getSelectedEmployeeId);

    const [selectedEmployee, setSelectedEmployee] = useState<Employee | undefined>(undefined);
    const addEmployee = () => {
        console.log('should add employee');
        setSelectedEmployee({} as Employee);
    }
    const deleteEmployee = (id: number) => dispatch(DeleteEmployee(id));
    const editEmployee = (id: number) => {
        const employee: Employee = employees.find((emp: Employee) => emp.id === id) as Employee;
        setSelectedEmployee({ ...employee });
        dispatch(SelectEmployee(id));
    }

    useEffect(() => {
        if (!employees.length && !isLoading) {
            dispatch(LoadEmployees())
        }
    }, [dispatch, employees, isLoading]);

    return (
        <>
            {employees.length ?
            <DataTable
                data={employees}
                onAdd={addEmployee}
                onDelete={deleteEmployee}
                onEdit={editEmployee}/> : <LinearProgress/>}
            {
                !_.isUndefined(selectedEmployee) ? <EmployeeForm employee={selectedEmployee} onCreate={console.log} /> : null

            }
        </>

    );
}

export default EmployeesManager;
