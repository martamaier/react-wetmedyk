import { combineReducers } from 'redux';
import auth from './auth-store/reducer';
import employees from './employees-store/reducer';
import { combineEpics } from "redux-observable";
import { loginUser$, logoutUser$ } from "./auth-store/effects";
import { deleteEmployee$, loadEmployees$ } from "./employees-store/effects";
import { EmployeeState } from "./employees-store";
import { AuthState } from "./auth-store";
import { LocationState } from "./locations-store";
import location from './locations-store/reducer';
import { loadLocations$ } from "./locations-store/effects";

export default combineReducers({
    auth,
    employees,
    location,
});

export const rootEpic = combineEpics(
    loginUser$,
    logoutUser$,
    loadEmployees$,
    deleteEmployee$,
    loadLocations$,
    );

export interface RootState {
    employees: EmployeeState;
    auth: AuthState;
    location: LocationState;
}
