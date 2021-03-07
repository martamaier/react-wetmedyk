import {INITIAL_STATE, PostState} from "./index";
import {PostActions, PostActionsTypes} from "./actions";
import * as _ from 'lodash';
import {Post} from "../../models/post.interface";

export default function postsReducer(
    state: PostState = INITIAL_STATE,
    action: PostActionsTypes
) {
    const newState = _.cloneDeep(state);

    switch (action.type) {
        case PostActions.LoadPosts:
            return {
                ...newState,
                isLoading: true,
            }
        case PostActions.AddPosts:
            return {
                ...newState,
                posts: _.sortBy([...newState.posts, ...action.payload as Post[]], 'id'),
                isLoading: false,
                errorMessage: null,
            }
        case PostActions.SetSelectedPost:
            return {
                ...newState,
                selected: action.payload,
            }
        case PostActions.AddPost:
        case PostActions.UpdatePost:
        case PostActions.DeletePost:
            return {
                ...newState,
                isSaving: true,
            }
        case PostActions.UpdatePostSuccess:
        case PostActions.AddPostSuccess:
            const newPost = action.payload as Post;
            const posts = _.sortBy([...newState.posts.filter((post: Post) => post.id !== newPost.id), newPost], 'id');
            return {
                ...newState,
                posts,
                isSaving: false,
                errorMessage: null,
            }
        case PostActions.DeletePostSuccess:
            return {
                ...newState,
                isSaving: false,
                posts: newState.posts.filter((post: Post) => post.id !== action.payload),
                errorMessage: null,
            }
        default:
            return state;
    }
}
