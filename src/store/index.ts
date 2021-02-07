import { combineReducers } from 'redux';
import auth from './auth-store/reducer';
import employee from './employees-store/reducer';
import { combineEpics } from "redux-observable";
import { loginUser$, logoutUser$ } from "./auth-store/effects";
import {addEmployee$, deleteEmployee$, loadEmployees$, updateEmployee$} from "./employees-store/effects";
import { EmployeeState } from "./employees-store";
import { AuthState } from "./auth-store";
import { LocationState } from "./locations-store";
import location from './locations-store/reducer';
import {addLocation$, deleteLocation$, loadLocations$, updateLocation$} from "./locations-store/effects";
import post from './posts-store/reducer';
import { PostState } from "./posts-store";
import {addPost$, deletePost$, loadPosts$, updatePost$} from "./posts-store/effects";
import { ServiceState } from "./services-store";
import service from './services-store/reducer';
import { loadServices$ } from "./services-store/effects";
import modal from './modal-store/reducer';
import file from './files-store/reducer';
import { ModalState } from "./modal-store";
import {FileState} from "./files-store";
import {addFile$, deleteFile$, loadFiles$} from "./files-store/effects";
import user from './users-store/reducer';
import {addUser$, deleteUser$, loadUsers$} from "./users-store/effects";
import {UsersState} from "./users-store";

export default combineReducers({
    auth,
    employee,
    location,
    post,
    service,
    modal,
    file,
    user,
});

export const rootEpic = combineEpics(
    loginUser$,
    logoutUser$,
    loadEmployees$,
    deleteEmployee$,
    loadLocations$,
    deleteLocation$,
    updateLocation$,
    addLocation$,
    loadPosts$,
    updatePost$,
    loadServices$,
    addPost$,
    deletePost$,
    addEmployee$,
    updateEmployee$,
    loadFiles$,
    deleteFile$,
    addFile$,
    loadUsers$,
    addUser$,
    deleteUser$,
    );

export interface RootState {
    employee: EmployeeState;
    auth: AuthState;
    location: LocationState;
    post: PostState;
    service: ServiceState;
    modal: ModalState<any>;
    file: FileState;
    user: UsersState;
}

export interface FeatureState {
    isLoading: boolean;
    isSaving: boolean;
    errorMessage: string | null;
    selected: number | null | string;
}
