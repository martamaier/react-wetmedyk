import { Location } from "../../models/Location.model";

export enum LocationActions {
    LoadLocations = '[Locations] Load Locations',
    AddLocations = '[Locations] Add Locations',
    AddLocation = '[Locations] Add Location',
}

export interface LocationActionsTypes {
    type: LocationActions,
    payload?: Location | Location[] | number,
}

export function LoadLocations(): LocationActionsTypes {
    return {
        type: LocationActions.LoadLocations,
    }
}

export function AddLocations(payload: Location[]): LocationActionsTypes {
    return {
        payload,
        type: LocationActions.AddLocations,
    } as {
        payload: Location[],
        type: LocationActions,
    }
}