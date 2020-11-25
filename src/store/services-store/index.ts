import { PrimaryServiceCard } from "../../models/PrimaryServiceCard.model";
import { FeatureState } from "../index";

export interface ServiceState extends FeatureState {
    services: PrimaryServiceCard[];
}

export const INITIAL_STATE: ServiceState = {
    services: [],
    isLoading: false,
    errorMessage: null,
    selected: null,
}
