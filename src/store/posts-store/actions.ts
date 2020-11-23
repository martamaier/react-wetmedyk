import { Post } from "../../models/Post.model";

export enum PostActions {
    LoadPosts = '[Posts] Load Posts',
    AddPosts = '[Posts] Add Posts',
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
