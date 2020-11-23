import { INITIAL_STATE, PostState } from "./index";
import { PostActions, PostActionsTypes } from "./actions";
import * as _ from 'lodash';
import { Post } from "../../models/Post.model";

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
        default:
            return state;
    }
}
