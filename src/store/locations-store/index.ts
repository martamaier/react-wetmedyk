import { Location } from "../../models/Location.model";
import { FeatureState } from "../index";

export interface LocationState extends FeatureState {
    locations: Location[];
}

export const INITIAL_STATE: LocationState = {
    locations: [],
    isLoading: false,
    errorMessage: null,
    selected: null,
}
