import { PrimaryServiceCard } from "../../models/PrimaryServiceCard.model";

export enum ServiceActions {
    LoadServices = '[Services] Load Services',
    AddServices = '[Services] Add Services',
}

export interface ServiceActionsTypes {
    type: ServiceActions;
    payload?: PrimaryServiceCard | PrimaryServiceCard[] | number;
}

export function LoadServices(): ServiceActionsTypes {
    return {
        type: ServiceActions.LoadServices,
    }
}

export function AddServices(payload: PrimaryServiceCard[]): ServiceActionsTypes {
    return {
        payload,
        type: ServiceActions.AddServices,
    }
}
