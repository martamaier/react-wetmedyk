export enum FileActions {
    LoadFiles = '[File] Load Files',
    AddFiles = '[File] Add Files',
    AddFilesSuccess = '[File] Add Files Success',
    AddFile = '[File] Add File',
    AddFileSuccess = '[File] Add File Success',
    DeleteFile = '[File] Delete File',
    DeleteFileSuccess = '[File] Delete File Success',
    FetchError = '[File] Fetch Error',
}

export interface FileActionsTypes {
    type: FileActions;
    payload?: string | null | string[] | File;
}

export function LoadFiles(): FileActionsTypes {
    return {
        type: FileActions.LoadFiles,
    }
}

export function AddFiles(payload: string[]): FileActionsTypes {
    return {
        payload,
        type: FileActions.AddFiles,
    }
}

export function AddFilesSuccess(payload: string[]): FileActionsTypes {
    return {
        payload,
        type: FileActions.AddFilesSuccess,
    }
}

export function DeleteFile(payload: string): FileActionsTypes {
    return {
        payload,
        type: FileActions.DeleteFile,
    }
}

export function DeleteFileSuccess(payload: string): FileActionsTypes {
    return {
        payload,
        type: FileActions.DeleteFileSuccess,
    }
}


export function FetchError(payload: string): FileActionsTypes {
    return {
        payload,
        type: FileActions.FetchError,
    }
}

export function AddFile(payload: File): FileActionsTypes {
    return {
        payload,
        type: FileActions.AddFile,
    }
}

export function AddFileSuccess(payload: string): FileActionsTypes {
    return {
        payload,
        type: FileActions.AddFileSuccess,
    }
}
