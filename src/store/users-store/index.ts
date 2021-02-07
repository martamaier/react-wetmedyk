import {FeatureState} from "../index";
import {User} from "../../wet-manager/models/user.interface";

export interface UsersState extends FeatureState {
    users: User[];
}

export const INITIAL_STATE: UsersState = {
    users: [],
    isSaving: false,
    isLoading: false,
    errorMessage: null,
    selected: null,
}
