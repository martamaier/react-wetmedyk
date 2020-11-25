import {Employee} from "../../models/Employee.model";
import { FeatureState } from "../index";

export interface EmployeeState extends FeatureState {
    employees: Employee[];
}

export const INITIAL_STATE: EmployeeState = {
    employees: [],
    isLoading: false,
    errorMessage: null,
    selected: null,
};

