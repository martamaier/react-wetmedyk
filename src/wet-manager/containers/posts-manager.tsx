import React, {useEffect, useState} from 'react';
import {AxiosResponse} from 'axios';
import {CURRENT_ENV} from "../../environment";
import {Post} from "../../models/Post.model";
import DataTable from "../../shared/table";
import {LinearProgress} from "@material-ui/core";
import axiosInstance from "../../services/interceptor";

function PostsManager() {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        getPosts()
    }, [])

    return (
        posts.length ? <DataTable data={posts} onAdd={console.log} onDelete={console.log} onEdit={console.log} /> : <LinearProgress/>
    )

    function getPosts() {
        axiosInstance.get(`${CURRENT_ENV}/posts`).then((res: AxiosResponse<Post[]>) => {
            setPosts(res.data)
        })
    }
}

export default PostsManager;
