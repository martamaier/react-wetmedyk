import {INITIAL_STATE, UsersState} from "./index";
import {UsersActions, UsersActionsTypes} from "./actions";
import {User} from "../../wet-manager/models/user.interface";

export default function usersReducer(
    state: UsersState = INITIAL_STATE,
    action: UsersActionsTypes
) {
    switch (action.type) {
        case UsersActions.LoadUsers: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case UsersActions.AddUsers:
            return {
                ...state,
                isLoading: false,
                users: [...state.users, ...action.payload as User[]],
                errorMessage: null,
            }
        case UsersActions.AddUser:
        case UsersActions.DeleteUser:
            return {
                ...state,
                isSaving: true,
            }
        case UsersActions.AddUserSuccess:
            return {
                ...state,
                isSaving: false,
                users: [...state.users, action.payload],
                errorMessage: null,
            }
        case UsersActions.AddUserError:
            return {
                ...state,
                isSaving: false,
                errorMessage: action.payload,
            }
        case UsersActions.DeleteUserSuccess:
            return {
                ...state,
                isSaving: false,
                users: state.users.filter((user: User) => user.id !== action.payload),
                errorMessage: null,
            }
        default:
            return state;
    }
}
