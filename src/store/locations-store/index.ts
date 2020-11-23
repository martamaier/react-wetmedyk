import { Location } from "../../models/Location.model";

export interface LocationState {
    locations: Location[];
    isLoading: boolean;
    errorMessage: string | null;
    selected: number | null;
}

export const INITIAL_STATE: LocationState = {
    locations: [],
    isLoading: false,
    errorMessage: null,
    selected: null,
}
