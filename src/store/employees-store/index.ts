import {Employee} from "../../models/Employee.model";

export interface EmployeeState {
    employees: Employee[],
    isLoading: boolean;
    errorMessage: string | null,
}

export const INITIAL_STATE: EmployeeState = {
    employees: [],
    isLoading: false,
    errorMessage: null,
};

