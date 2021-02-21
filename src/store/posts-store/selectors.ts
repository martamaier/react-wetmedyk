import { RootState } from "../index";
import { Post } from "../../models/post.interface";
import {POST_STATUS_TYPES} from "../../wet-manager/models/post-status.types";

export const getPosts = (state: RootState): Post[] => state.post.posts;
export const getPublishedPosts = (state: RootState): Post[] => state.post.posts.filter((post: Post) => post.status === POST_STATUS_TYPES.Published);
export const getIsLoading = (state: RootState): boolean => state.post.isLoading;
export const getSelectedPost = (state: RootState): Post | null =>
    state.post.posts.find((post: Post) => post.id === state.post.selected) || null;
export const getPostError = (state: RootState): string | null => state.post.errorMessage;
