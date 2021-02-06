import {Employee} from "../../models/employee.interface";
import { FeatureState } from "../index";

export interface EmployeeState extends FeatureState {
    employees: Employee[];
    selected: number | null;
}

export const INITIAL_STATE: EmployeeState = {
    employees: [],
    isLoading: false,
    errorMessage: null,
    selected: null,
    isSaving: false,
};

