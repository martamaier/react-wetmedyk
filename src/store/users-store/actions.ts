import {User} from "../../wet-manager/models/user.interface";

export enum UsersActions {
    LoadUsers = '[Users] Load Users',
    AddUsers = '[Users] Add Users',
    AddUser = '[Users] Add User',
    AddUserSuccess = '[Users] Add User Success',
    AddUserError = '[Users] Add User Error',
}

export interface UsersActionsTypes {
    type: UsersActions,
    payload?: User | User[] | number | null | string,
}

export function LoadUsers(): UsersActionsTypes {
    return {
        type: UsersActions.LoadUsers,
    }
}

export function AddUsers(payload: User[]): UsersActionsTypes {
    return {
        payload,
        type: UsersActions.AddUsers,
    }
}

export function AddUser(payload: User): UsersActionsTypes {
    return {
        payload,
        type: UsersActions.AddUser,
    }
}

export function AddUserSuccess(payload: User): UsersActionsTypes {
    return {
        payload,
        type: UsersActions.AddUserSuccess,
    }
}

export function AddUserError(payload: string): UsersActionsTypes {
    return {
        payload,
        type: UsersActions.AddUserError,
    }
}
