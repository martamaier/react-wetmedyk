import React, {useEffect, useState} from 'react';
import DataTable from "../../shared/table";
import {LinearProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getPosts, getSelectedPost} from "../../store/posts-store/selectors";
import {AddPost, DeletePost, LoadPosts, SetSelectedPost, UpdatePost} from "../../store/posts-store/actions";
import PostForm from "../components/PostForm";
import {getUserName} from "../../store/auth-store/selectors";
import {Post} from "../../models/Post.model";
import {FormModes} from "../models/FormModes";

function PostsManager() {
    const posts = useSelector(getPosts);
    const isLoading = useSelector(getIsLoading);
    const selectedPost = useSelector(getSelectedPost);
    const userName = useSelector(getUserName);
    const dispatch = useDispatch();

    const [formMode, setFormMode] = useState<FormModes | null>(null);

    const handleAddPost = () => {
        setFormMode(FormModes.Add);
    }
    const handleEditPost = (id: number) => {
        dispatch(SetSelectedPost(id));
        setFormMode(FormModes.Edit);
    }
    const handleDeletePost = (id: number) => {
        console.log(id);
        dispatch(DeletePost(id));
    }

    const handleUpdatePost = (post: Post) => {
        dispatch(formMode === FormModes.Add ? AddPost(post) : UpdatePost(post));
        console.log(post, formMode);
    }

    useEffect(() => {
        if (!posts.length && !isLoading) {
            dispatch(LoadPosts());
        }
    }, []);

    return (
        <>
            {
                !isLoading ? <DataTable
                    data={posts}
                    onAdd={handleAddPost}
                    onDelete={handleDeletePost}
                    onEdit={handleEditPost} /> : <LinearProgress/>
            }
            {
                (selectedPost || formMode) && <PostForm
                    onSubmit={handleUpdatePost}
                    userName={userName}
                    post={selectedPost} />
            }
        </>

    )
}

export default PostsManager;
