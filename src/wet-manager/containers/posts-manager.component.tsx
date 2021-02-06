import React, {useEffect, useState} from 'react';
import DataTable from "../../shared/table.component";
import {LinearProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getPosts, getSelectedPost} from "../../store/posts-store/selectors";
import {AddPost, DeletePost, LoadPosts, SetSelectedPost, UpdatePost} from "../../store/posts-store/actions";
import PostForm from "../forms/post-form.component";
import {getUserName} from "../../store/auth-store/selectors";
import {Post} from "../../models/post.interface";
import {FormModes} from "../models/form-modes.types";
import {DataTypes} from "../../models/data-table.interface";

function PostsManager() {
    const posts = useSelector(getPosts);
    const isLoading = useSelector(getIsLoading);
    const selectedPost = useSelector(getSelectedPost);
    const userName = useSelector(getUserName);
    const dispatch = useDispatch();

    const [formMode, setFormMode] = useState<FormModes | null>(null);

    const columns: string[] = ['title', 'content', 'status', 'date'];
    const columnTypes: DataTypes[] = [DataTypes.text, DataTypes.text, DataTypes.text, DataTypes.text];

    const handleAddPost = () => {
        setFormMode(FormModes.Add);
        dispatch(SetSelectedPost(null));
    }
    const handleEditPost = ({ id }: Post) => {
        dispatch(SetSelectedPost(id));
        setFormMode(FormModes.Edit);
    }
    const handleDeletePost = ({ id }: Post) => {
        dispatch(DeletePost(id));
    }

    const handleUpdatePost = (post: Post) => {
        dispatch(formMode === FormModes.Add ? AddPost(post) : UpdatePost(post));
    }

    useEffect(() => {
        if (!posts.length && !isLoading) {
            dispatch(LoadPosts());
        }
    }, []);

    return (
        <>
            <p>Posts Manager</p>
            {
                !isLoading ? <DataTable
                    columnTypes={columnTypes}
                    columns={columns}
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
