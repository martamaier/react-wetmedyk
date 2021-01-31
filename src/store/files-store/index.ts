import {FeatureState} from "../index";

export interface FileState extends FeatureState {
    files: string[];
    selected: string | null;
}

export const INITIAL_STATE: FileState = {
    files: [],
    isLoading: false,
    errorMessage: null,
    selected: null,
    isSaving: false,
};
