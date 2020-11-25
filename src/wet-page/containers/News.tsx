import React, {useEffect, useState} from "react";
import PostCard from '../components/PostCard';
import ControlArrows from "../../shared/ControlArrows";
import {Col, Row} from "react-bootstrap";
import styles from './Employees.module.scss';
import '../../scss/_utilities.scss';
import {Post} from "../../models/Post.model";
import { mapPostToModalItem, ModalItem } from "../../models/ModalData.model";
import { useDispatch, useSelector } from "react-redux";
import { LoadPosts } from "../../store/posts-store/actions";
import { getIsLoading, getPosts } from "../../store/posts-store/selectors";
import { ModalState } from "../../store/modal-store";
import { OpenModal } from "../../store/modal-store/actions";

function News() {
    const news = useSelector(getPosts);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();
    const { heading, description, footer } = {
        heading: 'Aktualności',
        description: 'Mamy nadzieję,że znajdziecie tu wszystko czego Wasz Pupil potrzebuje do zdrowego i radosnego życia. Do zobaczenia!',
        footer: 'Zespół Centrum Weterynaryjnego WET-MEDYK',
    }
    const [offset, setOffset] = useState(0);
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

    useEffect(() => {
        const newsContainer = document.querySelector('.news-scroll');

        (newsContainer as any).scrollTo({ left: offset, behavior: 'smooth' });
    }, [offset])

        return (
            <section className={[styles.news, 'sectionPadding'].join(' ')}>
                <Row>
                    <Col md={6} sm={12} className={['row', styles.title].join(' ')}>
                        <Col md={4} sm={12} />
                        <Col md={4} sm={12} />
                        <Col md={4} sm={12} className={styles.newsContent}>
                            <h2>{heading}</h2>
                            <p>{description}</p>
                            <span>{footer}</span>
                        </Col>
                    </Col>
                    <Col md={6} sm={12} className={[styles.newsContainer, 'news-scroll'].join(' ')}>
                        {news.map((post: Post) => (
                            <PostCard key={post.id} post={post} onClick={openModal} />
                        ))}

                    </Col>
                </Row>
                <Row>
                    <Col md={6}/>
                    <Col md={6}>
                        <ControlArrows
                            maxCount={news.length}
                            onLeftClick={() => setOffset(offset - 470)}
                            onRightClick={() => setOffset(offset + 470)}/>
                    </Col>
                </Row>
            </section>);
}

export default News;
