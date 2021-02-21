import {RootState} from "../index";
import {PrimaryServiceCard} from "../../models/primary-service-card.interface";

export const getPrimaryServices = (state: RootState) => state.service.services;
export const getIsLoading = (state: RootState) => state.service.isLoading;
export const getServiceError = (state: RootState): string | null => state.service.errorMessage;
export const getSelectedService = (state: RootState): PrimaryServiceCard | null => state.service.services
    .find((service: PrimaryServiceCard) => service.id === state.service.selected) || null;
