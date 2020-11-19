import {ActionsObservable, ofType} from "redux-observable";
import {AddEmployees, EmployeeActions, EmployeeActionsTypes} from "./actions";
import {map, switchMap, take} from "rxjs/operators";
import axiosInstance from "../../services/interceptor";
import {CURRENT_ENV} from "../../environment";
import {fromPromise} from "rxjs/internal-compatibility";
import {AxiosResponse} from "axios";
import {Employee} from "../../models/Employee.model";

export const loadEmployees$ = (action$: ActionsObservable<EmployeeActionsTypes>) => action$
    .pipe(
        ofType(EmployeeActions.LoadEmployees),
        take(1),
        switchMap((action) => {
            return fromPromise(axiosInstance.get(`${CURRENT_ENV}/employees`))
                .pipe(
                    map((res: AxiosResponse<Employee[]>) => AddEmployees(res.data)),
                );
        }),
    );
