import { AuthState, INITIAL_STATE } from "./index";
import { AuthActions, AuthActionsTypes } from "./actions";
import { AuthToken } from "../../models/auth-token.interface";

export default function (state: AuthState = INITIAL_STATE, action: AuthActionsTypes) {

    switch (action.type) {
        case AuthActions.LogInSuccess:
            return {
                ...state,
                user: {
                    ...action.payload as AuthToken,
                },
                errorMessage: null,
            }

        case AuthActions.LogOutSuccess:
            return {
                ...state,
                user: {},
            }
        case AuthActions.LogInError:
            return {
                ...state,
                errorMessage: action.payload,
            }

        default:
            return state;

    }
}
