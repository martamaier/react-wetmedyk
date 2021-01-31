import {FileState, INITIAL_STATE} from "./index";
import {FileActions, FileActionsTypes} from "./actions";

export default function (
    state: FileState = INITIAL_STATE,
    action: FileActionsTypes,
) {
    switch (action.type) {
        case FileActions.LoadFiles:
            return {
                ...state,
                isLoading: true,
            }
        case FileActions.AddFiles:
            return {
                ...state,
                isLoading: false,
                files: [...state.files, ...action.payload as string[]],
            }
        case FileActions.DeleteFile:
        case FileActions.AddFile:
            return {
                ...state,
                isSaving: true,
            }
        case FileActions.DeleteFileSuccess:
            return {
                ...state,
                isSaving: false,
                files: state.files.filter((file: string) => file !== action.payload),
            }
        case FileActions.AddFileSuccess:
            return {
                ...state,
                isSaving: false,
                files: [...state.files, action.payload],
            }
        case FileActions.FetchError:
            return {
                ...state,
                isSaving: false,
                isLoading: false,
                errorMessage: action.payload,
            }
        default:
            return state;
    }
}
