import { RootState } from "../index";
import { Post } from "../../models/Post.model";

export const getPosts = (state: RootState): Post[] => state.post.posts;
export const getIsLoading = (state: RootState): boolean => state.post.isLoading;
export const getSelectedPost = (state: RootState): Post | null =>
    state.post.posts.find((post: Post) => post.id === state.post.selected) || null;
