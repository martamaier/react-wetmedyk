import {Employee} from "../../models/Employee.model";
import * as _ from "lodash";

export function employeeReducer(
    state: Employee[],
    action: { type: string, payload: Employee },
): Employee[] {
    const newState = _.cloneDeep(state);
    switch (action.type) {
        case 'AddOne':
            return [...newState, action.payload];
        case 'Delete':
            return newState
                .filter((employee: Employee) => employee.id !== action.payload.id);
        case 'Update':
            const filteredArray = newState
                .filter((employee: Employee) => employee.id !== action.payload.id)
            return [...filteredArray, action.payload];
        default:
            return newState;
    }
}
