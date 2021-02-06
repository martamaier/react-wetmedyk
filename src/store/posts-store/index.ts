import { Post } from "../../models/post.interface";
import { FeatureState } from "../index";

export interface PostState extends FeatureState {
    posts: Post[];
}

export const INITIAL_STATE: PostState = {
    posts: [],
    isLoading: false,
    errorMessage: null,
    selected: null,
    isSaving: false,
}
