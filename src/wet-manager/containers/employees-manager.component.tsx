import React, {useState} from 'react';
import {Employee} from "../../models/employee.interface";
import DataTable from "../../shared/table.component";
import EmployeeForm from "../forms/employee-form.component";
import {useDispatch, useSelector} from "react-redux";
import {getEmployees, getIsLoading, getSelectedEmployee} from "../../store/employees-store/selectors";
import {
    AddEmployee,
    DeleteEmployee,
    LoadEmployees,
    SelectEmployee,
    UpdateEmployee
} from "../../store/employees-store/actions";
import {DataTypes} from "../../models/data-table.interface";
import {FormModes} from "../models/form-modes.types";
import withDataFetch from "../shared/hoc/with-data-fetch.component";
import {DataFetchProps} from "../models/data-fetch-props.interface";
import {DataFetchInterface} from "../models/data-fetch.interface";

function EmployeesManager({ data }: DataFetchProps<Employee>) {
    const dispatch = useDispatch();
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

    return (
        <>
            <p>Employees Manager</p>
            <DataTable
                columnTypes={columnTypes}
                columns={columns}
                data={data || []}
                onAdd={handleAddEmployee}
                onDelete={handleDeleteEmployee}
                onEdit={handleEditEmployee}/>
            {
                (selectedEmployee || formMode) &&
                <EmployeeForm
                    onSubmit={handleUpdateEmployee}
                    data={selectedEmployee}
                />
            }
        </>
    );
}

const options: DataFetchInterface<Employee> = {
    dataLoader: LoadEmployees,
    loadingSelector: getIsLoading,
    dataSelector: getEmployees,
};

export default withDataFetch(EmployeesManager, options);
