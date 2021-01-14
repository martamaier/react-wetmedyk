import { Post } from "../../models/Post.model";

export enum PostActions {
    LoadPosts = '[Posts] Load Posts',
    AddPosts = '[Posts] Add Posts',
    SetSelectedPost = '[Posts] Set Selected Post',
    UpdatePost = '[Posts] Update Post',
    UpdatePostSuccess = '[Posts] Update Post Success',
}

export interface PostActionsTypes {
    type: PostActions;
    payload?: Post | Post[] | number;
}

export function LoadPosts(): PostActionsTypes {
    return {
        type: PostActions.LoadPosts,
    }
}

export function AddPosts(payload: Post[]): PostActionsTypes {
    return {
        payload,
        type: PostActions.AddPosts,
    } as {
        payload: Post[],
        type: PostActions,
    }
}

export function SetSelectedPost(payload: number): PostActionsTypes {
    return {
        payload,
        type: PostActions.SetSelectedPost,
    }
}

export function UpdatePost(payload: Post): PostActionsTypes {
    return {
        payload,
        type: PostActions.UpdatePost,
    }
}

export function UpdatePostSuccess(payload: Post): PostActionsTypes {
    return {
        payload,
        type: PostActions.UpdatePostSuccess,
    }
}
