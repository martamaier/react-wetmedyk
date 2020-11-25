import { INITIAL_STATE, ModalState } from "./index";
import { ModalActions, ModalActionsTypes } from "./actions";

export default function<T> (
    state: ModalState<T> = INITIAL_STATE,
    action: ModalActionsTypes<T>,
) {
    switch (action.type) {
        case ModalActions.OpenModal:
            return {
                ...state,
                ...action.payload,
            }
        case ModalActions.CloseModal:
            return {
                ...state,
                ...INITIAL_STATE,
            }
        default:
            return state;
    }
}
