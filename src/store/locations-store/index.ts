import { Location } from "../../models/location.interface";
import { FeatureState } from "../index";

export interface LocationState extends FeatureState {
    locations: Location[];
    selected: number | null;
}

export const INITIAL_STATE: LocationState = {
    locations: [],
    isLoading: false,
    errorMessage: null,
    selected: null,
    isSaving: false,
}
