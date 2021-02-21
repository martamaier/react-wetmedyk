import { PrimaryServiceCard } from "../../models/primary-service-card.interface";

export enum ServiceActions {
    LoadServices = '[Services] Load Services',
    AddServices = '[Services] Add Services',
    AddService = '[Services] Add Service',
    AddServiceSuccess = '[Services] Add Service Success',
    DeleteService = '[Services] Delete Service',
    DeleteServiceSuccess = '[Services] Delete Service Success',
    UpdateService = '[Services] Update Service',
    UpdateServiceSuccess = '[Services] Update Service Success',
    SelectService = '[Services] Select Service',
}

export interface ServiceActionsTypes {
    type: ServiceActions;
    payload?: PrimaryServiceCard | PrimaryServiceCard[] | number | null;
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

export function AddService(payload: PrimaryServiceCard): ServiceActionsTypes {
    return {
        payload,
        type: ServiceActions.AddService,
    }
}

export function AddServiceSuccess(payload: PrimaryServiceCard): ServiceActionsTypes {
    return {
        payload,
        type: ServiceActions.AddServiceSuccess,
    }
}

export function UpdateService(payload: PrimaryServiceCard): ServiceActionsTypes {
    return {
        payload,
        type: ServiceActions.UpdateService,
    }
}

export function UpdateServiceSuccess(payload: PrimaryServiceCard): ServiceActionsTypes {
    return {
        payload,
        type: ServiceActions.UpdateServiceSuccess,
    }
}

export function DeleteService(payload: number): ServiceActionsTypes {
    return {
        payload,
        type: ServiceActions.DeleteService,
    }
}

export function DeleteServiceSuccess(payload: number): ServiceActionsTypes {
    return {
        payload,
        type: ServiceActions.DeleteServiceSuccess,
    }
}

export function SelectService(payload: number | null): ServiceActionsTypes {
    return {
        payload,
        type: ServiceActions.SelectService,
    }
}
