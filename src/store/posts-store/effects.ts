import { ActionsObservable, ofType } from "redux-observable";
import {AddPosts, AddPostSuccess, DeletePostSuccess, PostActions, PostActionsTypes, UpdatePostSuccess} from "./actions";
import { switchMap, map } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";
import axiosInstance from "../../services/interceptor";
import { CURRENT_ENV } from "../../environment";
import { AxiosResponse } from "axios";
import { Post } from "../../models/post.interface";

const baseUrl = `${CURRENT_ENV}/posts`;

export const loadPosts$ = (action$: ActionsObservable<PostActionsTypes>) => action$
.pipe(
    ofType(PostActions.LoadPosts),
    switchMap((action) => {
        return fromPromise(axiosInstance.get(baseUrl))
            .pipe(
                map((res: AxiosResponse<Post[]>) => AddPosts(res.data)),
            );
    }),
);

export const updatePost$ = (action$: ActionsObservable<PostActionsTypes>) => action$
    .pipe(
        ofType(PostActions.UpdatePost),
        switchMap((action) => {
            const id = (action.payload as Post).id;
            return fromPromise(axiosInstance.put(`${baseUrl}/${id}`, action.payload))
                .pipe(
                    map((res: AxiosResponse<Post>) => UpdatePostSuccess(res.data)),
                )
        }),
    );

export const addPost$ = (action$: ActionsObservable<PostActionsTypes>) => action$
    .pipe(
        ofType(PostActions.AddPost),
        switchMap((action) => {
            return fromPromise(axiosInstance.post(baseUrl, action.payload))
                .pipe(
                    map((res: AxiosResponse<Post>) => AddPostSuccess(res.data)),
                    );
        }),
    );

export const deletePost$ = (action$: ActionsObservable<PostActionsTypes>) => action$
    .pipe(
        ofType(PostActions.DeletePost),
        switchMap((action) => {
            return fromPromise(axiosInstance.delete(`${baseUrl}/${action.payload}`))
                .pipe(
                    map((res: AxiosResponse<Post>) => DeletePostSuccess(action.payload as number)),
                )
        }),
    )
