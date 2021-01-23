import React, {useEffect, useState} from 'react';
import {Employee} from "../../models/Employee.model";
import DataTable from "../../shared/table";
import {LinearProgress} from "@material-ui/core";
import EmployeeForm from "../components/EmployeeForm";
import {useDispatch, useSelector} from "react-redux";
import {getEmployees, getIsLoading, getSelectedEmployee} from "../../store/employees-store/selectors";
import {
    AddEmployee,
    DeleteEmployee,
    LoadEmployees,
    SelectEmployee,
    UpdateEmployee
} from "../../store/employees-store/actions";
import {DataTypes} from "../../models/DataTable.model";
import {FormModes} from "../models/FormModes";

function EmployeesManager() {
    const dispatch = useDispatch();
    const employees = useSelector(getEmployees);
    const isLoading = useSelector(getIsLoading);
    const selectedEmployee = useSelector(getSelectedEmployee);
    const [formMode, setFormMode] = useState<FormModes | null>(null);

    const handleAddEmployee = () => {
        setFormMode(FormModes.Add);
        dispatch(SelectEmployee(null));
    };
    const handleDeleteEmployee = ({ id }: Employee) => dispatch(DeleteEmployee(id));
    const handleEditEmployee = ({ id }: Employee) => {
        dispatch(SelectEmployee(id));
        setFormMode(FormModes.Edit);
    }
    const handleUpdateEmployee = (employee: Employee) => {
        dispatch(formMode === FormModes.Add ? AddEmployee(employee) : UpdateEmployee(employee));
    }

    const columns: string[] = ['photo', 'firstName', 'lastName', 'title'];
    const columnTypes: DataTypes[] = [DataTypes.image, DataTypes.text, DataTypes.text, DataTypes.text];

    useEffect(() => {
        if (!employees.length && !isLoading) {
            dispatch(LoadEmployees())
        }
    }, []);

    return (
        <>
            {!isLoading ?
            <DataTable
                columnTypes={columnTypes}
                columns={columns}
                data={employees}
                onAdd={handleAddEmployee}
                onDelete={handleDeleteEmployee}
                onEdit={handleEditEmployee}/> : <LinearProgress/>}
            {
                (selectedEmployee || formMode) &&
                <EmployeeForm
                    onSubmit={handleUpdateEmployee}
                    employee={selectedEmployee}
                />
            }
        </>
    );
}

export default EmployeesManager;
