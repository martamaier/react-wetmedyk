import {RootState} from "../index";

export const getUserName = (state: RootState): string => state.auth.user.userName || '';
