import {CURRENT_ENV} from "../../environment";
import {ActionsObservable, ofType} from "redux-observable";
import {AddUserError, AddUsers, AddUserSuccess, UsersActions, UsersActionsTypes} from "./actions";
import {switchMap, map, catchError} from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";
import axiosInstance from "../../services/interceptor";
import {AxiosResponse} from "axios";
import {User} from "../../wet-manager/models/user.interface";
import {of} from "rxjs";

const baseUrl = `${CURRENT_ENV}/users`;

export const loadUsers$ = (action$: ActionsObservable<UsersActionsTypes>) => action$
    .pipe(
        ofType(UsersActions.LoadUsers),
        switchMap(() => {
            return fromPromise(axiosInstance.get(baseUrl))
                .pipe(
                    map((res: AxiosResponse<User[]>) => AddUsers(res.data)),
                );
        }),
    );

export const addUser$ = (action$: ActionsObservable<UsersActionsTypes>) => action$
    .pipe(
        ofType(UsersActions.AddUser),
        switchMap((action) => {
            return fromPromise(axiosInstance.post(`${CURRENT_ENV}/signup`, action.payload))
                .pipe(
                    map((res: AxiosResponse<User>) => AddUserSuccess(res.data)),
                    catchError((err: Error) => of(AddUserError(err.message))),
                );
        }),
    );
