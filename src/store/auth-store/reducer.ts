import { AuthState, INITIAL_STATE } from "./index";
import { AuthActions, AuthActionsTypes } from "./actions";
import { AuthToken } from "../../models/AuthToken.model";

export default function (state: AuthState = INITIAL_STATE, action: AuthActionsTypes) {

    switch (action.type) {
        case AuthActions.LogInSuccess:
            return {
                ...state,
                user: {
                    ...action.payload as AuthToken,
                },
                errorMessage: '',
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
