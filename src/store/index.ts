import { combineReducers } from 'redux';
import auth from './auth-store/reducer';
import employees from './employees-store/reducer';
import { combineEpics } from "redux-observable";
import { loginUser$, logoutUser$ } from "./auth-store/effects";
import {loadEmployees$} from "./employees-store/effects";

export default combineReducers({
    auth,
    employees,
});

export const rootEpic = combineEpics(
    loginUser$,
    logoutUser$,
    loadEmployees$,
    );

