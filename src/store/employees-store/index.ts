import {Employee} from "../../models/Employee.model";

export interface EmployeeState {
    employees: Employee[];
    isLoading: boolean;
    errorMessage: string | null;
    selected: number | null;
}

export const INITIAL_STATE: EmployeeState = {
    employees: [],
    isLoading: false,
    errorMessage: null,
    selected: null,
};

