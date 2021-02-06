import { Location } from "../../models/location.interface";

export enum LocationActions {
    LoadLocations = '[Locations] Load Locations',
    AddLocations = '[Locations] Add Locations',
    AddLocation = '[Locations] Add Location',
    AddLocationSuccess = '[Locations] Add Location Success',
    UpdateLocation = '[Locations] Update Location',
    UpdateLocationSuccess = '[Locations] Update Location Success',
    DeleteLocation = '[Locations] Delete Location',
    DeleteLocationSuccess = '[Locations] Delete Location Success',
    SelectLocation = '[Locations] Select Locations',
}

export interface LocationActionsTypes {
    type: LocationActions,
    payload?: Location | Location[] | number | null,
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

export function SelectLocation(payload: number | null): LocationActionsTypes {
    return {
        payload,
        type: LocationActions.SelectLocation,
    }
}

export function DeleteLocation(payload: number): LocationActionsTypes {
    return {
        payload,
        type: LocationActions.DeleteLocation,
    }
}

export function DeleteLocationSuccess(payload: number): LocationActionsTypes {
    return {
        payload,
        type: LocationActions.DeleteLocationSuccess,
    }
}

export function AddLocation(payload: Location): LocationActionsTypes {
    return {
        payload,
        type: LocationActions.AddLocation,
    }
}

export function AddLocationSuccess(payload: Location): LocationActionsTypes {
    return {
        payload,
        type: LocationActions.AddLocationSuccess,
    }
}

export function UpdateLocation(payload: Location): LocationActionsTypes {
    return {
        payload,
        type: LocationActions.UpdateLocation,
    }
}

export function UpdateLocationSuccess(payload: Location): LocationActionsTypes {
    return {
        payload,
        type: LocationActions.UpdateLocationSuccess,
    }
}
