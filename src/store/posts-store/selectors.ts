import { RootState } from "../index";
import { Post } from "../../models/Post.model";

export const getPosts = (state: RootState): Post[] => state.post.posts;
export const getIsLoading = (state: RootState): boolean => state.post.isLoading;
