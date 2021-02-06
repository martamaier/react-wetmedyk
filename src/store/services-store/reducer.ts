import { INITIAL_STATE, ServiceState } from "./index";
import { ServiceActions, ServiceActionsTypes } from "./actions";
import * as _ from 'lodash';
import { PrimaryServiceCard } from "../../models/primary-service-card.interface";

export default function(
    state: ServiceState = INITIAL_STATE,
    action: ServiceActionsTypes,
) {
    const newState = _.cloneDeep(state);
    switch (action.type) {
        case ServiceActions.LoadServices:
            return {
                ...newState,
                isLoading: true,
            }
        case ServiceActions.AddServices:
            return {
                ...newState,
                services: [...newState.services, ...action.payload as PrimaryServiceCard[]],
                isLoading: false,
            }
        default:
            return newState;
    }
}
