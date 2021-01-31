import {CURRENT_ENV} from "../../environment";
import {ActionsObservable, ofType} from "redux-observable";
import {AddFiles, AddFileSuccess, DeleteFileSuccess, FetchError, FileActions, FileActionsTypes} from "./actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";
import axiosInstance from "../../services/interceptor";
import {AxiosResponse} from "axios";
import {of} from "rxjs";

const baseUrl = `${CURRENT_ENV}/images`;

export const loadFiles$ = (actions$: ActionsObservable<FileActionsTypes>) => actions$
    .pipe(
        ofType(FileActions.LoadFiles),
        switchMap(() => {
            return fromPromise(axiosInstance.get(baseUrl))
                .pipe(
                    map((res: AxiosResponse<string[]>) => AddFiles(res.data)),
                );
        }),
    );

export const deleteFile$ = (action$: ActionsObservable<FileActionsTypes>) => action$
    .pipe(
        ofType(FileActions.DeleteFile),
        switchMap((action) => {
            return fromPromise(axiosInstance.delete(`${baseUrl}/${action.payload}`))
                .pipe(
                    map((res: AxiosResponse<string>) => DeleteFileSuccess(res.data)),
                    catchError((err) => of(FetchError(err.message))),
                );
        }),
    );


export const addFile$ = (action$: ActionsObservable<FileActionsTypes>) => action$
    .pipe(
        ofType(FileActions.AddFile),
        switchMap((action) => {
            const formData = new FormData();
            formData.append('file', action.payload as File);
            return fromPromise(axiosInstance.post(`${CURRENT_ENV}/upload`, formData))
                .pipe(
                    map((res: AxiosResponse<any>) => AddFileSuccess(res.data.filename)),
                );
        }),
    );
