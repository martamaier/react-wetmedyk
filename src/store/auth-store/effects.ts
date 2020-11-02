import { ActionsObservable, ofType } from "redux-observable";
import { AuthActions, AuthActionsTypes, LogInErrorAction, LogInSuccessAction } from "./actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";
import axiosInstance from "../../services/interceptor";
import { CURRENT_ENV } from "../../environment";
import { AxiosResponse } from "axios";
import { AuthToken } from "../../models/AuthToken.model";
import { of } from "rxjs";

export const loginUser$ = (action$: ActionsObservable<AuthActionsTypes>) => action$.pipe(
    ofType(AuthActions.LogIn),
    mergeMap((action) => {
        return fromPromise(axiosInstance.post(`${CURRENT_ENV}/authenticate`, action.payload))
            .pipe(
                map((res: AxiosResponse<AuthToken>) => {
                    sessionStorage.setItem('user', JSON.stringify(res.data));
                    return LogInSuccessAction(res.data);
                }),
                catchError((err) => of(LogInErrorAction(err.message)))
            )
    }),
);
