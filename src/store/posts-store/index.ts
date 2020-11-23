import { Post } from "../../models/Post.model";

export interface PostState {
    posts: Post[];
    isLoading: boolean;
    errorMessage: string | null;
    selected: number | null;
}

export const INITIAL_STATE: PostState = {
    posts: [],
    isLoading: false,
    errorMessage: null,
    selected: null,
}
