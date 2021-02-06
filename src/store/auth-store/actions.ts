import { AuthToken } from "../../models/auth-token.interface";
import { Login } from "../../models/login.interface";

export enum AuthActions {
    LogIn = '[Auth] LogIn',
    LogInSuccess = '[Auth] LogIn Success',
    LogInError = '[Auth] LogIn Error',
    LogOut = '[Auth] LogOut',
    LogOutSuccess = '[Auth] LogOut Success',
}

export interface AuthActionsTypes {
    type: AuthActions;
    payload?: AuthToken | { userName: string, password: string } | string;
}

export function LogInAction(payload: Login): AuthActionsTypes {
    return {
        payload,
        type: AuthActions.LogIn,
    }
}

export function LogInSuccessAction(payload: AuthToken): AuthActionsTypes {
    return {
        payload,
        type: AuthActions.LogInSuccess,
    }
}

export function LogInErrorAction(payload: string): AuthActionsTypes {
    return {
        payload,
        type: AuthActions.LogInError,
    }
}

export function LogOutAction(): AuthActionsTypes {
    return {
        type: AuthActions.LogOut,
    }
}

export function LogOutSuccessAction(): AuthActionsTypes {
    return {
        type: AuthActions.LogOutSuccess,
    }
}
