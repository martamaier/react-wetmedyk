import {Employee} from "../../models/employee.interface";

export enum EmployeeActions {
    LoadEmployees = '[Employees] Load Employees',
    AddEmployee = '[Employees] Add Employee',
    AddEmployeeSuccess = '[Employees] Add Employee Success',
    AddEmployeesSuccess = '[Employees] Add Employees Success',
    AddEmployees = '[Employees] Add Employees',
    UpdateEmployee = '[Employees] Update Employee',
    UpdateEmployeeSuccess = '[Employees] Update Employee Success',
    DeleteEmployee = '[Employees] Delete Employee',
    DeleteEmployeeSuccess = '[Employees] Delete Employee Success',
    DeleteEmployees = '[Employees] Delete Employees',
    SelectEmployee = '[Employees] Set Selected Employee',
}

export interface EmployeeActionsTypes {
    type: EmployeeActions;
    payload?: Employee | number | Employee[] | null;
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

export function DeleteEmployee(payload: number): EmployeeActionsTypes {
    return {
        payload,
        type: EmployeeActions.DeleteEmployee,
    } as {
        payload: number,
        type: EmployeeActions,
    }
}

export function DeleteEmployeeSuccess(payload: number): EmployeeActionsTypes {
    return {
        payload,
        type: EmployeeActions.DeleteEmployeeSuccess,
    } as {
        payload: number,
        type: EmployeeActions,
    }
}

export function SelectEmployee(payload: number | null): EmployeeActionsTypes {
    return {
        payload,
        type: EmployeeActions.SelectEmployee,
    }
}

export function AddEmployee(payload: Employee): EmployeeActionsTypes {
    return {
        payload,
        type: EmployeeActions.AddEmployee,
    }
}

export function UpdateEmployee(payload: Employee): EmployeeActionsTypes {
    return {
        payload,
        type: EmployeeActions.UpdateEmployee,
    }
}

export function AddEmployeeSuccess(payload: Employee): EmployeeActionsTypes {
    return {
        payload,
        type: EmployeeActions.AddEmployeeSuccess,
    }
}

export function UpdateEmployeeSuccess(payload: Employee): EmployeeActionsTypes {
    return {
        payload,
        type: EmployeeActions.UpdateEmployeeSuccess,
    }
}
