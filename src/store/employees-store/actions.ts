import {Employee} from "../../models/Employee.model";

export enum EmployeeActions {
    LoadEmployees = '[Employees] Load Employees',
    AddEmployee = '[Employees] Add Employee',
    AddEmployeesSuccess = '[Employees] Add Employees Success',
    AddEmployees = '[Employees] Add Employees',
    UpdateEmployee = '[Employees] Update Employee',
    DeleteEmployee = '[Employees] Delete Employee',
    DeleteEmployees = '[Employees] Delete Employees',
}

export interface EmployeeActionsTypes {
    type: EmployeeActions;
    payload?: Employee | number | Employee[];
}

export function LoadEmployees(): EmployeeActionsTypes {
    return {
        type: EmployeeActions.LoadEmployees,
    }
}

export function AddEmployees(payload: Employee[]): EmployeeActionsTypes {
    return {
        payload,
        type: EmployeeActions.AddEmployees,
    } as {
        payload: Employee[];
        type: EmployeeActions,
    }
}

export function AddEmployeesSuccess(): EmployeeActionsTypes {
    return {
        type: EmployeeActions.AddEmployeesSuccess,
    }
}
