import {RootState} from "../index";

export const getFiles = (state: RootState) => state.file.files;
export const getIsLoading = (state: RootState): boolean => state.file.isLoading;
export const getFileError = (state: RootState): string | null => state.file.errorMessage;
