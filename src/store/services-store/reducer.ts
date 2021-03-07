import {INITIAL_STATE, ServiceState} from "./index";
import {ServiceActions, ServiceActionsTypes} from "./actions";
import * as _ from 'lodash';
import {PrimaryServiceCard} from "../../models/primary-service-card.interface";

export default function servicesReducer(
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
                errorMessage: null,
            }
        case ServiceActions.AddService:
        case ServiceActions.UpdateService:
        case ServiceActions.DeleteService:
            return {
                ...newState,
                isSaving: true,
            }
        case ServiceActions.AddServiceSuccess:
            return {
                ...newState,
                isSaving: false,
                services: [...newState.services, action.payload],
            }
        case ServiceActions.UpdateServiceSuccess:
            const payload = action.payload as PrimaryServiceCard;
            const newServices = [...newState.services.filter((service: PrimaryServiceCard) => service.id !== payload.id), payload];
            return {
                ...newState,
                isSaving: false,
                services: _.sortBy(newServices, 'id'),
            }
        case ServiceActions.DeleteServiceSuccess:
            const id = (action.payload as PrimaryServiceCard).id;
            const services = newState.services.filter((service: PrimaryServiceCard) => service.id !== id);
            return {
                ...newState,
                services,
                isSaving: false,
            }
        case ServiceActions.SelectService:
            return {
                ...newState,
                selected: action.payload,
            }
        default:
            return newState;
    }
}
