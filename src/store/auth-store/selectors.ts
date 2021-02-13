import {RootState} from "../index";

export const getUserName = (state: RootState): string => state.auth.user.userName || '';
export const getAuthError = (state: RootState): string | null => state.auth.errorMessage;
