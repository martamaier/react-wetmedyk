import { ActionsObservable, ofType } from "redux-observable";
import { AuthActions, AuthActionsTypes, LogInErrorAction, LogInSuccessAction, LogOutSuccessAction } from "./actions";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";
import axiosInstance from "../../services/interceptor";
import { CURRENT_ENV } from "../../environment";
import { AxiosResponse } from "axios";
import { AuthToken } from "../../models/AuthToken.model";
import { of } from "rxjs";
import { Login } from "../../models/Login.model";

export const loginUser$ = (action$: ActionsObservable<AuthActionsTypes>) => action$.pipe(
    ofType(AuthActions.LogIn),
    mergeMap((action) => {
        return fromPromise(axiosInstance.post(`${CURRENT_ENV}/authenticate`, action.payload))
            .pipe(
                map((res: AxiosResponse<AuthToken>) => {
                    const userData = {
                        ...res.data,
                        userName: (action.payload as Login).userName,
                    }
                    sessionStorage.setItem('user', JSON.stringify(userData));

                    return LogInSuccessAction(userData);
                }),
                catchError((err) => of(LogInErrorAction(err.message)))
            )
    }),
);

export const logoutUser$ = (action$: ActionsObservable<AuthActionsTypes>) => action$.pipe(
    ofType(AuthActions.LogOut),
    tap(() => sessionStorage.removeItem('user')),
    map(() => LogOutSuccessAction()),
);
