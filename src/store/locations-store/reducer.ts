import {INITIAL_STATE, LocationState} from "./index";
import {LocationActions, LocationActionsTypes} from "./actions";
import * as _ from "lodash";
import {Location} from "../../models/location.interface";

export default function (
    state: LocationState = INITIAL_STATE,
    action: LocationActionsTypes,
) {
    const newState = _.cloneDeep(state);

    switch (action.type) {
        case LocationActions.LoadLocations:
            return {
                ...newState,
                isLoading: true,
            }
        case LocationActions.AddLocations:
            return {
                ...newState,
                locations: [...newState.locations, ...action.payload as Location[]],
                isLoading: false,
                errorMessage: null,
            }
        case LocationActions.SelectLocation:
            return {
                ...state,
                selected: action.payload,
            }
        case LocationActions.DeleteLocation:
            return {
                ...newState,
                isSaving: true,
            }
        case LocationActions.DeleteLocationSuccess:
            return {
                ...newState,
                isSaving: false,
                locations: newState.locations.filter((location: Location) => location.id !== action.payload),
                errorMessage: null,
            }
        case LocationActions.AddLocation:
        case LocationActions.UpdateLocation:
            return {
                ...newState,
                isSaving: true,
            }
        case LocationActions.AddLocationSuccess:
            return  {
                ...newState,
                isSaving: false,
                locations: [...newState.locations, action.payload],
                errorMessage: null,
            }
        case LocationActions.UpdateLocationSuccess:
            const newLocation = (action.payload as Location);
            return {
                ...newState,
                isSaving: false,
                locations: _.sortBy([...newState.locations.filter((location: Location) => location.id !== newLocation.id), newLocation], 'id'),
                errorMessage: null,
            }
        default:
            return newState;
    }
}
