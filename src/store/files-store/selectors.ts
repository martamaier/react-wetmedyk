import {RootState} from "../index";

export const getFiles = (state: RootState) => state.file.files;
export const getIsLoading = (state: RootState) => state.file.isLoading;
