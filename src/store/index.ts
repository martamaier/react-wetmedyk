import { combineReducers } from 'redux';
import auth from './auth-store/reducer';
import { combineEpics } from "redux-observable";
import { loginUser$ } from "./auth-store/effects";

export default combineReducers({
    auth,
});

export const rootEpic = combineEpics(loginUser$);

