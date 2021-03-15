import React, {useEffect} from "react";
import PostCard from '../components/post-card.component';
import classes from './news.module.scss';
import '../../scss/_utilities.scss';
import {Post} from "../../models/post.interface";
import {mapPostToModalItem, ModalItem} from "../../models/modal-data.interface";
import {useDispatch, useSelector} from "react-redux";
import {LoadPosts} from "../../store/posts-store/actions";
import {getIsLoading, getPublishedPosts} from "../../store/posts-store/selectors";
import {ModalState} from "../../store/modal-store";
import {OpenModal} from "../../store/modal-store/actions";
import * as _ from 'lodash';

function News() {
    const news = useSelector(getPublishedPosts);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();
    const heading = 'Aktualności';
    const openModal = (id: number) => {
        const modalData: ModalState<ModalItem> = {
            data: mapPostToModalItem(news.find((post: Post) => post.id === id) as Post),
            contentType: "post",
            shouldDisplay: true,
        }
        dispatch(OpenModal(modalData));
    }

    useEffect(() => {
        if (!news.length && !isLoading) {
            dispatch(LoadPosts());
        }
    }, [dispatch, news, isLoading])

    return (
        <section id={'news'} className={classes.news}>
            <h2>{heading}</h2>
            <div className={classes.newsContainer}>
                {_.sortBy(news, 'id').reverse().map((post: Post) => (
                    <PostCard key={post.id} post={post} onClick={openModal}/>
                ))}
            </div>
        </section>);
}

export default News;
