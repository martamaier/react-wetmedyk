import {INITIAL_STATE, LocationState} from "./index";
import {LocationActions, LocationActionsTypes} from "./actions";
import * as _ from "lodash";
import {Location} from "../../models/Location.model";

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
            }
        case LocationActions.SelectLocation:
            return {
                ...newState,
                selected: action.payload,
            }
        default:
            return newState;
    }
}
