import {RootState} from "../index";

export const getPrimaryServices = (state: RootState) => state.service.services;
export const getIsLoading = (state: RootState) => state.service.isLoading;
