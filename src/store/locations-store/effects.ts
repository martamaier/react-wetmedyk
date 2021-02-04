import { ActionsObservable, ofType } from "redux-observable";
import {
    AddLocations,
    AddLocationSuccess,
    DeleteLocationSuccess,
    LocationActions,
    LocationActionsTypes, UpdateLocationSuccess
} from "./actions";
import { switchMap, map } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";
import axiosInstance from "../../services/interceptor";
import { CURRENT_ENV } from "../../environment";
import { AxiosResponse } from "axios";
import { Location } from "../../models/Location.model";

const baseUrl = `${CURRENT_ENV}/locations`;

export const loadLocations$ = (action$: ActionsObservable<LocationActionsTypes>) => action$
    .pipe(
        ofType(LocationActions.LoadLocations),
        switchMap((action) => {
            return fromPromise(axiosInstance.get(baseUrl))
                .pipe(
                    map((res: AxiosResponse<Location[]>) => AddLocations(res.data)),
                    )
        }),
    );

export const deleteLocation$ = (action$: ActionsObservable<LocationActionsTypes>) => action$
    .pipe(
        ofType(LocationActions.DeleteLocation),
        switchMap((action) => {
            return fromPromise(axiosInstance.delete(`${baseUrl}/${action.payload}`))
                .pipe(
                    map(() => DeleteLocationSuccess(action.payload as number)),
                );
        }),
    );

export const addLocation$ = (action$: ActionsObservable<LocationActionsTypes>) => action$
    .pipe(
        ofType(LocationActions.AddLocation),
        switchMap((action) => {
            return fromPromise(axiosInstance.post(baseUrl, action.payload))
                .pipe(
                    map((res: AxiosResponse<Location>) => AddLocationSuccess(res.data)),
                );
        }),
    );

export const updateLocation$ = (action$: ActionsObservable<LocationActionsTypes>) => action$
    .pipe(
        ofType(LocationActions.UpdateLocation),
        switchMap((action) => {
            const id = (action.payload as Location).id;
            return fromPromise(axiosInstance.put(`${baseUrl}/${id}`, action.payload))
                .pipe(
                    map((res: AxiosResponse<Location>) => UpdateLocationSuccess(res.data)),
                );
        }),
    );
