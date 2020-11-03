import { AuthToken } from "../../models/AuthToken.model";

export interface AuthState {
    user: AuthToken | Partial<AuthToken>;
    errorMessage: string;
}

export const INITIAL_STATE: AuthState = {
    user: {},
    errorMessage: '',
};
