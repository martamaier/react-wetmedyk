import { RootState } from "../index";
import { Employee } from "../../models/Employee.model";

export const getEmployees = (state: RootState): Employee[] => state.employee.employees;
export const getIsLoading = (state: RootState): boolean => state.employee.isLoading;
export const getSelectedEmployeeId = (state: RootState): number | null => state.employee.selected;
export const getSelectedEmployee = (state: RootState): Employee | null =>
    state.employee.employees.find((employee: Employee) => employee.id === state.employee.selected) || null;
