import { combineReducers } from 'redux';
import auth from './auth-store/reducer';
import employees from './employees-store/reducer';
import { combineEpics } from "redux-observable";
import { loginUser$, logoutUser$ } from "./auth-store/effects";
import { deleteEmployee$, loadEmployees$ } from "./employees-store/effects";
import { EmployeeState } from "./employees-store";
import { AuthState } from "./auth-store";

export default combineReducers({
    auth,
    employees,
});

export const rootEpic = combineEpics(
    loginUser$,
    logoutUser$,
    loadEmployees$,
    deleteEmployee$,
    );

export interface RootState {
    employees: EmployeeState;
    auth: AuthState;
}
