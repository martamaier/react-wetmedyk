import { PrimaryServiceCard } from "../../models/primary-service-card.interface";
import { FeatureState } from "../index";

export interface ServiceState extends FeatureState {
    services: PrimaryServiceCard[];
}

export const INITIAL_STATE: ServiceState = {
    services: [],
    isLoading: false,
    errorMessage: null,
    selected: null,
    isSaving: false,
}
