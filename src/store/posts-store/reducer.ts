import {INITIAL_STATE, PostState} from "./index";
import {PostActions, PostActionsTypes} from "./actions";
import * as _ from 'lodash';
import {Post} from "../../models/Post.model";

export default function (
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
                posts: [...newState.posts, ...action.payload as Post[]],
                isLoading: false,
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
            }
        case PostActions.DeletePostSuccess:
            return {
                ...newState,
                isSaving: false,
                posts: newState.posts.filter((post: Post) => post.id !== action.payload),
            }
        default:
            return state;
    }
}
