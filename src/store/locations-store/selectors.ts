import { RootState } from "../index";
import { Location } from "../../models/Location.model";

export const getLocations = (state: RootState): Location[] => state.location.locations;
export const getIsLoading = (state: RootState): boolean => state.location.isLoading;
