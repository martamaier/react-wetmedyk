import { ActionsObservable, ofType } from "redux-observable";
import { AddServices, ServiceActions, ServiceActionsTypes } from "./actions";
import { switchMap, take, map } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";
import { AxiosResponse } from "axios";
import axios from 'axios';
import { PrimaryServiceCard } from "../../models/primary-service-card.interface";
import {CURRENT_ENV} from "../../environment";

const baseUrl = `${CURRENT_ENV}/services`;

export const loadServices$ = (action$: ActionsObservable<ServiceActionsTypes>) => action$
    .pipe(
        ofType(ServiceActions.LoadServices),
        take(1),
        switchMap((action) => {
            return fromPromise(axios.get(baseUrl))
                .pipe(
                    map((res: AxiosResponse<PrimaryServiceCard[]>) => AddServices(res.data)),
                )
        }),
    );
