import { Post } from "../../models/Post.model";

export enum PostActions {
    LoadPosts = '[Posts] Load Posts',
    AddPosts = '[Posts] Add Posts',
    SetSelectedPost = '[Posts] Set Selected Post',
    UpdatePost = '[Posts] Update Post',
    UpdatePostSuccess = '[Posts] Update Post Success',
    AddPost = '[Posts] Add Post',
    AddPostSuccess = '[Posts] Add Post Success',
    DeletePost = '[Posts] Delete Post',
    DeletePostSuccess = '[Posts] Delete Post Success',
}

export interface PostActionsTypes {
    type: PostActions;
    payload?: Post | Partial<Post> | Post[] | number | null;
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

export function SetSelectedPost(payload: number | null): PostActionsTypes {
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

export function AddPost(payload: Partial<Post>): PostActionsTypes {
    return {
        payload,
        type: PostActions.AddPost,
    }
}

export function AddPostSuccess(payload: Post): PostActionsTypes {
    return {
        payload,
        type: PostActions.AddPostSuccess,
    }
}

export function DeletePost(payload: number): PostActionsTypes {
    return {
        payload,
        type: PostActions.DeletePost,
    }
}

export function DeletePostSuccess(payload: number): PostActionsTypes {
    return {
        payload,
        type: PostActions.DeletePostSuccess,
    }
}
