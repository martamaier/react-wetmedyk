import {Employee} from "../../models/Employee.model";
import * as _ from "lodash";
import {EmployeeState, INITIAL_STATE} from "./index";
import {EmployeeActions, EmployeeActionsTypes} from "./actions";

export default function(
    state: EmployeeState = INITIAL_STATE,
    action: EmployeeActionsTypes,
) {
    console.log(action)
    const newState = _.cloneDeep(state);
    switch (action.type) {
        case EmployeeActions.LoadEmployees:
            return {
                ...newState,
                isLoading: true,
            }
        case EmployeeActions.AddEmployees:
            console.log(action.payload);
         return {
             ...newState,
             employees: [
                 ...newState.employees,
                 ...(action.payload as Employee[]),
             ],
             isLoading: false,
         }
        case EmployeeActions.AddEmployee:
            return {
                ...newState,
                employees: [
                    ...newState.employees,
                    action.payload,
                ]
            }
        default:
            return state;
    }
}
