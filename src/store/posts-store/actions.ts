import { Post } from "../../models/Post.model";

export enum PostActions {
    LoadPosts = '[Posts] Load Posts',
    AddPosts = '[Posts] Add Posts',
    SetSelectedPost = '[Posts] Set Selected Post',
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
