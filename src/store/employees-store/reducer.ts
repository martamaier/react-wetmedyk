import { Employee } from "../../models/employee.interface";
import * as _ from "lodash";
import { EmployeeState, INITIAL_STATE } from "./index";
import { EmployeeActions, EmployeeActionsTypes } from "./actions";

export default function employeesReducer(
    state: EmployeeState = INITIAL_STATE,
    action: EmployeeActionsTypes,
) {
    const newState = _.cloneDeep(state);
    switch (action.type) {
        case EmployeeActions.LoadEmployees:
            return {
                ...newState,
                isLoading: true,
            }
        case EmployeeActions.AddEmployees:
         return {
             ...newState,
             employees: [
                 ...newState.employees,
                 ...(action.payload as Employee[]),
             ],
             isLoading: false,
             errorMessage: null,
         }
        case EmployeeActions.UpdateEmployee:
        case EmployeeActions.AddEmployee:
            return {
                ...newState,
                isSaving: true,
            }
        case EmployeeActions.AddEmployeeSuccess:
        case EmployeeActions.UpdateEmployeeSuccess:
            const newEmployee = action.payload as Employee;
            const employees = [...newState.employees.filter((employee: Employee) => employee.id !== newEmployee.id), newEmployee];
            return {
                ...newState,
                employees,
                isSaving: false,
                errorMessage: null,
            }
        case EmployeeActions.SelectEmployee:
            return {
                ...newState,
                selected: action.payload,
            }
        case EmployeeActions.DeleteEmployee:
            return {
                ...newState,
                employees: newState.employees.filter(employee => employee.id !== action.payload)
            }
        case EmployeeActions.EmployeeError:
            return {
                ...newState,
                isLoading: false,
                isSaving: false,
                errorMessage: action.payload,
            }
        default:
            return state;
    }
}
