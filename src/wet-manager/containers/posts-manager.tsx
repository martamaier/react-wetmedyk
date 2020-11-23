import React, {useEffect} from 'react';
import DataTable from "../../shared/table";
import {LinearProgress} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, getPosts } from "../../store/posts-store/selectors";
import { LoadPosts } from "../../store/posts-store/actions";

function PostsManager() {
    const posts = useSelector(getPosts);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts.length && !isLoading) {
            dispatch(LoadPosts());
        }
    }, [dispatch, posts, isLoading])

    return (
        posts.length ? <DataTable data={posts} onAdd={console.log} onDelete={console.log} onEdit={console.log} /> : <LinearProgress/>
    )
}

export default PostsManager;
