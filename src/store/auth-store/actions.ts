import { AuthToken } from "../../models/AuthToken.model";
import { Login } from "../../models/Login.model";

export enum AuthActions {
    LogIn = '[Auth] LogIn',
    LogInSuccess = '[Auth] LogIn Success',
    LogInError = '[Auth] LogIn Error',
    LogOut = '[Auth] LogOut',
    LogOutSuccess = '[Auth] LogOut Success',
}

export interface AuthActionsTypes {
    type: AuthActions;
    payload: AuthToken | { userName: string, password: string } | string;
}

export function LogInAction(payload: Login): AuthActionsTypes {
    return {
        type: AuthActions.LogIn,
        payload,
    }
}

export function LogInSuccessAction(payload: AuthToken): AuthActionsTypes {
    return {
        type: AuthActions.LogInSuccess,
        payload,
    }
}

export function LogInErrorAction(payload: string): AuthActionsTypes {
    return {
        type: AuthActions.LogInError,
        payload,
    }
}
