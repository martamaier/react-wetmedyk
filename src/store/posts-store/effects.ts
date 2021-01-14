import { ActionsObservable, ofType } from "redux-observable";
import {AddPosts, PostActions, PostActionsTypes, UpdatePostSuccess} from "./actions";
import { switchMap, take, map } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";
import axiosInstance from "../../services/interceptor";
import { CURRENT_ENV } from "../../environment";
import { AxiosResponse } from "axios";
import { Post } from "../../models/Post.model";

export const loadPosts$ = (action$: ActionsObservable<PostActionsTypes>) => action$
.pipe(
    ofType(PostActions.LoadPosts),
    take(1),
    switchMap((action) => {
        return fromPromise(axiosInstance.get(`${CURRENT_ENV}/posts`))
            .pipe(
                map((res: AxiosResponse<Post[]>) => AddPosts(res.data)),
            );
    }),
);

export const updatePost$ = (action$: ActionsObservable<PostActionsTypes>) => action$
    .pipe(
        ofType(PostActions.UpdatePost),
        take(1),
        switchMap((action) => {
            const id = (action.payload as Post).id;
            return fromPromise(axiosInstance.put(`${CURRENT_ENV}/posts/${id}`, action.payload))
                .pipe(
                    map((res: AxiosResponse<Post>) => UpdatePostSuccess(res.data)),
                )
        }),
    );
