import { RootState } from "../index";
import { Location } from "../../models/Location.model";
import {createSelector} from "reselect";

export const getLocations = (state: RootState): Location[] => state.location.locations;
export const getIsLoading = (state: RootState): boolean => state.location.isLoading;
export const getSelectedLocationId = (state: RootState): number | null => state.location.selected;
export const getSelectedLocation = createSelector(
    [getSelectedLocationId, getLocations],
    (id: number | null, locations: Location[]): Location | null =>
        !id ? null : locations.find((location: Location) => location.id === id) || null
);
