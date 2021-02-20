import { ActionsObservable, ofType } from "redux-observable";
import {
    AddServices,
    AddServiceSuccess,
    DeleteServiceSuccess,
    ServiceActions,
    ServiceActionsTypes,
    UpdateServiceSuccess
} from "./actions";
import { switchMap, map } from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";
import { AxiosResponse } from "axios";
import axios from 'axios';
import { PrimaryServiceCard } from "../../models/primary-service-card.interface";
import {CURRENT_ENV} from "../../environment";

const baseUrl = `${CURRENT_ENV}/services`;

export const loadServices$ = (action$: ActionsObservable<ServiceActionsTypes>) => action$
    .pipe(
        ofType(ServiceActions.LoadServices),
        switchMap(() => {
            return fromPromise(axios.get(baseUrl))
                .pipe(
                    map((res: AxiosResponse<PrimaryServiceCard[]>) => AddServices(res.data)),
                )
        }),
    );

export const addService$ = (action$: ActionsObservable<ServiceActionsTypes>) => action$
    .pipe(
        ofType(ServiceActions.AddService),
        switchMap((action) => {
            return fromPromise(axios.post(baseUrl, action.payload))
                .pipe(
                    map((res: AxiosResponse<PrimaryServiceCard>) => AddServiceSuccess(res.data)),
                );
        }),
    );

export const updateService$ = (action$: ActionsObservable<ServiceActionsTypes>) => action$
    .pipe(
        ofType(ServiceActions.UpdateService),
        switchMap((action) => {
            const id = (action.payload as PrimaryServiceCard).id;
            return fromPromise(axios.put(`${baseUrl}/${id}`))
                .pipe(
                    map((res: AxiosResponse<PrimaryServiceCard>) => UpdateServiceSuccess(res.data)),
                );
        }),
    );

export const deleteService$ = (action$: ActionsObservable<ServiceActionsTypes>) => action$
    .pipe(
        ofType(ServiceActions.DeleteService),
        switchMap((action) => {
            return fromPromise(axios.delete(`${baseUrl}/${action.payload}`))
                .pipe(
                    map(() => DeleteServiceSuccess(action.payload as number)),
                );
        }),
    );
