import React, {useEffect} from 'react';
import DataTable from "../../shared/table";
import {LinearProgress} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {getIsLoading, getPosts, getSelectedPost} from "../../store/posts-store/selectors";
import {LoadPosts, SetSelectedPost} from "../../store/posts-store/actions";
import PostForm from "../components/PostForm";

function PostsManager() {
    const posts = useSelector(getPosts);
    const isLoading = useSelector(getIsLoading);
    const selectedPost = useSelector(getSelectedPost);
    const dispatch = useDispatch();

    const handleAddPost = () => {}
    const handleEditPost = (id: number) => {
        dispatch(SetSelectedPost(id));
    }

    useEffect(() => {
        if (!posts.length && !isLoading) {
            dispatch(LoadPosts());
        }
    }, [dispatch, posts, isLoading]);

    return (
        <>
            {
                posts.length ? <DataTable
                    data={posts}
                    onAdd={console.log}
                    onDelete={console.log}
                    onEdit={handleEditPost} /> : <LinearProgress/>
            }
            {
                selectedPost && <PostForm post={selectedPost} />
            }
        </>

    )
}

export default PostsManager;
