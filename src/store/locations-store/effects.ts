import { ActionsObservable, ofType } from "redux-observable";
import { AddLocations, LocationActions, LocationActionsTypes } from "./actions";
import { switchMap, take, map } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";
import axiosInstance from "../../services/interceptor";
import { CURRENT_ENV } from "../../environment";
import { AxiosResponse } from "axios";
import { Location } from "../../models/Location.model";

export const loadLocations$ = (action$: ActionsObservable<LocationActionsTypes>) => action$
    .pipe(
        ofType(LocationActions.LoadLocations),
        take(1),
        switchMap((action) => {
            return fromPromise(axiosInstance.get(`${CURRENT_ENV}/locations`))
                .pipe(
                    map((res: AxiosResponse<Location[]>) => AddLocations(res.data)),
                    )
        }),
    );
