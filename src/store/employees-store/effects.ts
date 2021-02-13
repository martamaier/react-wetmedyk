import {ActionsObservable, ofType} from "redux-observable";
import {
    AddEmployees,
    AddEmployeeSuccess,
    DeleteEmployeeSuccess,
    EmployeeActions,
    EmployeeActionsTypes, EmployeeError, UpdateEmployeeSuccess
} from "./actions";
import {catchError, map, switchMap} from "rxjs/operators";
import axiosInstance from "../../services/interceptor";
import {CURRENT_ENV} from "../../environment";
import {fromPromise} from "rxjs/internal-compatibility";
import {AxiosResponse} from "axios";
import {Employee} from "../../models/employee.interface";
import {of} from "rxjs";

const baseUrl = `${CURRENT_ENV}/employees`;

export const loadEmployees$ = (action$: ActionsObservable<EmployeeActionsTypes>) => action$
    .pipe(
        ofType(EmployeeActions.LoadEmployees),
        switchMap(() => {
            return fromPromise(axiosInstance.get(baseUrl))
                .pipe(
                    map((res: AxiosResponse<Employee[]>) => AddEmployees(res.data)),
                    catchError((error: Error) => of(EmployeeError(error.message))),
                );
        }),
    );

export const deleteEmployee$ = (action$: ActionsObservable<EmployeeActionsTypes>) => action$
    .pipe(
        ofType(EmployeeActions.DeleteEmployee),
        switchMap((action) => {
            return fromPromise(axiosInstance.delete(`${baseUrl}/${action.payload}`))
                .pipe(
                    map((res: AxiosResponse<Employee>) => DeleteEmployeeSuccess(res.data.id))
                )
        }),
    );

export const addEmployee$ = (action$: ActionsObservable<EmployeeActionsTypes>) => action$
    .pipe(
        ofType(EmployeeActions.AddEmployee),
        switchMap((action) => {
            return fromPromise(axiosInstance.post(baseUrl, action.payload))
                .pipe(
                    map((res: AxiosResponse<Employee>) => AddEmployeeSuccess(res.data)),
                );
        }),
    );

export const updateEmployee$ = (action$: ActionsObservable<EmployeeActionsTypes>) => action$
    .pipe(
        ofType(EmployeeActions.UpdateEmployee),
        switchMap((action) => {
            const id = (action.payload as Employee).id;
            return fromPromise(axiosInstance.put(`${baseUrl}/${id}`, action.payload))
                .pipe(
                    map((res: AxiosResponse<Employee>) => UpdateEmployeeSuccess(res.data)),
                );
        }),
    );
