import { AuthToken } from "../../models/auth-token.interface";

export interface AuthState {
    user: AuthToken | Partial<AuthToken>;
    errorMessage: string;
}

export const INITIAL_STATE: AuthState = {
    user: {},
    errorMessage: '',
};
