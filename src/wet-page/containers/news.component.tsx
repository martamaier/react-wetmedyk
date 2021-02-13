import React from "react";
import PostCard from '../components/post-card.component';
import classes from './news.module.scss';
import '../../scss/_utilities.scss';
import {Post} from "../../models/post.interface";
import {mapPostToModalItem, ModalItem} from "../../models/modal-data.interface";
import {useDispatch} from "react-redux";
import {LoadPosts} from "../../store/posts-store/actions";
import {getIsLoading, getPosts} from "../../store/posts-store/selectors";
import {ModalState} from "../../store/modal-store";
import {OpenModal} from "../../store/modal-store/actions";
import {DataFetchInterface} from "../../wet-manager/models/data-fetch.interface";
import {DataFetchProps} from "../../wet-manager/models/data-fetch-props.interface";
import withDataFetch from "../../wet-manager/shared/hoc/with-data-fetch.component";

function News({ data }: DataFetchProps<Post>) {
    const dispatch = useDispatch();
    const heading = 'Aktualności';
    const openModal = (id: number) => {
        const modalData: ModalState<ModalItem> = {
            data: mapPostToModalItem((data || []).find((post: Post) => post.id === id) as Post),
            contentType: "post",
            shouldDisplay: true,
        }
        dispatch(OpenModal(modalData));
    }

    return (
        <section id={'news'} className={classes.news}>
            <h2>{heading}</h2>
            <div className={classes.newsContainer}>
                {(data || []).map((post: Post) => (
                    <PostCard key={post.id} post={post} onClick={openModal}/>
                ))}
            </div>
        </section>);
}

const options: DataFetchInterface<Post> = {
    loadingSelector: getIsLoading,
    dataSelector: getPosts,
    dataLoader: LoadPosts,
};

export default withDataFetch(News, options);
