import { ModalState } from "./index";

export enum ModalActions {
    OpenModal = '[Modal] Open Modal',
    CloseModal = '[Modal] Close Modal',
}

export interface ModalActionsTypes<T> {
    type: ModalActions;
    payload?: ModalState<T>;
}

export function OpenModal<T>(payload: ModalState<T>): ModalActionsTypes<T> {
    return {
        payload,
        type: ModalActions.OpenModal,
    }
}

export function CloseModal(): ModalActionsTypes<null> {
    return {
        type: ModalActions.CloseModal,
    }
}
