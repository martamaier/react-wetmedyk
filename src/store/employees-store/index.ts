import {Employee} from "../../models/Employee.model";
import { FeatureState } from "../index";

export interface EmployeeState extends FeatureState {
    employees: Employee[];
    selected: number | null;
    isSaving: boolean;
}

export const INITIAL_STATE: EmployeeState = {
    employees: [],
    isLoading: false,
    errorMessage: null,
    selected: null,
    isSaving: false,
};

