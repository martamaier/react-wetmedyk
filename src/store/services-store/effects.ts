import { ActionsObservable, ofType } from "redux-observable";
import { AddServices, ServiceActions, ServiceActionsTypes } from "./actions";
import { switchMap, take, map } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";
import { AxiosResponse } from "axios";
import axios from 'axios';
import { PrimaryServiceCard } from "../../models/primary-service-card.interface";

export const loadServices$ = (action$: ActionsObservable<ServiceActionsTypes>) => action$
    .pipe(
        ofType(ServiceActions.LoadServices),
        take(1),
        switchMap((action) => {
            return fromPromise(axios.get('/data/primary-services.json'))
                .pipe(
                    map((res: AxiosResponse<PrimaryServiceCard[]>) => AddServices(res.data)),
                )
        }),
    );
