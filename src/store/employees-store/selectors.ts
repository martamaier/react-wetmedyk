import { RootState } from "../index";
import { Employee } from "../../models/Employee.model";

export const getEmployees = (state: RootState): Employee[] => state.employees.employees;
export const getIsLoading = (state: RootState): boolean => state.employees.isLoading;
export const getSelectedEmployeeId = (state: RootState): number | null => state.employees.selected;
