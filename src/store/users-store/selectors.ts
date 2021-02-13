import {RootState} from "../index";
import {User} from "../../wet-manager/models/user.interface";

export const getUsers = (state: RootState): User[] => state.user.users;
export const getIsLoading = (state: RootState) => state.user.isLoading;
export const getUserError = (state: RootState): string | null => state.user.errorMessage;
