import React, {useEffect, useState} from 'react';
import {Employee} from "../../models/Employee.model";
import DataTable from "../../shared/table";
import {LinearProgress} from "@material-ui/core";
import EmployeeForm from "../components/EmployeeForm";
import * as _ from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import {getEmployees, getIsLoading, getSelectedEmployeeId} from "../../store/employees-store/selectors";
import {DeleteEmployee, LoadEmployees, SelectEmployee} from "../../store/employees-store/actions";
import {DataTypes} from "../../models/DataTable.model";

function EmployeesManager() {
    const dispatch = useDispatch();
    const employees = useSelector(getEmployees);
    const isLoading = useSelector(getIsLoading);
    const selectedId = useSelector(getSelectedEmployeeId);
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | undefined>(undefined);
    const addEmployee = () => setSelectedEmployee({} as Employee);
    const deleteEmployee = ({ id }: Employee) => dispatch(DeleteEmployee(id));
    const editEmployee = ({ id }: Employee) => {
        const employee: Employee = employees.find((emp: Employee) => emp.id === id) as Employee;
        setSelectedEmployee({ ...employee });
        dispatch(SelectEmployee(id));
    }
    const columns: string[] = ['photo', 'firstName', 'lastName', 'title'];
    const columnTypes: DataTypes[] = [DataTypes.image, DataTypes.text, DataTypes.text, DataTypes.text];

    useEffect(() => {
        if (!employees.length && !isLoading) {
            dispatch(LoadEmployees())
        }
    }, [dispatch, employees, isLoading]);

    return (
        <>
            {employees.length ?
            <DataTable
                columnTypes={columnTypes}
                columns={columns}
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
